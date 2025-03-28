'use strict';

// const bookings = [];

// const createBooking = function(flightName, numPassenger = 1, price = 2999, totalPrice = 1999 * numPassenger){
//     const booking = {
//         flightName,
//         numPassenger,
//         price,
//         totalPrice
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('AirIndia', 4)
// console.log(bookings); 
// createBooking('AG', undefined, 199)


// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// function task1() {

//   setTimeout(() => {
//     console.log("Task 1 Complete");
//   },2000)                                  //task completed after 2000 miliseconds
// }

// function task2() {

//   setTimeout(() => {
//     console.log("Task 2 Complete");
//   }, 1000);
// }

// function task3() {
//   setTimeout (function() {
//     console.log("Task 3 Complete");
//   },1200)
// }

// function task4() {
//   setTimeout(() => {
//     console.log("Task 4 Complete");
//   }, 2000);
// }

// async function runTask(){
//   await task1();
//   await task2();
//   await task3();
//   await task4();
// }

// runTask();
// console.log("All tasks are completed");

// const j = 10;
// var n = 2000;

// for (let i= 0; i<j; i++){
//   setTimeout(() => {
//     console.log(i);
//   },n)
//   n-= 2000;
// }
// console.log('end');

// const high = function(val) {
//   let values = 34;

//   const vl = (values)  => console.log(values);

//   const vls = function(){
//     console.log(values);
//     console.log(val);
//     console.log(this.val);
//   }
// }

// high.vls();

function count() {
  let counter = 5;
  
  function a(){
    console.log(counter);
  };
  a();
}
count();