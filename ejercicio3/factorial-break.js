let numero = 1;
let resultado = 1;

while (numero <= 10) {
    
    resultado *= numero;
    numero++;
    if(numero == 10){
        console.log(resultado);
        break;
    }
}