for (var i = 0; i <= 4; i++) {
  setTimeout(() => {
    // --> hear i is reference to the for block 
    // --> so every time it will refer to the same i
    // --> so it will print 5 5 5 5
    console.log(i);
  }, 1000);
}
// output is 5 5 5 5 5
// The reason for this is that the setTimeout function is executed after the loop has finished executing. 
// By the time the setTimeout function is executed, the value of i is 5. 
// This is because the setTimeout function is executed after the loop has finished executing


// explain

if (1===1) {
    var i = 10
    console.log("3", i);

    setTimeout(() => {
        console.log("setTimeout", i);
    })
}

if (2===2) {
    var i = 20
    setTimeout(() => {
        console.log("222222222", i);
    })
}

if (3===3) {
    setTimeout(() => {
        console.log("33333333333", i);
    })
}

for (var i = 0; i <= 8; i++) {
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
