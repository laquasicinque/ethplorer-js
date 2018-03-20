#ethplorer-js

A promise based Nodejs library to interface with the [Ethplorer](https://ethplorer.io/) API

##Usage
Import the Libary:
```js
import Ethplorer from 'ethplorer-js';
// or
let Ethplorer = require('ethplorer').default
```

To initialize:
```js
let api = new Ethplorer('<Your Key Here>'); 
// or
let api = new Ethplorer(); // will use freekey instead
```
Then use any of the methods, described [here](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API#methods). e.g
```js
api.getTokenInfo(address)
    .then(data => {
    /*
     data is the object returned by the api
    */   
})
```
Any optional parameters can be passed as an optional argument. e.g

```js
api.getTokenPriceHistoryGrouped(address,{ period: 30 })
    .then(data => {

})

// getTop doesn't have an initial argument so the first argument is the optional parameters
api.getTop({limit: 10})
    .then(data => {

})
```

If you're using Typescript all requests and responses are fully typed according to the [Ethplorer API](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API)