/*
proplem 1
*/

let monthNumber = parseInt(prompt("Enter the month number (1-12):"));


if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    console.log("Invalid input. Please enter a number between 1 and 12.");
} else {
    
    let daysInMonth;
    switch (monthNumber) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = 28; //the only month 28 days is month 2
            break;
    }
    console.log(`Month ${monthNumber} has ${daysInMonth} days.`); // print result
}


/*
proplem 2
*/

let dayNumber = parseInt(prompt("Enter the day number (1-7):"));


if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid input. Please enter a number between 1 and 7.");
} else {
   
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
    }
    console.log(`The day corresponding to ${dayNumber} is ${dayName}.`);
}







/*
proplem3
*/


let angle1 = parseInt(prompt("Enter the first angle:"));
let angle2 = parseInt(prompt("Enter the second angle:"));
let angle3 = parseInt(prompt("Enter the third angle:"));


if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid.");
}


/*
proplem 4
*/

let number = parseInt(prompt("Enter a number:"));
if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log(`${number} is zero.`);
}







/*
proplem 5
*/