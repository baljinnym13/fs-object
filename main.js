function great(name) {
  console.log("hello" + name + ":)");
}
let input = prompt("enter a name");

great(input);

// parametrgvi function
let a = 20;
let b = 10;

function hewle() {
  console.log("2 toonii niilber:", a + b);
}
console.log("functions");
hewle();
// parametrtai function
function hewle2(too1, too2) {
  console.log("2 toonii niilber:", too1 + too2);
}
hewle2(11, 22);
hewle2(145, 2234);
// utga butsaadag function
function nemeh(x, y) {
  return x + y;
}
nemeh(15, 15);
let sum = nemeh(15, 15);
let h1 = hewle2(11, 22);
console.log("hewel", h1);
console.log("nemeh", sum);
// nemdeg function (declaration) - zarldag - haana ch duudaj bolno-
let x1 = 21;
let x2 = 7;

function nem(x1, x2) {
  return x1 + x2;
  console.log("nemeh:", nemeh1);
}
function hasah(x1, x2) {
  return x1 - x2;
  console.log("nemeh:", hasah1);
}
function vrjix(x1, x2) {
  return x1 * x2;
  console.log("nemeh:", vrjih1);
}
function huwaah(x1, x2) {
  return x1 / x2;
  console.log("nemeh:", huwaah1);
}
let nemeh1 = nem(x1, x2);
let hasah1 = hasah(x1, x2);
let vrjih1 = vrjix(x1, x2);
let huwaah1 = huwaah(x1, x2);
nem(x1, x2);
console.log("nemeh:", nemeh1);
hasah(x1, x2);
console.log("hasah:", hasah1);
vrjix(x1, x2);
console.log("vrjih:", vrjih1);
huwaah(x1, x2);
console.log("huwaah:", huwaah1);
// nergvi function anao (expreession)- zaawal door n duudaj ogno.
let nergv = function (x, y) {
  return x / y;
};
let asd = nergv(x, y);
nergv();
console.log(asd);
// suman function (es6 => arrow function)
let sguare = (x) => {
  return x * x;
};
