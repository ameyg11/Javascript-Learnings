// function upperCase(str){
//     return str.toUpperCase();
// }

// const result=upperCase('javascript');

// console.log(result)

// function calculateArea(width, height){
//     const area = width*height;
//     return area;
// }

// console.log(calculateArea(5,6));

// const area1=calculateArea(30,40);

// console.log(area1);

// function download(){
//     //download logic
//     const fileName ='xyz.pdf';
// }

// download()
// console.log(fileName)

// function formatText(text,formatCb){
//     return typeof formatCb === 'function' ? formatCb(text): text.toUpperCase();
// }
// const result1 = formatText('hello',function(text){
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });

// console.log(result);             //Hello

// function formatText(text,formatCb){
//     return typeof formatCb === 'function' ? formatCb(text): text.toUpperCase();
// }
// const result2 = formatText('hello',function(text){
//     return text.charAt(0).toLowerCase() + text.slice(1).toUpperCase();
// });

// console.log(result);        //hELLO

// const calcAge = birthYear =>{
//      2024-birthYear;
//     }
// const age=calcAge(2004);
// console.log(age);

//function calling itself

// const cutPieces=function(fruit){
//     return fruit*4;
// }

// const fruitProcessor = function(apples,oranges){
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// function calc(a, b=0) {
//     return (2 * (a + b));
// }

// console.log(calc(2,5))

// function collectThings(x,...y){
//     console. log (x) ;
//     console. log (y) ;
// }

// collectThings(1,2,3,4,5,6,7,8,8,9,10);

const friends = ["Prathamesh", "Pratik", "Purvesh"];
console.log(friends);

friends.push("Amey");
console.log(friends);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.age);

const keyName = "Name";

console.log(jonas["first" + keyName]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

console.log(jonas[interestedIn]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend name is ${jonas.friends[0]}.`);