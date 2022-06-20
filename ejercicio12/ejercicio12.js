
function fibonacci (num){
    let num1 = 0;
    let num2 = 1;
    let array = [num2]
    for(let i = 1; (array.length-1) < num-1; i++){
        let valor = num1 + num2;
        array = [...array, valor]
        num1 = num2;
        num2 = valor;
    }
    return array.toString;
}

fibonacci(6)
