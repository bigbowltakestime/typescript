"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_file_1 = require("./module-file");
var jin_1 = require("./jin");
console.log((0, jin_1.jin)('Hello World'));
console.log(module_file_1.data);
var a = 1;
var b = 1;
var c = 1;
function moreFunction() {
    console.log('hi');
}
function d(a, b, c) {
    return a + b + c;
}
console.log(d(1, 2, 3));
