let powersOf2 = [2];

for (let i = 1; i < 6; i++) {
    powersOf2[i] = powersOf2[i - 1] * 2;
}

console.log(powersOf2);