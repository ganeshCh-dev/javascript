// global scope
const name = "ganesh"

// function scope
function myFrndName() {
    const frndName = "ramsai"
    console.log("frindName", frndName);
}

myFrndName()

// block scope

{
    const frndName = "mahesh"
    console.log("another block frnd", frndName);
}

{
    const frndName = "vamsi"
    console.log("blockFriendName", frndName);
}


console.log("name", name)

// lexical scope 

function outer() {
    const parentVar = "I am Parent";

    function inner() {
        console.log("child", parentVar)
    }

    inner();
}

outer();

// scopeChain

const first = "firstVar"

function scopeChain() {
    let fnVar = "fnVar"

    if (true) {
        let fnVar = "block Var";
        console.log("first", first);
        console.log("fnVar", fnVar);
    }

    console.log("fnVar======>", fnVar);

}

console.log("fnVar", fnVar); // fnVar is not defined


scopeChain();