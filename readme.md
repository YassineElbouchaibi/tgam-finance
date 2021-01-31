# tgam-finance

A tiny Unofficial TGAM Finance API Wrapper for JavaScript, supporting the core abilities of the TGAM Finance website including getting realtime quotes, listing indices, financial data, and more.

## Disclaimer

* **USE AT YOUR OWN RISK**. This is an unofficial TGAM Finance API Wrapper. This is still an alpha and might change at any time.

## Install

```
$ npm install tgam-finance
```

## Usage

For this code :
```js
var { TGAMFinance } = require('tgam-finance');

const main = async () => {
    const symbolsToWatch = [
        "CNQ.TO",
        "PPL.TO",
        "LSPD.TO",
    ]

    const financeApi = new TGAMFinance();

    financeApi.subscribeToSymbols(symbolsToWatch);

    financeApi.addSymbolMetaDataListener((a) => {console.log("SymbolMetaDataListener: ", a)})
    financeApi.addSymbolDataListener((a) => {console.log("SymbolDataListener: ", a)})
    financeApi.addErrorListener((a) => {console.log("ErrorListener: ", a)})
}

main()
```

This is an example output:
```js
SymbolMetaDataListener:  {
  symbol: 'CNQ.TO',
  sequence: 2,
  name: 'CDN Natural Res',
  exchange: 'TSX',
  unitCode: 'A',
  pointValue: 1,
  tickIncrement: 1,
  root: null,
  month: null,
  year: null
}
SymbolDataListener:  {
  symbol: 'CNQ.TO',
  sequence: 8,
  flag: 's',
  mode: 'R',
  day: 'J',
  dayNum: 20,
  session: null,
  sessionT: false,
  sessionDateDisplay: '01/20/21',
  bidPrice: 31.47,
  bidSize: 2,
  askPrice: 31.53,
  askSize: 30,
  lastPrice: 31.49,
  lastPriceT: 31.49,
  tradePrice: null,
  tradeSize: 100,
  tradeTime: 2021-01-20T16:00:00.000Z,
  tradeTimeActual: 1611176400000,
  tradeTimeDisplay: '16:00 ET',
  tradeDateDisplay: '01/20/21',
  numberOfTrades: 11611,
  settlementPrice: 31.49,
  openPrice: 31.73,
  highPrice: 31.8,
  lowPrice: 31.11,
  volume: 3305590,
  openInterest: null,
  time: 2021-01-20T16:00:00.000Z,
  timeActual: 1611176400000,
  timeDisplay: '01/20/21',
  timeDateDisplay: '01/20/21',
  previousPrice: 31.58,
  previousPreviousPrice: 31.58,
  previousSettlementPrice: null,
  previousOpenPrice: null,
  previousHighPrice: null,
  previousLowPrice: null,
  previousTime: 2021-01-20T09:30:00.000Z,
  previousTimeDateDisplay: '01/20/21',
  online: true
}
SymbolMetaDataListener:  {
  symbol: 'PPL.TO',
  sequence: 2,
  name: 'Pembina Pipeline Corp',
  exchange: 'TSX',
  unitCode: 'A',
  pointValue: 1,
  tickIncrement: 1,
  root: null,
  month: null,
  year: null
}
SymbolDataListener:  {
  symbol: 'PPL.TO',
  sequence: 9,
  flag: 's',
  mode: 'R',
  day: 'J',
  dayNum: 20,
  session: null,
  sessionT: false,
  sessionDateDisplay: '01/20/21',
  bidPrice: 36.11,
  bidSize: 5,
  askPrice: 36.12,
  askSize: 1,
  lastPrice: 36.11,
  lastPriceT: 36.11,
  tradePrice: null,
  tradeSize: 408600,
  tradeTime: 2021-01-20T16:15:43.000Z,
  tradeTimeActual: 1611177343000,
  tradeTimeDisplay: '16:15 ET',
  tradeDateDisplay: '01/20/21',
  numberOfTrades: 8438,
  settlementPrice: 36.11,
  openPrice: 36.23,
  highPrice: 36.42,
  lowPrice: 35.98,
  volume: 3677428,
  openInterest: null,
  time: 2021-01-20T16:15:43.000Z,
  timeActual: 1611177343000,
  timeDisplay: '01/20/21',
  timeDateDisplay: '01/20/21',
  previousPrice: 36.04,
  previousPreviousPrice: 36.04,
  previousSettlementPrice: null,
  previousOpenPrice: null,
  previousHighPrice: null,
  previousLowPrice: null,
  previousTime: 2021-01-20T09:30:00.000Z,
  previousTimeDateDisplay: '01/20/21',
  online: true
}
SymbolMetaDataListener:  {
  symbol: 'LSPD.TO',
  sequence: 2,
  name: 'Lightspeed Pos Inc',
  exchange: 'TSX',
  unitCode: 'A',
  pointValue: 1,
  tickIncrement: 1,
  root: null,
  month: null,
  year: null
}
SymbolDataListener:  {
  symbol: 'LSPD.TO',
  sequence: 6,
  flag: 's',
  mode: 'R',
  day: 'J',
  dayNum: 20,
  session: null,
  sessionT: false,
  sessionDateDisplay: '01/20/21',
  bidPrice: 91,
  bidSize: 37,
  askPrice: 91.38,
  askSize: 3,
  lastPrice: 91.27,
  lastPriceT: 91.27,
  tradePrice: null,
  tradeSize: 300,
  tradeTime: 2021-01-20T16:00:00.000Z,
  tradeTimeActual: 1611176400000,
  tradeTimeDisplay: '16:00 ET',
  tradeDateDisplay: '01/20/21',
  numberOfTrades: 2460,
  settlementPrice: 91.27,
  openPrice: 92.3,
  highPrice: 93.79,
  lowPrice: 90.62,
  volume: 324538,
  openInterest: null,
  time: 2021-01-20T16:00:00.000Z,
  timeActual: 1611176400000,
  timeDisplay: '01/20/21',
  timeDateDisplay: '01/20/21',
  previousPrice: 92.35,
  previousPreviousPrice: 92.35,
  previousSettlementPrice: null,
  previousOpenPrice: null,
  previousHighPrice: null,
  previousLowPrice: null,
  previousTime: 2021-01-20T09:30:00.000Z,
  previousTimeDateDisplay: '01/20/21',
  online: true
}
```

## API

Coming soon...

## Note
Please contact me if you have any issues with this project and want it to be taken down.
