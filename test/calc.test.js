const calculatePostfix = require('../calc');
//import calculatePostfix from "../calc"
const stdin = require('mock-stdin').stdin();

test('testing "5 5 5 8 + + -"', () =>
    expect(calculatePostfix(stdin.send("5 5 5 8 + + -\r"))).toBe(-13)
)