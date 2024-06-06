/*
Task 1: BMI Calculator
*/
let weight = parseFloat(prompt("Enter your weight in kilograms:"));
let height = parseFloat(prompt("Enter your height in meters:"));
function calculateBMI(weight, height) {
    // Calculate BMI
    //BMI = kg/m2 
    return weight / (height * height);

}
function determineBMICategory(bmi) {
    // Determine the BMI category
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
let bmi = calculateBMI(weight, height);
let category = determineBMICategory(bmi);
console.log("Your BMI is: " + bmi.toFixed(2));
console.log("You are in the category: " + category);
alert("Your BMI is: " + bmi.toFixed(2) + "\nYou are in the category: " + category);
/*
Task 2: Leap Year Checker
*/
let Year = parseFloat(prompt("Enter your Year"));

function CheaktheYear(Year){
 if (Year % 4==0 &&Year %100 != 0  || Year %400==0 ) {

return true  ; 
}
else
{return false ; }

}

if (isNaN(Year)) {
    console.log("Please enter a valid number.");
    alert("Please enter a valid number.");
} else {
    
    if (isLeapYear(Year)) {
        console.log(Year + " is a leap year.");
        alert(Year + " is a leap year.");
    } else {
        console.log(Year + " is not a leap year.");
        alert(Year + " is not a leap year.");
    }
}
/*
Task 3: Grade Classification with Bonus
*/
let score = parseFloat(prompt("Enter your exam score:"));
function determineGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
if (isNaN(score)||score<0 ||score>100){
    
console.log("plase enter A right Score :( ")
alert("Please enter a valid score between 0 and 100.");
}
else {
    if (score >= 50) {
        
        let bonusCompleted = confirm("Did you complete any bonus assignments?");
        if (bonusCompleted) {
            score += 5;
            if (score > 100) {// if the  gread greater than 100 convert to 100
                score = 100; 
            }
        }
    }


}

let grade = determineGrade(score);

    console.log("Your final score is: " + score);
    console.log("Your grade is: " + grade);
    alert("Your final score is: " + score + "\nYour grade is: " + grade);
/*
Task 4: Number Comparison with Nested Conditions
*/
let Number1 = parseFloat(prompt("Enter your  number1 :"));
let Number2 = parseFloat(prompt("Enter your  number2 :"));
let Number3 = parseFloat(prompt("Enter your  number3 :"));
if (isNaN(Number1) || isNaN(Number2) || isNaN(Number3)) {
    console.log("Please enter valid numbers.");
    alert("Please enter valid numbers.");
} else {
    let largest;


    if (Number1 >= Number2) {
        if (Number1 >= Number3) {
            largest = Number1;
        } else {
            largest = Number3;
        }
    } else {
        if (Number2 >= Number3) {
            largest = Number2;
        } else {
            largest = Number3 ; 
        }
    }

    
    let result;
    if (largest > 0) {
        result = "positive";
    } else if (largest < 0) {
        result = "negative";
    } else {
        result = "zero";
    }

    console.log("The largest number is: " + largest + " and it is " + result + ".");
    alert("The largest number is: " + largest + " and it is " + result + ".");
}

/*
Task 5: ATM Withdrawal Simulation
*/

let balance = parseFloat(prompt("Enter your current balance:"));


let withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));


if (isNaN(balance) || isNaN(withdrawalAmount)) {
    console.log("Please enter valid numbers.");
    alert("Please enter valid numbers.");
} else {
  
    if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
        
        balance -= withdrawalAmount;
 
        console.log("Withdrawal successful. Your new balance is: $" + balance.toFixed(2));
        alert("Withdrawal successful. Your new balance is: $" + balance.toFixed(2));
    } else {
     
        if (withdrawalAmount <= 0) {
            console.log("The withdrawal amount must be greater than zero.");
            alert("The withdrawal amount must be greater than zero.");
        } 
    }
}
/*
Task 6: Temperature Conversion
*/

function celsiusToFahrenheit(celsius) {
    /*\  (celsius *9/5) +32    */
    return (celsius * 9/5) + 32;
}


