// 1. Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.

function calculateMoney(fruit,weight,price){
    let money = 0;
    money = weight/1000 * price;

    return `I need $${money.toFixed(2)} to buy ${weight/1000} kilograms ${fruit}.`
}

//console.log(calculateMoney('apple', 1563, 2.35));

// ----------------------------------------------------------------------------

// 2. Greatest Common Divisor - GCD
// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

getGreatestCommonDivider = (a,b) => {

    let greatestCommonDivider = 1;
    let largerNum = a;
    let smallerNum = b;

    if(a === b)
        return a;
    
    if(a < b){
        largerNum = b;
        smallerNum = a;
    }

    for(let i = 2; i <= smallerNum; i++){
        if(smallerNum % i === 0 && largerNum % i === 0)
            greatestCommonDivider = i;
    }

    return greatestCommonDivider;
}

// console.log(getGreatestCommonDivider(15,5));
// console.log(getGreatestCommonDivider(2154,458));

// -----------------------------------------------------------------------------

// 3. Same Numbers
// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

checkSameDigits = (input) => {
    let sum = 0;
    let sameDigits = true;
    let iterations = input.toString().length; // get iterations only once - no need to convert to string and get length multiple times
    input = input.toString(); 

    for(let i = 0; i < iterations; i++){
        sum += Number(input[i]);

        if(sameDigits && input[i] !== input[i+1]){  // AND operator will cut the second check if sameDigits is already false
            if(i !== iterations-1){
                sameDigits = false;
            }  
        }
    }

    console.log(sameDigits);
    console.log(sum);
}

checkSameDigits(2222222);
checkSameDigits(1234);


