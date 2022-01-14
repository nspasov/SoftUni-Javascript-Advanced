// 1. Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.

const res = require("express/lib/response");

function calculateMoney(fruit,weight,price){

    let money = weight/1000 * price;
   
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


// checkSameDigits(2222222);
// checkSameDigits(1234);


// -----------------------------------------------------

// 4. Previous Day
// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

function getPreviousDate(year, month, day){

    let dateInput = `${year}-${month}-${day}`;
    let targetDate = new Date(dateInput);
    targetDate.setDate(targetDate.getDate()); // today
    targetDate.setDate(targetDate.getDate()-1); // yesterday
   
    console.log(`${targetDate.getFullYear()}-${targetDate.getMonth()+1}-${targetDate.getDate()}`);

}

//getPreviousDate(2016,2,4);

// -----------------------------------------------------------

// 5. Time to Walk
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
//     • The first is the number of steps the student takes from their home to the university
//     • Тhe second number is the length of the student's footprint in meters
//     • Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and 
// print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function calculateWalkingTime(stepCount, stepLength, speedKmh){
    let distanceMetres = stepCount * stepLength;
    let speedMeters = speedKmh * 1000;
    let breaksCount = Math.floor(distanceMetres / 500);
    let output;
    

    let timeSeconds = Math.ceil((distanceMetres / speedMeters) * 3600);
    timeSeconds += breaksCount * 60;
    
    output = new Date(timeSeconds * 1000).toISOString().substr(11, 8);
    console.log(output);

    
}

// calculateWalkingTime(4000, 0.60, 5);
// calculateWalkingTime(2564, 0.70, 5.5);

// -------------------------------------------------------------------------

// 6. Road Radar
// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
//     • On the motorway, the limit is 130 km/h
//     • On the interstate, the limit is 90 km/h
//     • In the city, the limit is 50 km/h 
//     • Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

function checkSpeedLimit(speed, area){
    
    let limit;
    let output;
    let overspeed;
    let status;

    switch(area){
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        default:
            output = 'Invalid area type';
            return output;
    }

    overspeed = speed - limit;

    if(overspeed <= 0){
        output = `Driving ${speed} in a ${limit} zone`;
        return output;
    }

    if(overspeed <= 20){
        status = 'speeding';
        output = `The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`;
        return output;
    }

    if(overspeed <= 40){
        status = 'excessive speeding';
        output = `The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`;
        return output;
    }

    status = 'reckless driving';
    output = `The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`;
    return output;   
    
}

// console.log(checkSpeedLimit(40, 'city'));
// console.log(checkSpeedLimit(21, 'residential'));
// console.log(checkSpeedLimit(120, 'interstate'));
// console.log(checkSpeedLimit(200, 'motorway'));

// ------------------------------------------------------------------------

// 7. Cooking by Numbers
// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
//     • chop - divide the number by two
//     • dice - square root of a number
//     • spice - add 1 to the number
//     • bake - multiply number by 3
//     • fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.


function chopChop(numberString, op1, op2, op3, op4, op5){

    let number = Number(numberString);
    let operations = [];
    operations.push(op1,op2,op3,op4,op5);

    for(const operation of operations){
        switch(operation){
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }

}

//chopChop('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//chopChop('9', 'dice', 'spice', 'chop', 'bake', 'fillet');