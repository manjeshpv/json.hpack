/**
 * Created by ManjeshV on 9/9/2015.
 */
var json_hpack = require('./');

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

packed_json = JSON.hpack(json);

console.log("packed JSON",packed_json);

unpacked_json = JSON.hunpack(packed_json);

console.log("JSON:",unpacked_json)

console.log("Algorithm Input and Result Matching");
if(JSON.stringify(unpacked_json) == JSON.stringify(unpacked_json)){
    console.info("Success");
} else {
    console.error("Failure");
}

//http://web-resource-optimization.blogspot.in/2011/06/json-compression-algorithms.html
