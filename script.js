// true and false value in js

var result = 10<5
console.log("Result is =>", result)

var result1 = 6>5
console.log("Result1", result1)

var result2 = 10==5
console.log("Result2 is =>", result2)

var result3 = 6!=5
console.log("Result3", result3)

// AND operation and in js is written as (&&)
// T T = T
// T F = F
// F T = F
// F F = F

var x = 5==5 && 6>5
console.log("Result of x ", x)

var z = 5!=5 && 6>5
console.log("Result of z ", z)

var y = 5==5 && 6>7
console.log("Result of y ", y)

var a = 5==7 && 6>9
console.log("Result of a ", a)



// OR operation and in js is written as (||)
// T T = T
// T F = T
// F T = T
// F F = F

var x1 = 5==5 || 6>5
console.log("Result of x1 ", x1)

var z1 = 5!=5 || 6>5
console.log("Result of z1 ", z1)

var y1 = 5==5 || 6>7
console.log("Result of y1 ", y1)

var a1 = 5==7 || 6>9
console.log("Result of a1 ", a1)


// convert data string into number data (=+) is used for change data

// var numberEnter =+ prompt("Enter first number")

// var x2 = numberEnter==4 && 6>5
// console.log("Result of x2 ", x2)



// var numberEnter2 =+ prompt("Enter second number")

// var x3 = numberEnter+numberEnter2==6 || 6>7 && x2
// console.log("Result of x3 ", x3)


// If program
// write a program that prompt the user to enter a number and check if it positive number,
// display the result inan alert box.

var p =+ prompt("Enter a number");

if(p>=0){
    console.log("You enter a postive number");
}


if(p<0){
    console.log("You enter a negative number");
}

// write a program that prompts the user to entertwo numbers and check if
// they are equal. Display the result in an alert box.

var e =+ prompt("Enter fisrt number")
var f =+ prompt("Enter a second number")

if(e==f){
    alert("Numbers are equals");
}

if(e!=f){
    alert("Numbers are not equals")
}

