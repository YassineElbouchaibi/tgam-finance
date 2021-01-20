# tgam-finance

Coming soon...

## Install

```
$ npm install tgam-finance
```

## Usage

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

## API

Coming soon...

## Note
Please contact me if you have any issues with this project and want it to be taken down.
