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

//para exportar persona solo un elemento
export default Persona;