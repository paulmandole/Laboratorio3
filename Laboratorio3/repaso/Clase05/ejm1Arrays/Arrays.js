//Declaracion de arrays
/**Los array son objetos todo es objeto en java script */
//const vec1 = new Array();//no se declara asi 
//const vec = [];//se usa asi



/**
 * METODOS DE LOS ARRAYS
 * 
 * push -> agregar a array
 * concat -> devuelve un array desvinculado del original
 * const vec2 = [...vec]; spread operator operator -> es como el concat es como tirar adentro del nuevo
  vector el contenido del otro array.
 *length -> ver el largo de la cadena
 *pop() -> devuelve el ultimo elemento y lo quita de la lista
 *shift() -> devuelve el primero de la lista
 *unshift()-> agrega al inicio lo que le pase
 *forEach((elemento,indice,array)=>) -> recorre sobre vec normalmente se le pasa una funcion q va a ser 
 invocada por cada uno de los elementos del array
 *map -> devuelve un nuevo array con el retorno de la funcion q le paso(el array tiene el mismo tammanio que el original)
 *filter -> recive un elemento devuelve un array nuevo si el callback devuelve 
 true lo incluye en el array  si devuevle false no lo incluye(es como un where de sql)
 *reduce -> devuelve un unico elemento (es como el sum o prom de sql)vec.reduce((prev,actual,index,array)=>{},0) segundo argumento 
 es el prev para la primera iteracion sino se lo pasas agarra como prev el primer elemento y como actual el segundo
 * splice(ApartirIndice,cantidad a borrar) -> es util para eliminar a partir de un indice y une los otros que quedan
 devuelve un array con los elementos que saque
 *indexOf(elemento) -> devuelve el indice de donde encuentra el elemento
 *reverce -> lo da vuelta al array
 *sort->ordenar de manera ascendete de base
 *every -> true o false si para todos los elementos de array da true
 *slice(posInicial,cantidad) -> igual q el elplice pero devuelve un array desde la pocicion q elijo y no lo retira
 */


//ejm 
const vec = [34,20,45,10];

//es el mismo array pero apuntado con dos variable
const vec2 = [20,10];

const vec4 = [...vec,...vec2];//combino los dos arrays los tiro dentro del nuevo

//vec = vec2;

const vec3 = vec.concat();



//console.log(vec);
//console.log(vec2);
//console.log(vec3);

//push agrega un elemento al final de un array
vec.push(25);

//console.log(vec);
//console.log(vec2);

vec.forEach((elemento)=>{
    console.log(elemento);
});

//obtener un array que se el doble de cada elemento de vec
/*const duplicado = vec.map((elemento)=>{
    //return "hola";
    //   condicion del if  repuesta     else
    return elemento % 2 ? elemento : elemento*2;//if else
    
});*/

//                                  arroy function sin return escrito
const duplicado = vec.map((elemento)=>elemento % 2 ? elemento : elemento*2);
//const duplicado = vec.map((e)=>e % 2 ? e : e*2); asi mas abreviado


//console.log(duplicado);

/**FILTER */

const pares = vec.filter(el=>!(el % 2));//si es par devuelve true
//console.log(pares);



 
/**Ejemplos de REDUCE */

const total = vec.reduce((prev,actual)=>{
    return prev + actual;
},0);

console.log(total);


const vecP = ['h','o','l','a'];

const palabra = vecP.reduce((prev,act)=>prev+act);

console.log(palabra);

const contadorLetras = ["pepe","carlos","laura","juan"];
const cantidad =  contadorLetras.reduce((prev,act)=>prev + act.length,0);
console.log(cantidad);


let pos = vec.indexOf(4);
if(pos!=-1)
{
    vec.splice(pos,1);
}
console.log(vec);

vec.sort((a,b)=>b-a);

//ordeno por cantidad de letras
contadorLetras.sort((a,b)=>a.length-b.length);
console.log(contadorLetras);


/**EVERY */
console.log(vec.every((el)=>el % 2 === 0));



//solo para arrays
for (const i of vec) {
    console.log(i)
}