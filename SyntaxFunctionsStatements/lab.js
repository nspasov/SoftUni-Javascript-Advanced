// 1. Echo Function
// Write a JS function that takes one string parameter and prints on two lines
//  the length of the parameter and then the unchanged parameter itself.

echo = (a) => console.log(`${a.length} \n${a}`);

//echo('Hello, JavaScript!');

// ----------------------------------------------------------------------------------

// 2. String Length
// Write a JS function that takes three string arguments as an input. 
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

calculateLength = (a,b,c) => {
    let totalLength = a.length + b.length + c.length;

    console.log(totalLength);
    console.log(Math.floor(totalLength/3));
}

// calculateLength('chocolate', 'ice cream', 'cake');
// calculateLength('pasta', '5', '22.3');


// -----------------------------------------------------------------------------------

// 3. Largest Number
// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.


largestNum = (a,b,c) => console.log(`Largest number is ${Math.max(a,b,c)}`);

// largestNum(5, -3, 16);
// largestNum(-3, -5, -22.5);

// -------------------------------------------------------------

/* 4. Circle Area
Write a function that takes a single argument as an input. Check the type of input argument.
If it is a number, assume it is the radius of a circle and calculate the circle area.
Print the area rounded to two decimal places.
If the argument type is NOT a number, print the following text on the console: 
`We can not calculate the circle area, because we receive a {type of argument}.`
The input comes as a single argument passed to your function.
The output should be printed on the console. */

calculateArea = (r) => {

    if(typeof r !== 'number')
        return `We cannot calculate the circle area, because we receive a ${typeof r}`
    
    area = Math.PI * r**2;

    return area.toFixed(2);

}

//console.log(calculateArea(5));

// ---------------------------------------------------------------------------------------------

/* 5. Math Operations
Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.

Print on the console the result of the mathematical operation between both numbers and the operator you receive
as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console. */

magic = (a,b,c) => {

    let result;

    switch(c){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a * b;
            break;
         case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
           break;
        case '**':
            result = a ** b;
            break;
        default:
            result = 'Invalid operation';

    }

    return result;

}

// console.log(magic(5, 6, '+'));
// console.log(magic(3, 5.5, '*'));


// -----------------------------------------------------------

/* 6. Sum of Numbers N…M
Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
The input comes as two string elements that need to be parsed as numbers.
The output should return the sum. */


sumRange = (a,b) => {
    let numOne = Number(a);
    let numTwo = Number(b);
    let sum = 0;

    for(let i = numOne; i <= numTwo; i++){
        sum += i;
    }

    return sum;
}

// console.log(sumRange('1', '5'));
// console.log(sumRange('-8', '20'));

// ------------------------------------------------------

/* 7. Day of Week
Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single-string argument.
The output should be returned as a result. */

getDay = (a) => {
    switch(a){
        case 'Monday':
            return 1;
            break;
        case 'Tuesday':
            return 2;
            break;
        case 'Wednesday':
            return 3;
            break;
        case 'Thursday':
            return 4;
            break;
        case 'Friday':
            return 5;
            break;
        case 'Saturday':
            return 6;
            break;
        case 'Sunday':
            return 7;
            break;
        default:
            return 'error';       
    }
}

// console.log(getDay('Monday'));
// console.log(getDay('Friday'));
// console.log(getDay('Invalid'));

// ---------------------------------------------------------

/* 8. Days in a month
Write a JavaScript function to get the number of days in a month.
The input comes as two numeric parameters. The first element is the month, the second is the year.
The output must return the number of days in a month for a given year. */

getDays = (month,year) => new Date(year, month, 0).getDate();
    

// console.log(getDays(2,2020));

// ---------------------------------------------------------------------

// 9. Square of Stars
// Write a function that prints a rectangle made of stars with variable size, depending on an input parameter.
// If there is no parameter specified, the rectangle should always be of size 5.


print = (a) => {

    if(!a)
        a = 5;

    for(let i = 0; i < a; i++){
        let print = '';
        for(let j = 0; j < a; j++){
            print = print.concat(' * ');
        }
        console.log(print);
    }

}

// print(5);

// -------------------------------------

// 10. Aggregate Elements
// Write a program that performs different operations on an array of elements. Implement the following operations:
//     • Sum(ai) - calculates the sum of all elements from the input array
//     • Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
//     • Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

aggregate = (arr) => {
    let sum = 0;
    let inversedSum = 0;
    let stringifiedSum = '';

    for(let element of arr){
        sum += element;
        inversedSum += 1 / element;
        stringifiedSum = stringifiedSum.concat(element);
    }

    console.log(sum);
    console.log(inversedSum);
    console.log(stringifiedSum);
}

aggregate([2,4,8,16]);


        
