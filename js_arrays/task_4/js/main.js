let elements = [];

elements[0] = Math.trunc(Math.random() * 100);
elements[1] = elements[0] * 2;
elements[2] = elements[1] + 1;
elements[3] = elements[0] * elements[1];
elements[4] = elements[1] * elements[3];

console.log(elements);