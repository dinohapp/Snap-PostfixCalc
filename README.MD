# Postfix Calc

Program implements Postfix Calculator using stack. Only +,-,*,/ operations are implemented.
Instructions:https://gist.github.com/dennisbaskin/5979ff6a0d8c1e90b59d060155862767

## Installation

No default installation is required for running the program, just clone the repo and run with:

```bash
npm install #optional
node calc.js
```

## Usage
Great visual explanation of the the logic is located here: https://www.free-online-calculator-use.com/postfix-evaluator.html

```bash
q to exit
c to reset
v to view the current entries
```

## Testing
Jest is used for testing. Still in setup stage. Will update this once more progress is made.
Jest uses mock-stdin for sending test stdin to the app. No other dependencies required.

To run the tests:
npn install
npm test

## Useful alternative solutions:

https://tinyurl.com/yck4vdtr
https://tildes.net/~comp/6ba/programming_challenge_reverse_polish_notation_calculator

## License
[MIT](https://choosealicense.com/licenses/mit/)