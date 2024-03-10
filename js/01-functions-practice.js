//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    console.log(`Half of ${num} is ${num/2}`)
}

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    console.log(`The square of ${num} is ${num**2}`)
}

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

function percentOf(firstNum,secondNum) {
    console.log(`${firstNum} is ${(firstNum/secondNum)*100}% of ${secondNum}.`)
}

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus(firstNum, secondNum) {
    console.log(`${secondNum%firstNum} is the modulus of ${firstNum} and ${secondNum}.`)
}