let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));


if (isNaN(celsius)) {
    console.log("Please enter a valid number.");
    alert("Please enter a valid number.");
} else {
    let fahrenheit = celsiusToFahrenheit(celsius);
    let state;
    if (celsius < 0) {
        state = "below freezing";
    } else if (celsius > 100) {
        state = "above boiling";
    } else {
        state = "normal";
    }

    // Display the result
    console.log(`The temperature is ${fahrenheit.toFixed(2)}°F, which is ${state}.`);
    alert(`The temperature is ${fahrenheit.toFixed(2)}°F, which is ${state}.`);
}


/*


Task 7: Shopping Cart Discount

*/
// Function to calculate the final amount after applying discount
function calculateDiscountedAmount(amount) {
    let discount = 0;

    if (amount > 200) {
        discount = 0.20; // 20% discount
    } else if (amount > 100) {
        discount = 0.10; // 10% discount
    }

    return amount - (amount * discount);
}

// Get user input for the total amount of the shopping cart
let amount = parseFloat(prompt("Enter the total amount of your shopping cart:"));

// Validate the input to ensure it is a number
if (isNaN(amount) || amount < 0) {
    console.log("Please enter a valid number.");
    alert("Please enter a valid number.");
} else {
    // Calculate the final amount after applying discount
    let finalAmount = calculateDiscountedAmount(amount);

    // Display the final amount
    console.log(`The final amount after discount is: $${finalAmount.toFixed(2)}`);
    alert(`The final amount after discount is: $${finalAmount.toFixed(2)}`);
}






/*
Task 8: Password Strength Checker

*/
// Function to check the strength of the password
function checkPasswordStrength(password) {
    let lengthCriteria = password.length >= 8;
    let numberCriteria = /\d/.test(password);
    let specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && numberCriteria && specialCharCriteria) {
        return "strong";
    } else if (lengthCriteria && (numberCriteria || specialCharCriteria)) {
        return "moderate";
    } else {
        return "weak";
    }
}

// Get user input for the password
let password = prompt("Enter your password:");

// Check the strength of the password
let strength = checkPasswordStrength(password);

// Display the result
console.log(`Your password is ${strength}.`);
alert(`Your password is ${strength}.`);






/*
Task 9: Simple Calculator
*/
// Function to perform the arithmetic operation
function performOperation(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            result = "Error: Division by zero is not allowed.";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "Error: Invalid operator.";
    }

    return result;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an arithmetic operator (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
    alert("Please enter valid numbers.");
} else {
    let result = performOperation(num1, num2, operator);

    console.log(`The result is: ${result}`);
    alert(`The result is: ${result}`);
}






/*


Task 10: Library Book Loan System



*/
function checkBorrowingLimit(userType, numberOfBooks) {
    let maxBooks;
    let isApproved;

    if (userType === "student") {
        maxBooks = 3;
        isApproved = numberOfBooks <= maxBooks;
    } else if (userType === "teacher") {
        maxBooks = 5;
        isApproved = numberOfBooks <= maxBooks;
    } else {
        return "Error: Invalid user type.";
    }

    if (isApproved) {
        return `Loan approved. You can borrow ${numberOfBooks} book(s).`;
    } else {
        return `Loan not approved. ${userType.charAt(0).toUpperCase() + userType.slice(1)}s can borrow up to ${maxBooks} book(s).`;
    }
}

let userType = prompt("Enter the type of user (student, teacher):").toLowerCase();

let numberOfBooks = parseInt(prompt("Enter the number of books you want to borrow:"));

if (isNaN(numberOfBooks) || numberOfBooks <= 0) {
    console.log("Please enter a valid number of books.");
    alert("Please enter a valid number of books.");
} else {
    let result = checkBorrowingLimit(userType, numberOfBooks);

    console.log(result);
    alert(result);
}




/*

Task 11: Age and Nationality Checker
*/

let age = parseInt(prompt("Enter your age:"));
let nationality = prompt("Enter your nationality:").toLowerCase();

