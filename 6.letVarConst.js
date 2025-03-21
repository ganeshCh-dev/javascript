// Global Scoped
var globalVar = "I am a Global Variable";

if (true) {
  var assigesToGlobal = "I am a block Variable";
}

// Function Scoped
function varKnow() {
  var assigesToFunc = "Func";
  console.log("assigesToFunc", assigesToFunc);
}

varKnow();

console.log(window.globalVar);

console.log(window.assigesToGlobal);

console.log(window.assigesToFunc); // return undefined because it is function scope variable

// a = Array Property Lookup

var a = new Array(10).fill(0);
console.time('Execution time')
for (var i = 0; i < a.length; i++) {
    console.log(i)
}
console.timeEnd('Execution time')

// Optimized loop

// Variable Access
var len = a.length;
console.time('Execution time')
for (var i = 0; i < len; i++) {
    console.log(i)
}
console.timeEnd('Execution time')

// var in setTimeout

for (var i = 0; i <= 4; i++) {
  let index = i;
  setTimeout(() => {
    let i = index;
    console.log(i);
  }, 1000);
}

// or

for (let i = 0; i <= 4; i++) {
  ((index) => {
    const i = index;
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
