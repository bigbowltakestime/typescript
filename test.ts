import {data} from "./module-file";
import {jin} from "./jin";

console.log(jin('Hello World'))

console.log(data)

const a = 1;
const b = 1;
const c = 1;

function moreFunction() : void{
  console.log('hi');
}

function d(a: number,b: number,c: number) : number{
  return a+b+c
}
console.log(d(1,2,3));
