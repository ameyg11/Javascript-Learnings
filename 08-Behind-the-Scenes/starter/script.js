'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// //variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArr = (a, b) => a + b;

// console.log(undefined);
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// console.log(numProducts);

// function deleteShoppingCart() {
//   console.log('ALl Products Deleted !');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this.me);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.jonas);
//     console.log(2027 - this.year);
//   },
// };
// jonas.calcAge();

// const matida = {
//   year: 2018,
// };
// matida.calcAge = jonas.calcAge;

// // console.log(matida.calcAge = jonas.calcAge);

// matida.calcAge();

// const f =jonas.calcAge;
// console.log(this.f);

// var firstName ='Matila';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2027 - this.year);
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
console.log(this.firstName);