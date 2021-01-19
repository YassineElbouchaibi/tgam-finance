/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const timestampType = {
  convert: function (t: { toString: () => any }) {
    return t.toString();
  },
  unconvert: function (t: string) {
    return Number.parseInt(t);
  },
  getName: function () {
    return 'uint48';
  },
};

export const dataSchema = {
  map: {
    symbol: {
      name: 'symbol',
      index: 0,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    sequence: {
      name: 'sequence',
      index: 1,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int32';
        },
      },
    },
    flag: {
      name: 'flag',
      index: 2,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    mode: {
      name: 'mode',
      index: 3,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    day: {
      name: 'day',
      index: 4,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    dayNum: {
      name: 'dayNum',
      index: 5,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint8';
        },
      },
    },
    session: {
      name: 'session',
      index: 6,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    sessionT: {
      name: 'sessionT',
      index: 7,
      type: {
        convert: function (t: any) {
          return t ? 'T' : 'F';
        },
        unconvert: function (t: string) {
          return 'T' === t;
        },
        getName: function () {
          return 'boolean';
        },
      },
    },
    sessionDateDisplay: {
      name: 'sessionDateDisplay',
      index: 8,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    bidPrice: {
      name: 'bidPrice',
      index: 9,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    bidSize: {
      name: 'bidSize',
      index: 10,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    askPrice: {
      name: 'askPrice',
      index: 11,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    askSize: {
      name: 'askSize',
      index: 12,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    lastPrice: {
      name: 'lastPrice',
      index: 13,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    lastPriceT: {
      name: 'lastPriceT',
      index: 14,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    tradePrice: {
      name: 'tradePrice',
      index: 15,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    tradeSize: {
      name: 'tradeSize',
      index: 16,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    tradeTime: {
      name: 'tradeTime',
      index: 17,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    tradeTimeActual: {
      name: 'tradeTimeActual',
      index: 18,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint48';
        },
      },
    },
    tradeTimeDisplay: {
      name: 'tradeTimeDisplay',
      index: 19,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    tradeDateDisplay: {
      name: 'tradeDateDisplay',
      index: 20,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    numberOfTrades: {
      name: 'numberOfTrades',
      index: 21,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    settlementPrice: {
      name: 'settlementPrice',
      index: 22,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    openPrice: {
      name: 'openPrice',
      index: 23,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    highPrice: {
      name: 'highPrice',
      index: 24,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    lowPrice: {
      name: 'lowPrice',
      index: 25,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    volume: {
      name: 'volume',
      index: 26,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    openInterest: {
      name: 'openInterest',
      index: 27,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    time: {
      name: 'time',
      index: 28,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    timeActual: {
      name: 'timeActual',
      index: 29,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint48';
        },
      },
    },
    timeDisplay: {
      name: 'timeDisplay',
      index: 30,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    timeDateDisplay: {
      name: 'timeDateDisplay',
      index: 31,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    previousPrice: {
      name: 'previousPrice',
      index: 32,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousPreviousPrice: {
      name: 'previousPreviousPrice',
      index: 33,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousSettlementPrice: {
      name: 'previousSettlementPrice',
      index: 34,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousOpenPrice: {
      name: 'previousOpenPrice',
      index: 35,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousHighPrice: {
      name: 'previousHighPrice',
      index: 36,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousLowPrice: {
      name: 'previousLowPrice',
      index: 37,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    previousTime: {
      name: 'previousTime',
      index: 38,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    previousTimeDateDisplay: {
      name: 'previousTimeDateDisplay',
      index: 39,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    online: {
      name: 'online',
      index: 40,
      type: {
        convert: function (t: any) {
          return t ? 'T' : 'F';
        },
        unconvert: function (t: string) {
          return 'T' === t;
        },
        getName: function () {
          return 'boolean';
        },
      },
    },
  },
  sequence: [
    {
      name: 'symbol',
      index: 0,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'sequence',
      index: 1,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int32';
        },
      },
    },
    {
      name: 'flag',
      index: 2,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'mode',
      index: 3,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'day',
      index: 4,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'dayNum',
      index: 5,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint8';
        },
      },
    },
    {
      name: 'session',
      index: 6,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'sessionT',
      index: 7,
      type: {
        convert: function (t: any) {
          return t ? 'T' : 'F';
        },
        unconvert: function (t: string) {
          return 'T' === t;
        },
        getName: function () {
          return 'boolean';
        },
      },
    },
    {
      name: 'sessionDateDisplay',
      index: 8,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'bidPrice',
      index: 9,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'bidSize',
      index: 10,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'askPrice',
      index: 11,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'askSize',
      index: 12,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'lastPrice',
      index: 13,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'lastPriceT',
      index: 14,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'tradePrice',
      index: 15,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'tradeSize',
      index: 16,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'tradeTime',
      index: 17,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    {
      name: 'tradeTimeActual',
      index: 18,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint48';
        },
      },
    },
    {
      name: 'tradeTimeDisplay',
      index: 19,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'tradeDateDisplay',
      index: 20,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'numberOfTrades',
      index: 21,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'settlementPrice',
      index: 22,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'openPrice',
      index: 23,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'highPrice',
      index: 24,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'lowPrice',
      index: 25,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'volume',
      index: 26,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'openInterest',
      index: 27,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint32';
        },
      },
    },
    {
      name: 'time',
      index: 28,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    {
      name: 'timeActual',
      index: 29,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'uint48';
        },
      },
    },
    {
      name: 'timeDisplay',
      index: 30,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'timeDateDisplay',
      index: 31,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'previousPrice',
      index: 32,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousPreviousPrice',
      index: 33,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousSettlementPrice',
      index: 34,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousOpenPrice',
      index: 35,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousHighPrice',
      index: 36,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousLowPrice',
      index: 37,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'double';
        },
      },
    },
    {
      name: 'previousTime',
      index: 38,
      type: {
        convert: function (t: { getTime: () => any }) {
          return timestampType.convert(t.getTime());
        },
        unconvert: function (t: any) {
          return new Date(timestampType.unconvert(t));
        },
        getName: function () {
          return 'date';
        },
      },
    },
    {
      name: 'previousTimeDateDisplay',
      index: 39,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'online',
      index: 40,
      type: {
        convert: function (t: any) {
          return t ? 'T' : 'F';
        },
        unconvert: function (t: string) {
          return 'T' === t;
        },
        getName: function () {
          return 'boolean';
        },
      },
    },
  ],
};

export const metadataSchema = {
  map: {
    symbol: {
      name: 'symbol',
      index: 0,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    sequence: {
      name: 'sequence',
      index: 1,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int32';
        },
      },
    },
    name: {
      name: 'name',
      index: 2,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    exchange: {
      name: 'exchange',
      index: 3,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    unitCode: {
      name: 'unitCode',
      index: 4,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    pointValue: {
      name: 'pointValue',
      index: 5,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'float';
        },
      },
    },
    tickIncrement: {
      name: 'tickIncrement',
      index: 6,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int8';
        },
      },
    },
    root: {
      name: 'root',
      index: 7,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    month: {
      name: 'month',
      index: 8,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    year: {
      name: 'year',
      index: 9,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int8';
        },
      },
    },
  },
  sequence: [
    {
      name: 'symbol',
      index: 0,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'sequence',
      index: 1,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int32';
        },
      },
    },
    {
      name: 'name',
      index: 2,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'exchange',
      index: 3,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'unitCode',
      index: 4,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'pointValue',
      index: 5,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseFloat(t);
        },
        getName: function () {
          return 'float';
        },
      },
    },
    {
      name: 'tickIncrement',
      index: 6,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int8';
        },
      },
    },
    {
      name: 'root',
      index: 7,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'month',
      index: 8,
      type: {
        convert: function (t: any) {
          return t;
        },
        unconvert: function (t: any) {
          return t;
        },
        getName: function () {
          return 'string';
        },
      },
    },
    {
      name: 'year',
      index: 9,
      type: {
        convert: function (t: { toString: () => any }) {
          return t.toString();
        },
        unconvert: function (t: string) {
          return Number.parseInt(t);
        },
        getName: function () {
          return 'int8';
        },
      },
    },
  ],
};
