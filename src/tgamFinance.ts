import WebSocket from 'isomorphic-ws';
import {
  ErrorEvent,
  ExchangeMetaDataResponse,
  messageTypesByProtocol,
  protocolNames,
  protocolNameToCodes,
  SymbolDataResponse,
  SymbolMetaDataResponse,
  TGAMFinanceEvents,
  WS_URI,
} from './constantsAndTypes';
import { dataSchema, metadataSchema } from './external/constants';
import { decodeSocketInnerData } from './external/helpers';
import EventEmitter from 'eventemitter3';

interface SendMessageArgs {
  protocolCode: number | string;
  messageCode?: number | string;
  data?: unknown;
}

export class TGAMFinance {
  private socket: null | WebSocket;
  private eventEmitter: EventEmitter<TGAMFinanceEvents, any>;

  constructor() {
    this.socket = null;
    this.eventEmitter = new EventEmitter();
  }

  private lazyConnect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.socket != null && this.socket.readyState == this.socket.OPEN) {
        resolve();
        return;
      }

      this.socket = new WebSocket(WS_URI);

      this.socket.addEventListener(
        'open',
        () => {
          resolve();
        },
        { once: true },
      );

      this.socket.addEventListener(
        'error',
        () => {
          reject();
        },
        { once: true },
      );

      this.socket.addEventListener('error', (error) => {
        this.eventEmitter.emit(TGAMFinanceEvents.error, error);
      });

      this.socket.addEventListener('message', (event) => {
        let data = event.data;

        // Extract protocol code i.e first char
        const protocolCode = data.charAt(0);
        data = data.substring(1);

        if (Number(protocolCode) == protocolCode && protocolNames[protocolCode] != null) {
          if (protocolCode == protocolNameToCodes.open) {
            data = JSON.parse(data);

            setInterval(() => {
              this.sendMessage({ protocolCode: protocolNameToCodes.ping });
            }, data.pingInterval);
          }

          if (protocolCode == protocolNameToCodes.message) {
            // Extract message code i.e second char
            const messageCode = data.charAt(0);
            data = data.substring(1);

            if (messageCode == messageTypesByProtocol.message.byType.EVENT) {
              data = JSON.parse(data);
              const dataCode = data[0];

              if (dataCode == 'p/s') {
                data = decodeSocketInnerData(data[1], metadataSchema);
                this.eventEmitter.emit(TGAMFinanceEvents.symbolMetaData, data);
              }
              if (dataCode == 'q/s') {
                data = decodeSocketInnerData(data[1], dataSchema);
                this.eventEmitter.emit(TGAMFinanceEvents.symbolData, data);
              }
              if (dataCode == 'e/s') {
                data = data[1];
                this.eventEmitter.emit(TGAMFinanceEvents.exchangeMetaData, data);
              }
            }
          }
        }

        // Dispatch to the right callbacks
      });
    });
  }

  private async sendMessage({ protocolCode, messageCode = '', data = '' }: SendMessageArgs) {
    await this.lazyConnect();
    const message = `${protocolCode}${messageCode}${typeof data == 'string' ? data : JSON.stringify(data)}`;
    this.socket?.send(message);
    return;
  }

  async subscribeToSymbols(symbols: string[]): Promise<void> {
    return this.sendMessage({
      protocolCode: protocolNameToCodes.message,
      messageCode: messageTypesByProtocol.message.byType.EVENT,
      data: [
        'subscribe/symbols',
        {
          subscribeToPrices: true,
          symbols: symbols,
        },
      ],
    });
  }

  async subscribeToExchanges(markets: string[]): Promise<void> {
    return this.sendMessage({
      protocolCode: protocolNameToCodes.message,
      messageCode: messageTypesByProtocol.message.byType.EVENT,
      data: [
        'subscribe/exchanges',
        {
          codes: markets,
        },
      ],
    });
  }

  addSymbolDataListener(callback: (data: SymbolDataResponse) => void): void {
    this.eventEmitter.on(TGAMFinanceEvents.symbolData, callback);
  }

  removeSymbolDataListener(callback: (data: SymbolDataResponse) => void): void {
    this.eventEmitter.off(TGAMFinanceEvents.symbolData, callback);
  }

  addSymbolMetaDataListener(callback: (data: SymbolMetaDataResponse) => void): void {
    this.eventEmitter.on(TGAMFinanceEvents.symbolMetaData, callback);
  }

  removeSymbolMetaDataListener(callback: (data: SymbolMetaDataResponse) => void): void {
    this.eventEmitter.off(TGAMFinanceEvents.symbolMetaData, callback);
  }

  addExchangeMetaDataListener(callback: (data: ExchangeMetaDataResponse) => void): void {
    this.eventEmitter.on(TGAMFinanceEvents.exchangeMetaData, callback);
  }

  removeExchangeMetaDataListener(callback: (data: ExchangeMetaDataResponse) => void): void {
    this.eventEmitter.off(TGAMFinanceEvents.exchangeMetaData, callback);
  }

  addErrorListener(callback: (error: ErrorEvent) => void): void {
    this.eventEmitter.on(TGAMFinanceEvents.error, callback);
  }

  removeErrorListener(callback: (error: ErrorEvent) => void): void {
    this.eventEmitter.off(TGAMFinanceEvents.error, callback);
  }
}
