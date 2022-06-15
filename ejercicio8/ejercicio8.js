
// una funcion sin parametros que devuelva siempre true

function verdadera(){
    return true;
}

// Una función asincrona que utilize un setTimeout y pase por consola 
// "Hola soy una promesa" y cinco segundo despues de haberse ejecutado



const miPromesa = new Promise((resolve, reject) =>{
    
    setTimeout(()=> resolve(), 5000);   
        
   
})

miPromesa
    .then(()=> console.log("Hola soy una promesa"))
    .catch(()=> console.log("ERROR"));




// una funcion generador a de indices pares automaticos

function* generaPares(){
    let par = 1;
    while(par <= 10){
        if(par % 2 == 0){
            yield par;
            par ++
        }else{
            par++;
        }
    }
    
}

const miPares = generaPares();
console.log(miPares.next())
console.log(miPares.next())
console.log(miPares.next())
console.log(miPares.next())
console.log(miPares.next())
console.log(miPares.next())
