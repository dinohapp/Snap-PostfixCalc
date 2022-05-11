//importing the node's readline module to be able to read from console.
const getInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//get stdin, and send it to evaluation. If it's a 'q'/'Q' symbol, then end the program.
console.log("Please enter your RPN input or q to exit.")
getInput.on('line', userInput => {
    if (userInput === "q" || userInput === "Q" || userInput === "SIGINT") {
        console.log("Exit command received, quitting...")
        getInput.close();
    } else {
        evaluateInput(userInput);
    }
})

//ensure user typed in the proper input and split it
const evaluateInput = (userInput) => {
    //match everything except numbers, and the operands, otherwise keep prompting the user for input
    const testForLetters = new RegExp(/[^0-9^+^-^*^/]/);
    if (testForLetters.test(userInput)) {
        console.log("Please enter only numbers or +,-,*,/ Use q to exit.")
    } else {
        userInput = userInput.split(" ");
        calculateRPN(userInput);
    }
}

//
const calculateRPN = (userInput) => {
    console.log(userInput)
}