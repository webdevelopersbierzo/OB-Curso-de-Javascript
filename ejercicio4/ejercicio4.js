/**
 * @file: ejercicio4.js
 * @author: Oscar Corral 
 * 
 */

 let nombre ='Oscar'
 let apellido = 'Corral';
 let estudiante = `${nombre} ${apellido}`;
 let estudianteMayus = `${estudiante.toLocaleUpperCase()}`
 let estudianteMinus = `${estudiante.toLocaleUpperCase()}`
 let size = `${estudiante.length}`
 let firscharacter = `${nombre[0]}`;
 let lastcharacter = `${apellido[5]}`;
 let deletrSpace = `${estudiante.replace(/ /g, "")}`;
 let contains = `${estudiante.startsWith(`${nombre}`)}`
 
 console.log(estudiante);
 console.log(estudianteMayus);
 console.log(estudianteMinus);
 console.log(size);
 console.log(firscharacter);
 console.log(lastcharacter);
 console.log(deletrSpace);
 console.log(contains)

