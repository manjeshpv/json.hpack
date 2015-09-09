# json.hpack

##Nodejs Implementation of [WebReflection/json.hpack](https://github.com/WebReflection/json.hpack) [Source](https://raw.githubusercontent.com/WebReflection/json.hpack/master/src/javascript/json.hpack.js) 

[Explanation](http://web-resource-optimization.blogspot.in/2011/06/json-compression-algorithms.html)


## Installation

```sh
$ npm install json-hpack
```

or specify in package.json as dependency

## Usage

with express

```js
// Add Prototype to JSON, So no need to use variable
require('json-hpack')

// or
json_hpack = require('json-hpack')


var json = [{
    name : "Andrea",
    age : 31,
    gender : "Male",
    skilled : true
}, {
    name : "Eva",
    age : 27,
    gender : "Female",
    skilled : true
}, {
    name : "Daniele",
    age : 26,
    gender : "Male",
    skilled : false
}]

// Packing
packed_json = JSON.hpack(json);

console.log("Packed JSON",packed_json);
// Packed JSON [ [ 'name', 'age', 'gender', 'skilled' ],
// [ 'Andrea', 31, 'Male', true ],
// [ 'Eva', 27, 'Female', true ],
// [ 'Daniele', 26, 'Male', false ] ]

unpacked_json = JSON.hunpack(packed_json);

console.log("Unpacked JSON:",unpacked_json)
// Unpacked JSON [ { name: 'Andrea', age: 31, gender: 'Male', skilled: true },
//                 { name: 'Eva', age: 27, gender: 'Female', skilled: true },
//                 { name: 'Daniele', age: 26, gender: 'Male', skilled: false } ]

```

json.hpack is now JSONH, check new repository
=============================================

json.hpack has been deprecated in favor or better practices to obtain good average compression over best performances for both client and server.
Please consider to switch to [new JSONH project](https://github.com/WebReflection/JSONH) since this one is not actively maintained anymore, thanks.