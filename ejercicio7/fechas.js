
// la fecha de hoy

const fechaActual = new Date();
console.log(fechaActual.toLocaleDateString("en-GB"));

// la fecha de tu nacimiento

const dateBirthday = new Date(1976,11,26);
console.log(dateBirthday.toLocaleDateString("en-GB"));

// una variable que indique si hoy es mas tarde que la fecha de tu nacimiento

let compararFechas = fechaActual.getTime() > dateBirthday.getTime();
console.log(compararFechas);

// una variable que contenga el mes de tu nacimiento

let mesNacimiento = dateBirthday.getMonth() + 1
console.log(mesNacimiento);

// una variable que contenga el año de tu nacimiento

let anyoNacimiento = dateBirthday.getFullYear();
console.log(anyoNacimiento)