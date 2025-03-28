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
