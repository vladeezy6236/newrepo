const ELEMENTS_COUNT = 10;

let currentElement = 1;
let currentValue = 0;

while (currentElement <= ELEMENTS_COUNT) {
    if (currentValue % 2 === 0) {
        console.log(currentValue);
        currentElement++;
    }
    currentValue++;
}