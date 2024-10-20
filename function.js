
// problem -1:Write a function called addNumbers that takes two numbers as parameters and returns their sum.
function addNumbers(num1 , num2){
    let total = num1 + num2;
    return total
}
addNumbers(4, 4)
let result = addNumbers(4, 4);
console.log(result);

// or, without return
// function addNumbers(num1, num2){
//     console.log(num1+num2);
// }
// addNumbers(4, 4);

// problem -2: Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.
let sum = 0 ;
function sumUpToN(n){
    for(let i = 1; i < n; i++ ){
     sum +=i;
    }
    return sum;
}
 console.log(sumUpToN(4));
  

// // problem -3:Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

let array =[2, 2, 2, 2,];
let sum = 0;
function sumArry(n){
  for(let i= 0; i<array.length; i++){
        sum +=array[i];

  }
  return sum;
}
const result = sumArry(array)
console.log(result);

// // problem -4:Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.
let numbers = [12, 3, 4, 4, 5];

function countEvenNumber(n){
  for(i = 0; i < n.length; i++){
    if(n.i % 2 === 0){
      i++   }
  }
  return i;
}
let result = countEvenNumber(numbers);
console.log(result);

// // problem -6:Write a function called stringLength that takes a string as a parameter and returns the length of the string.

let nameOFString = "baba";
function stringLength(string){
  return string.length;
}
let numOfLenght = stringLength(nameOFString);

console.log(numOfLenght);
