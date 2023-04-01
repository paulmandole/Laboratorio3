//para importar la persona
import Persona from "./persona.js";

//si importo sin default
//Herencia
export class Empleado extends Persona{

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


