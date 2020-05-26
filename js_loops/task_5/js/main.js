let userInput;

do {
    userInput = +prompt("Введите n:");

    if (userInput !== null && userInput !== 0) {
        let stars = "";

        for (let i = 0; i < userInput; i++) {
            stars += "*";
        }

        console.log(stars);
    }

} while(userInput);
