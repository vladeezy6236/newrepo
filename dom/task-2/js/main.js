const FULL_NAME = "Черкасов Владислав Константинович";
const BIRTH_DATE = "1998/12/18";

let p = document.createElement("p");
p.innerHTML = FULL_NAME + "<br>" + BIRTH_DATE;

document.body.appendChild(p);