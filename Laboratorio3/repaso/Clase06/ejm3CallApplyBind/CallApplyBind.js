// las arow function no generan scout y agarran el scout del padre 
//la funcion anonima genera scout

/**todas las funciones tienen los metodos 
 * call() le paso el scout quien quiero q sea su this
 * apply es exactamente igual pero lo parametros originales del metodo si lo tenog que pasar como un array
 * bind devuelve  una funcion nueva pero con ese scout enganchado
 *  */

const obj = {
    nombre:"juan",
    edad:30,
    saludar:function(){
        console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} anios`);
    },
    sumar:function(valor){
        return this.edad +valor;
    }
}

const mascota = {
    nombre:"boby",
    edad:3,
    tipo:"perro"
}

const obj1 = {
    nombre:"raul",
    edad:25,
}

//estoy guardando el metodo saludar en una variable
const metodo = obj.saludar;
const metodoSumar = obj.sumar;

obj.saludar();

//puedo involcarlo asi pero no tengo el scout de el objeto el scout es windows
metodo.call(obj1);
metodo.call(obj);
metodo.call(mascota);
//                           this , lo que pedia originalmente el metodo
console.log(metodoSumar.call(mascota,5));
//console.log(metodoSumar.apply(mascota,[5]));

//le bindea un scout
const metSumarBind = obj.sumar.bind(mascota);

console.log(metSumarBind(5));
