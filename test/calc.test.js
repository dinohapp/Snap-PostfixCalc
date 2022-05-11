const calculatePostfix = require('./calculatePostfix');
const stdin = require('mock-stdin').stdin();

test('testing "5 5 5 8 + + -"', () =>
console.log(calculatePostfix),
    expect(calculatePostfix("5 5 5 8 + + -")).toBe(-13)
)