if (isNaN(age) || age < 0) {
    console.log("Please enter a valid age.");
    alert("Please enter a valid age.");
} else {
    if (age >= 18) {
        if (nationality === "american") {
            console.log("You are eligible to vote.");
            alert("You are eligible to vote.");
        } else {
            console.log("You are not eligible to vote because you are not American.");
            alert("You are not eligible to vote because you are not American.");
        }
    } else {
        console.log("You are not eligible to vote because you are under 18.");
        alert("You are not eligible to vote because you are under 18.");
    }
}

/*

Task 12: Temperature Alert System
 */
let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (isNaN(temperature)) {
    console.log("Please enter a valid number.");
    alert("Please enter a valid number.");
} else {
    let category;
    if (temperature < 0) {
        category = "Very Cold";
    } else if (temperature >= 0 && temperature <= 15) {
        category = "Cold";
    } else if (temperature >= 16 && temperature <= 25) {
        category = "Warm";
    } else if (temperature > 25) {
        category = "Hot";
    }

    console.log(`The temperature is ${temperature}°C, which is ${category}.`);
    alert(`The temperature is ${temperature}°C, which is ${category}.`);
}


/*  

Task 13: Movie Ticket Pricing

*/
function calculateTicketPrice(age, movieType) {
    let basePrice;

    if (movieType === "Regular") {
        basePrice = 10;
    } else if (movieType === "3D") {
        basePrice = 15;
    } else {
        return "Error: Invalid movie type.";
    }

    if (age < 0) {
        return "Error: Invalid age.";
    } else if (age < 12) {
        return basePrice * 0.8; 
    } else {
        return basePrice;
    }
}


let Age = parseInt(prompt("Enter your age:"));
let movieType = prompt("Enter the type of movie (Regular or 3D):").trim();

if (isNaN(Age) || Age < 0) {
    console.log("Please enter a valid age.");
    alert("Please enter a valid age.");
} else {
  
    movieType = movieType.toLowerCase();

    
    let ticketPrice = calculateTicketPrice(Age, movieType);

    if (typeof ticketPrice === "number") {
        console.log(`The ticket price is: $${ticketPrice.toFixed(2)}`);
        alert(`The ticket price is: $${ticketPrice.toFixed(2)}`);
    } else {
        console.log(ticketPrice);
        alert(ticketPrice);
    }
}









 /*

Task 14: Restaurant Order System

     */


function calculateOrderPrice(order, quantity) {
    let price;

    switch (order) {
        case "Pizza":
            price = 10;
            break;
        case "Pasta":
            price = 8;
            break;
        case "Salad":
            price = 6;
            break;
        default:
            return "Error: Invalid order.";
    }

    
    if (quantity > 1) {
        price *= 0.9; 
    }

    return price * quantity;
}


let order = prompt("Enter your order (Pizza, Pasta, Salad):").trim();
let quantity = parseInt(prompt("Enter the quantity:"));


if (isNaN(quantity) || quantity <= 0) {
    console.log("Please enter a valid quantity.");
    alert("Please enter a valid quantity.");
} else {
    
    order = order.toLowerCase();

   
    let totalPrice = calculateOrderPrice(order, quantity);

   
    if (typeof totalPrice === "number") {
        console.log(`The total price for your order is: $${totalPrice.toFixed(2)}`);
        alert(`The total price for your order is: $${totalPrice.toFixed(2)}`);
    } else {
        console.log(totalPrice);
        alert(totalPrice);
    }
}

/*

Task 15: Grade Evaluation System

*/

function calculateAverageGrade(grade1, grade2, grade3) {
    return (grade1 + grade2 + grade3) / 3;
}


function evaluateResult(averageGrade) {
    if (averageGrade >= 60) {
        return "Pass";
    } else {
        return "Fail";
    }
}


let grade1 = parseFloat(prompt("Enter your grade for the first subject:"));
let grade2 = parseFloat(prompt("Enter your grade for the second subject:"));
let grade3 = parseFloat(prompt("Enter your grade for the third subject:"));


