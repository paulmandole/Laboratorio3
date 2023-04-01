function sumar(a,b)
{
    //simulo latencia con el set timeout 
    let rta;
    setTimeout(() => {
        rta = a+b;
        console.log("ya tengo el  resultado");
    }, 2000);
    return rta;
}

function producto(a,b)
{
    return a*b;
}

function cuadrado(a)
{
    return a*a;
}
console.log("Inicio");
let x = sumar(4,8);
let p = cuadrado(x);
let z = producto(p,10)

console.log(z);
console.log("Fin");

const vec =[3,4,5,6];

vec.push(7);

console.log(vec);

function saludar(){
    console.log("Hola que tal?");
}
function despedir(){
    console.log("chau chau");
}+

function ejecutora(x){

    setTimeout(() => {
        x();//ejecuta la funcion que le paso 
    }, 2000);
   
}

ejecutora(saludar);
