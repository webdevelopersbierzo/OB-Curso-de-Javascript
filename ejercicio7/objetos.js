const datos_personales = {
    nombre: "miNombre",
    apellido: "Apellido1",
    edad: 45,
    altura: 170,
    eresDesarrollador: true
}
console.log(datos_personales);

// una variable que obtenga tu edad a partir del objeto anterior
let edad = 'edad';

console.log(datos_personales[edad]);

// una lista que contenga el objeto con tus datos personales y un nuevo objeto 
// con los datos personales de tus dos mejores amigos

const amigo1 ={...datos_personales};
amigo1.nombre = "amigo1";
amigo1.apellido =  "Apellidoamigo1";
amigo1.edad = 46;
amigo1.altura = 178;
amigo1.eresDesarrollador = false;

const amigo2 ={...datos_personales};
amigo2.nombre = "amigo2";
amigo2.apellido =  "Apellidoamigo2";
amigo2.edad = 50;
amigo2.altura = 198;
amigo2.eresDesarrollador = true;

const lista_datos_personales = [{...datos_personales}, {...amigo1},{...amigo2}] 
console.log(lista_datos_personales);

// una nueva lista con los objetos  de la lista anteriro ordenados por edad, de mayor a menor
lista_datos_personales.sort((a,b)=> b.edad - a.edad);
console.log(lista_datos_personales)