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

calcular(3,5);

//si pongo async me permite usar awit
//funcion expesada con async const calcular = async (a,b)=>{ todo lo de adentro };
async function calcular(a,b){

    //siempre pongo trycatch
    try {
        //         esperar a sumar promise
        let suma = await sumarPromise(a,b);
        let cuad = await cuadradoPromise(suma);
        let prod = await productoPromise(cuad,10);
        let rest = await restaPromise(prod,2);
        informar(rest);

    } catch (error) {
        console.error(error);
    }
}

console.log("fin");