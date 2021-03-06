# ethplorer-js

A promise based Nodejs library to interface with the [Ethplorer](https://ethplorer.io/) API

## Usage
Import the Libary:
```js
import { Ethplorer } from 'ethplorer-js';
// or
let Ethplorer = require('ethplorer-js').Ethplorer
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
     data is the object returned by the api,
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
## Errors
The response object from the functions can be the [error object from the Ethplorer API](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API#error-response), you can either handle it manually like so:
```js
api.getTokenInfo(address)
.then(data => {
    if("error" in data){
        // handle the error object
    }
    else {
        // ethplorer data returned from response
    }
})
```
Alternatively
```js
function handleEthplorerError(response){
    if("error" in data){
        throw data;
    }
    return data;
}

api.getTokenInfo(address)
.then(handleEthplorerError)
.then(data => {

})
.catch(err => {
    // the error here is either the axios error or the error object from ethplorer
})
```


## Typescript

If you're using Typescript all requests and responses are fully typed according to the [Ethplorer API](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API). 

**Note:** If you have any trouble with the typescript autocomplete from the response, you may need to check if the result is an error or not for typehinting to come back, as shown above.
