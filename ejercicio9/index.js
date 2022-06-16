
const logger = require('./logger');

let resultado;
function division( a, b){
   if( b != 0){
       return a / b;
   }
   throw new Error("Error al dividir")
}
try {
    resultado = division(4, 0);
} catch (e) {
    logger.error("Division por 0 ");
    
}
console.log(`El resultado de la division es: ${resultado}`);

