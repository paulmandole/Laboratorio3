////////OBJETOS/////////

/**Declaracion Objetos */
const obj1 = new Object();
const obj2 = {};//se declaran asi

//puedo poner la clave entre comillas si quiero
const obj3 = {
    //"nombre de pila":"paul", si declaro como cadena con espacios solo puedo accesarlo con []
    nombre:"paul",
    edad:26,
    hambre:true,

};

/**Funciones constructoras */

/*function Persona(){
    this.nombre = "jose";
    this.edad = 45;
    this.hambre = false;
}*/

function Persona(nombre,edad,hambre){
    //atributo privado
    let _nombre = nombre;
    this.edad = edad;
    this.hambre = hambre;

    this.setNombre = function(value){
        _nombre = value;
    }

    this.getNombre = function(){
        return _nombre;
    }

    //para q no se repitan las funciones en cada objeto y se hace un metodo de clase
    Persona.prototype.saludar = ()=>{console.log(`hola me llamo ${this.getNombre()}`)}
}


/**Herencia */

function Empleado(nombre,edad,hambre,sueldo,legajo){

    //metodo call igual a la funcion pero yo le digo con q escout tengo q trabjar
    //es como el this al constructor padre de c#
    Persona.call(this,nombre,edad,hambre);
    //le pongo el prototipo de persona a empleado
    Object.setPrototypeOf(Empleado.prototype,Persona.prototype); 

    let _sueldo = sueldo;
    let _legajo = legajo;

    this.setLegajo = function(value){
        _legajo = value;
    }

    this.getlegajo = function(){
        return _legajo;
    }
    this.setSueldo = function(value){
        _sueldo = value;
    }

    this.getSueldo = function(){
        return _sueldo;
    }
   
}

/**creacion de empleado */
const emp1 = new Empleado("ramiro",30,true,25000,123564);

console.log(emp1);
emp1.saludar();


/**intancia de objetos a travez funciones constructoras */

const persona = new Persona("Ana",25,false);
const p2 = new Persona("pepe",22,true);
console.log(persona);
console.log(persona.getNombre());

p2.saludar();


/**Acceso a traves de . o [] */
//console.log(obj3.nombre);
//console.log(obj3["nombre"]);


/**Recorrer Objetos */
/**forin estructura repetitiva clave valor
 * forof
*/

//forIn
for (const key in obj3) {
   //console.log(obj3[key]);
   //console.log(key ,obj3[key]);
}

//forOf es solo para arrays
for (const i of Object.values(obj3)) {
    //console.log(i);
}



//array de las llaves
//console.log(Object.keys(obj3));

//array de los values
//console.log(Object.values(obj3));

//entries muestra el array de arrays
//console.log(Object.entries(obj3));


/**Copiar copia nueva */
const obj4 = {...obj3};//se usa asi
const obj5 = Object.assign({},obj3);

obj4.nombre = "pepe";
//console.log(obj4);
//console.log(obj3);
//console.log(obj5);

/**agregar atributos  a una instancia*/
obj3.apellido = "Mandole";
//console.log(obj3);

