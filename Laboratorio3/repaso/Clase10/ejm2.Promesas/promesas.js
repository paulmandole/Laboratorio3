//Promesas son objetos y solo son devueltos por funciones

//crear recive un callback con dos funciones (resolve,reject) son buenas practicas

/*new Promise((resolve,reject)=>{
    /*
    if(esta todo bien){
        resolve(lo que me pidieron)
    }
    else{
        reject(por q no funciono);
    }
    

});
*/
/*
function validarPar(numero){

    //retorna una promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //en este caso si es par o es impar seria resolve
            if(typeof numero === "number"){
                let retorno ="Es Par";
                if(numero % 2){
                    retorno = "Es Impar";
                }
                //le paso la respuesta cuando salio bien
                resolve(retorno);
            }
            //el error
            reject("Eso no es par ni impar");
        }, 3000);
    });
}

//no se usa asi 
/*
let p = validarPar(24);

//then cuando este el resultado ejecuta lo que le pase
p.then((data)=>{

});
//cuando haya un error 
p.catch((error)=>{

});

console.log("inicio");
//asi se escrive
validarPar(24)
.then((data)=>{console.log(data)})
.catch((error)=>{console.error(error)});

console.log("fin");
*/
function sumarPromise(a, b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                let suma = a+b;
                console.log(`La Suma es:${suma}`);
                resolve(suma);
            }
            reject("Parametros Invalidos en la suma");
        }, 2000);
    });
}
    
  
function cuadradoPromise(a) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number"){
                let cuad = a*a;
                console.log(`el cuadrado es:${cuad}`);
                resolve(cuad);
            }
            reject("Parametros Invalidos en el cuadrado");
        }, 2000);
    });
}

function productoPromise(a,b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                let prod = a*b;
                console.log(`el producto es:${prod}`);
                resolve(prod);
            }
            reject("Parametros Invalidos en el producto");
        }, 2000);
    });
}
function restaPromise(a,b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                let rest = a-b;
                console.log(`la resta es:${rest}`);
                resolve(rest);
            }
            reject("Parametros Invalidos en la resta");
        }, 2000);
    });
}


  
function informar(a) {
console.log(`El resultado es ${a}`);
}

console.log("inicio");

//resulver con promesas forma larga
/*
sumarPromise(3,4)
.then((suma)=>{
    return cuadradoPromise(suma);
})
.then((cuadrado)=>{
    return productoPromise(cuadrado,10);
})
.then((producto)=>{
    return restaPromise(producto,2);
})
.then((resta)=>{
    return informar(resta);
})
.catch((error)=>{
    console.error(error);
});
*/ 

calcular(4,5);

function calcular(a,b){
                            //condicion   if   esto  o esto
    //operador ternario return x>10         ?    a     :   b
    //forma corta
    sumarPromise(a,b)
    .then(suma => cuadradoPromise(suma))                             //Promise.reject metodo estatico para rechasar una promesa
    .then(cuadrado => cuadrado < 50 ? productoPromise(cuadrado,10): Promise.reject("El numero es mayor a 50"))
    .then(producto => restaPromise(producto,2))
    .then(resta => informar(resta))
    .catch(error => console.error(error));
}

console.log("fin");

//2:06