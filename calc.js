//importing the node's readline module to be able to read from console.
const getInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//get stdin, and send it to evaluation. If it's a 'q'/'Q' symbol, then end the program. If it's a 'v'/'V' then print the operands array.
console.log("Please enter your RPN input or q to exit, v to show current operands, c to reset")
getInput.on('line', userInput => {
    userInput = userInput.trim();
    //handling the exit command.
    if (userInput === "q" || userInput === "Q" || userInput === "SIGINT") {
        console.log("Exit command received, quitting...")
        getInput.close();
    //handling the view current operands command
    } else if (userInput === "v" || userInput === "V") {
        console.log(operands)
    } else if (userInput === "c" || userInput === "C") {
        console.log('Reset complete')
        operands = [];
    }
    else {
        evaluateInput(userInput);
    }
})

//ensure user typed in the proper input and split it
const evaluateInput = (userInput) => {
    //match everything except numbers, and the operands, otherwise keep prompting the user for input
    const testForLetters = new RegExp(/^[^0-9^+^*^// ^-]*$/); //regex to check for empty string, space or anything but numbers and operands
    if (testForLetters.test(userInput)) {
        console.log("Please enter only numbers or +,-,*,/ Use q to exit.")
    } else {
        userInput = userInput.split(" ");
        calculateRPN(userInput);
    }
}

//we'll go through the input and for each element, check if it's a number or not.
//if it is a number, we'll put it on stack, if it's not we'll pop the last 2 numbers from the stack and perform the operation on them.
let operands = []; //operands array is our stack.
const calculateRPN = (userInput) => {
    userInput.forEach(element => {
        if (!isNaN(element)) {
            operands.push(element);
        } else if (operands.length >= 2) { //check if the operands array has at least 2 elements, otherwise prompt for another input.
            let rightOperand = operands.pop();
            let leftOperand = operands.pop();
            let operation = leftOperand + " " + element + " " + rightOperand; //bug: when -1 - -1 is entered as input, program crashes because it evaluates to "-1--1", added the " " between operands and it solved the issue.
            operands.push(eval(operation))
            console.log(...operands)
        } else {
            console.log(operands.length + " operands entered. Please enter at least 2 operands")
        }
    })
}

