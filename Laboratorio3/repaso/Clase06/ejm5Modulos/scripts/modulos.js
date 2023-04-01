//si necesito usar una persona tengo q importar la persona
//
import Persona from "./persona.js";
//importo empleado sin default con una desextructuracion
import {Empleado} from "./empleado.js";

const empleado = new Empleado(1234,"Alicia",23,true);

const persona = new Persona("pepe",20);

empleado.cobrarAguinaldo();
persona.saludar();