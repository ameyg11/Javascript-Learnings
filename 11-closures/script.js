function a(){
  let vr = 5;
  function b(){
    console.log(vr);
  }
  b();
}
a();

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

const secureBooking = function() {
  let passengerCount = 0;

  return function(){
    passengerCount++
    console.log(`${passengerCount} ${passengerCount===1?"passenger":"passengers"} `);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

// const buy = document.querySelector("buy");
// onclick("click","buy")

//<----------------callbacks---------------------->

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

