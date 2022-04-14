const { test, expect } = require("@jest/globals");
const isPrime = require("./tipCalculator")

function calculateTip(amount) {
    return amount * .20;
}

test("properly get tip",() => {
    let amount = 30;
    expect(calculateTip(amount)).toBe(6)
})

test(" check is array length was 3",()=> {
    const hands = ['rock', 'paper', 'scissors']
    expect(hands).toHaveLength(3)
})

test("Make sure name is Joe",()=> {
    var playerOne = {
        Name: 'Joe',
    }
    expect(playerOne.Name =='Joe').toBeTruthy()
})

test("check callback with mock function",()=> {
    const mockfunction = jest.fn(() => "this is a call back");
    expect(mockfunction("this is calling the mock function")).toBe("this is a call back");
    expect(mockfunction).toHaveBeenCalledWith("this is calling the mock function")
})


// const isPrime = require("./tipCalculator")
test("if a given number is prime", () => {
    let num =33
    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log('is not a prime');
        }else {
            return console.log('is a prime');
        }
    }
    expect('is a prime').toHaveReturned();
})