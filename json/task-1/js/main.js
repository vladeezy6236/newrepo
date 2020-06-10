const PRIVAT_BANK_URL_BASE = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
const pageOutput = document.querySelector(".output");
const ERROR_MESSAGE = "ERROR!";

function updateCurrency() {
    fetch(PRIVAT_BANK_URL_BASE)
    .then(response => response.json())
    .then(currencyBundle => {
        let result = currencyBundle[3]["buy"];
        pageOutput.textContent = result;
    }).catch(error => {
        pageOutput.textContent = ERROR_MESSAGE;
        console.warn(error);
    });
}

document.querySelector("#btn-update").addEventListener("click", updateCurrency);
