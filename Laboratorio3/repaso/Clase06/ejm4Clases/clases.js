//creacion de clase

class Persona{

    //                         parametro opcional
    constructor(nombre,edad,hambre = false){
        this.nombre = nombre;
        this.edad = edad;
        this.hambre = hambre;
    }

    //seters y geters se transforman en propiedades
    set Nombre(value){
        this.nombre = value.toUpperCase();
    }

    get Nombre(){
        return this.nombre;
    }

    //metodos normales
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }

    //Metodos estaticos
    static sumar(a,b){
        return a+b;
    }

}

//Herencia
class Empleado extends Persona{

    constructor(legajo,nombre,edad,hambre){
        //asi llamo al padre
        super(nombre,edad,hambre);
        this.legajo = legajo;
    }

    //overraid
    saludar(){
        console.log(`Hola me llamo ${this.nombre} y mi legajo es ${this.legajo}`)
    }

    cobrarAguinaldo(){
        console.log("soy feliz con mi aginaldo");
    }

}


const p1 = new Persona("analia",20,true);
const p2 = new Persona("pepe",50,false);

const emp =new Empleado(123456,"roberto",25,true);
const emp1 =new Empleado(1235756,"juan",29);

console.log(p1.Nombre);
p1.Nombre = "juan";
console.log(p1.Nombre);


console.log(Persona.sumar(4,1));

console.log(emp);
console.log(emp.Nombre);

emp.saludar();
console.log(emp1.hambre);

//1:04
