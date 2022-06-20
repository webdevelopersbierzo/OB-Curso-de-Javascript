
class Estudiante {
    nombre= "Oscar"
    asignaturas =  [ 'Javascript', 'html', 'css']

    obtenDatos(){
       return {
         nombre: this.nombre,
        asignaturas: this.asignaturas
       }
    }
}

const estudiante1 = new Estudiante();

//console.log( estudiante1);

console.log(estudiante1.obtenDatos())

