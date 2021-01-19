import WebSocket from 'isomorphic-ws';

export const WS_URI = 'wss://jerq-aggregator-tgam.aws.barchart.com/socket.io/?EIO=3&transport=websocket';

export const messageTypesByProtocol = {
  message: {
    protocol: 4,
    byIndex: ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'],
    byType: {
      CONNECT: 0,
      DISCONNECT: 1,
      EVENT: 2,
      ACK: 3,
      ERROR: 4,
      BINARY_EVENT: 5,
      BINARY_ACK: 6,
    },
  },
};

export enum protocolNameToCodes {
  open = 0,
  close = 1,
  ping = 2,
  pong = 3,
  message = 4,
  upgrade = 5,
  noop = 6,
}

export const protocolNames = Object.values(protocolNameToCodes).filter(
  (value) => typeof value === 'string',
) as string[];

export enum TGAMFinanceEvents {
  symbolMetaData = 'symbolMetaData',
  symbolData = 'symbolData',
  exchangeMetaData = 'exchangeMetaData',
  error = 'error',
}

export interface SymbolDataResponse {
  symbol: string; //   "symbol": "CNQ.TO",
  sequence: number; //   "sequence": 221689,
  flag: unknown; //   "flag": null,
  mode: string; //   "mode": 'R',
  day: string; //    "day": 'H' | 'I',
  dayNum: number; //   "dayNum": 19,
  session: string; //   "session": " ",
  sessionT: boolean; //   "sessionT": false,
  sessionDateDisplay: string; //   "sessionDateDisplay": "01/19/21",
  bidPrice: number; //   "bidPrice": 31.6,
  bidSize: number; //   "bidSize": 4,
  askPrice: number; //   "askPrice": 31.61,
  askSize: number; //   "askSize": 25,
  lastPrice: number; //   "lastPrice": 31.6,
  lastPriceT: number; //   "lastPriceT": 31.71,
  tradePrice: number; //   "tradePrice": 31.6,
  tradeSize: number; //   "tradeSize": 100,
  tradeTime: Date; //   "tradeTime": "2021-01-19T15:53:59.021Z",
  tradeTimeActual: number; //   "tradeTimeActual": 1611089639021,
  tradeTimeDisplay: string; //   "tradeTimeDisplay": "15:53 ET",
  tradeDateDisplay: string; //   "tradeDateDisplay": "01/19/21",
  numberOfTrades: number; //   "numberOfTrades": 11531,
  settlementPrice: number; //   "settlementPrice": null,
  openPrice: number; //   "openPrice": 31.48,
  highPrice: number; //   "highPrice": 31.8,
  lowPrice: number; //   "lowPrice": 31.08,
  volume: number; //   "volume": 2266174,
  openInterest: number; //   "openInterest": null,
  time: Date; //   "time": "2021-01-19T15:53:59.021Z",
  timeActual: number; //   "timeActual": 1611089639021,
  timeDisplay: string; //   "timeDisplay": "15:53 ET",
  timeDateDisplay: string; //   "timeDateDisplay": "01/19/21",
  previousPrice: number; //   "previousPrice": 31.36,
  previousPreviousPrice: number; //   "previousPreviousPrice": 31.52,
  previousSettlementPrice: number; //   "previousSettlementPrice": 31.36,
  previousOpenPrice: number; //   "previousOpenPrice": 31,
  previousHighPrice: number; //   "previousHighPrice": 31.62,
  previousLowPrice: number; //   "previousLowPrice": 30.95,
  previousTime: Date; //   "previousTime": "2021-01-18T00:00:00.000Z",
  previousTimeDateDisplay: string; //   "previousTimeDateDisplay": "01/18/21",
  online: boolean; //   "online": true
}

export interface SymbolMetaDataResponse {
  symbol: string; //   "symbol": "CNQ.TO",
  sequence: number; //   "sequence": 2,
  name: string; //   "name": "CDN Natural Res",
  exchange: string; //   "exchange": "TSX",
  unitCode: string; //   "unitCode": "A",
  pointValue: number; //   "pointValue": 1,
  tickIncrement: number; //   "tickIncrement": 1,
  root: unknown; //   "root": null,
  month: unknown; //   "month": null,
  year: unknown; //   "year": null
}

export interface ExchangeMetaDataResponse {
  code: string; //   "code": "BATS",
  status: string; //   "status": "open", "postmarket"
  sequence: number; //   "sequence": 6
}

export interface ErrorEvent {
  error: any;
  message: any;
  type: string;
  target: WebSocket;
}
