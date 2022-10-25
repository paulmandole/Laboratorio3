let numero = 3;
let num = new Number(4);
console.log(numero);
console.log(num);

const vec = [];
const vec2 = Array();

console.log(vec);
console.log(vec2);

const miFuncion = function(){
    console.log("hola");
};

console.log(typeof miFuncion);


const razas = ["Boxer","Siberiano","Labrador"];

console.log(razas);
console.log(razas[0]);
console.log(razas["0"]);

razas.push("Caniche");//agrega a array

// razas.forEach((elemento,index,array)=>{

//     console.log(elemento,index,array);
// });
// razas.forEach((elemento)=>{

//     console.log(elemento);
// });


// //devuelve un array con el indice y un valor no se usa 
// let entradas = razas.entries;
// let valores = razas.values;
// let llaves = razas.keys;
// for (const iterator of entradas) {
    
//     console.log(iterator);
// }

// //recorre los elementos cada ves una valor distinto no se usa
// console.log(valores.next());

// //es para concatenar un array con otro pero si no le paso nada me devuelve una referencia nueva
// const copia = razas.concat();

// copia.push("algo");

// //===  8 == "8" da false compara tambien por valor y tipo
// //== 8 == "8" da true

// console.log(razas === copia);


//agrega a array
razas.push("Caniche");

//retira el ultimo elemento delarray y me lo retorna
console.log(razas.pop());

//agregar al unicio
console.log(razas.unshift("caniche"));

//retirar al unicio
console.log(razas.shift("caniche"));

//invierte todos loe elementos del array
razas.reverse();

//ordena si no le paso parametros por orden alfav si son string 
//o menor a mayor si son numeros

//forma larga
razas.sort((a,b)=>{
    if(a.length > b.length)
    {
        return 1;
    }   
    else if(a.length < b.length)
    {
        return -1;
    }
    else
    {
        return 0;
    }
});

//forma corta si tengo una funcion q solo tiene un a linea de retorno se ahorra la palabra y se sacan las llaves
razas.sort((a,b)=> a.length - b.length);

//REST operatos ...c
function Sumar(a,b,...c){
    let suma = a+b;
    c.forEach((valor)=>{
        suma+= valor;
    });
    return suma;
}
//no le importa la cantida de elementos que le pase toma los dos primeros
console.log(Sumar(4,5,6,7,8));


//Spread Operator
const numeros = [1,2,3,5,6,8,9,4,5];
const mezcladito = razas.concat(numeros);
console.log(mezcladito);

//mismo efecto que el concat
const mezcladito2 = [...razas,...numeros];

//borra de un array a partir de la pocicion 3 y la cantidad de elementos que quiera
mezcladito.splice(3,1);

//filter map reduce