if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
    console.log("Please enter valid grades.");
    alert("Please enter valid grades.");
} else {
    let averageGrade = calculateAverageGrade(grade1, grade2, grade3);

    
    let result = evaluateResult(averageGrade);

    
    console.log(`Your average grade is: ${averageGrade.toFixed(2)}`);
    console.log(`Result: ${result}`);
    alert(`Your average grade is: ${averageGrade.toFixed(2)}\nResult: ${result}`);
}







/*


Task 16: User Login System


 */


const correctUsername = "user123";
const correctPassword = "password123";


let username = prompt("Enter your username:");
let Password = prompt("Enter your password:");

if (username === correctUsername) {
    if (Password === correctPassword) {
        console.log("Login successful. Welcome, " + username + "!");
        alert("Login successful. Welcome, " + username + "!");
    } else {
        console.log("Incorrect password. Please try again.");
        alert("Incorrect password. Please try again.");
    }
} else {
    console.log("Username not found. Please try again.");
    alert("Username not found. Please try again.");
}






/*



Task 17: Traffic Light Simulator

*/
t
let color = prompt("Enter the current color of the traffic light (Red, Yellow, Green):").toLowerCase();

if (color === "red") {
    console.log("Action: Stop");
    alert("Action: Stop");
} else if (color === "yellow") {
    console.log("Action: Slow down");
    alert("Action: Slow down");
} else if (color === "green") {
    console.log("Action: Go");
    alert("Action: Go");
} else {
    console.log("Invalid color. Please enter Red, Yellow, or Green.");
    alert("Invalid color. Please enter Red, Yellow, or Green.");
}











/*


Task 18: Day of the Week


*/

let dayNumber = parseInt(prompt("Enter a number from 1 to 7 representing the day of the week:"));


let day;
if (dayNumber === 1) {
    day = "Monday";
} else if (dayNumber === 2) {
    day = "Tuesday";
} else if (dayNumber === 3) {
    day = "Wednesday";
} else if (dayNumber === 4) {
    day = "Thursday";
} else if (dayNumber === 5) {
    day = "Friday";
} else if (dayNumber === 6) {
    day = "Saturday";
} else if (dayNumber === 7) {
    day = "Sunday";
} else {
    console.log("Invalid input. Please enter a number from 1 to 7.");
    alert("Invalid input. Please enter a number from 1 to 7.");
}


if (day) {
    console.log(`Day ${dayNumber} corresponds to ${day}.`);
    alert(`Day ${dayNumber} corresponds to ${day}.`);
}




/*


Task 19: Hotel Room Booking


*/

function calculateTotalCost(roomType, numberOfNights) {
    let pricePerNight;

    switch (roomType) {
        case "Single":
            pricePerNight = 50;
            break;
        case "Double":
            pricePerNight = 80;
            break;
        case "Suite":
            pricePerNight = 120;
            break;
        default:
            return "Error: Invalid room type.";
    }

    return pricePerNight * numberOfNights;
}

let roomType = prompt("Enter the type of room you want to book (Single, Double, Suite):").trim();
let numberOfNights = parseInt(prompt("Enter the number of nights you want to stay:"));


if (isNaN(numberOfNights) || numberOfNights <= 0) {
    console.log("Please enter a valid number of nights.");
    alert("Please enter a valid number of nights.");
} else {
 
    roomType = roomType.toLowerCase();

    let totalCost = calculateTotalCost(roomType, numberOfNights);

    if (typeof totalCost === "number") {
        console.log(`The total cost for your booking is: $${totalCost.toFixed(2)}`);
        alert(`The total cost for your booking is: $${totalCost.toFixed(2)}`);
    } else {
        console.log(totalCost);
        alert(totalCost);
    }
}




/*

Task 20: Multiplication Table Generator

*/

let number = parseInt(prompt("Enter a number to generate its multiplication table:"));


if (isNaN(number)) {
    console.log("Please enter a valid number.");
    alert("Please enter a valid number.");
} else {

    console.log(`Multiplication table for ${number}:`);
    alert(`Multiplication table for ${number}:`);

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} × ${i} = ${result}`);
        alert(`${number} × ${i} = ${result}`);
    }
}
