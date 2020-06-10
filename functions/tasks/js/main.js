function multiply(a, b) {
    return a * b;
}

function isDividedByFour(value) {
    return value % 4 === 0;
}

function isLeapYear(year) {
    let isFirstConditionValid = year % 4 === 0 && year % 100 !== 0;
    let isSecondConditionValid = year % 100 === 0 && year % 400 === 0;

    return isFirstConditionValid || isSecondConditionValid;
}

function printSequence() {
    const MAX_VALUE = 10;

    for (let i = 1; i <= MAX_VALUE; i++) {
        console.log(i);
    }
}

function showBlock() {
    const BLOCK_COUNT = 4;

    for (let i = 0; i < BLOCK_COUNT; i++) {
        let block = document.createElement("div");
        block.classList.add("super-box");
        document.body.appendChild(block);
    }
}

console.log(multiply(7, 8)); // 56
console.log(isDividedByFour(16)); // true
console.log(isLeapYear(2020)); // true

printSequence();

showBlock();