//quiero sumar 2  numeros y al resultado calcularle el cuadrado
//y al cuadrado multiplicarlo por 10 y al resultado restarle2
//y al resultado informarlo por consola

//Solucion no reutilizable
/*
function sumar(a, b) {
  let suma;
  setTimeout(() => {
    suma = a + b;
    console.log(`La suma es: ${suma}`);
    cuadrado(suma);
  }, 2000);
  
}

function cuadrado(a) {
  let cuad;
  setTimeout(() => {
    cuad = a * a;
    console.log(`El cuadrado es: ${cuad}`);
    producto(cuad,10);
  }, 4000);
  
}

function producto(a, b) {
  let prod;
  setTimeout(() => {
    prod = a * b;
    console.log(`El producto es: ${prod}`);
    restar(prod,2)
  }, 3000);
  
}

function restar(a, b) {
  let rest;
  setTimeout(() => {
    rest = a - b;
    console.log(`La resta es: ${rest}`);
    informar(rest);
  }, 2000);
  
}

function informar(a) {
  console.log(`El resultado es ${a}`);
}
*/
//CALLBACK
function sumar(a, b, callback) {
  let suma;
  try {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof callback !== "function"
      ) {
        //corta la funcion
        throw new Error("Parametros invalidos en sumar");
      }
      setTimeout(() => {
        suma = a + b;
        console.log(`La suma es: ${suma}`);
        callback(suma);
      }, 2000);
    
  } catch (error) {
    console.error(error.message);
  }
  //typeof devuelve un strin con el tipo de dato
  
}

function cuadrado(a, callback) {
  let cuad;
  try {
    if (typeof a !== "number" || typeof callback !== "function") {
        //corta la funcion
        throw new Error("Parametros invalidos en cuadrado");
      }
      setTimeout(() => {
        cuad = a * a;
        console.log(`El cuadrado es: ${cuad}`);
        callback(cuad, 10);
      }, 4000);
    
  } catch (error) {
    console.error(error.message);
  }
  
}

function producto(a, b, callback) {
  let prod;
  try {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof callback !== "function"
      ) {
        //corta la funcion
        throw new Error("Parametros invalidos en producto");
      }
      setTimeout(() => {
        prod = a * b;
        console.log(`El producto es: ${prod}`);
        callback(prod, 2);
      }, 3000);
    
  } catch (error) {
    console.error(error.message);
  }
  
}

function restar(a, b, callback) {
  let rest;
  try {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof callback !== "function"
      ) {
        //corta la funcion
        throw new Error("Parametros invalidos en restar");
      }
      setTimeout(() => {
        rest = a - b;
        console.log(`La resta es: ${rest}`);
        callback(rest);
      }, 2000);
  } catch (error) {
    console.error(error.message);
  }
}

function informar(a) {
  console.log(`El resultado es ${a}`);
}

console.log("inicio");
//esto no se hace callback hell

sumar(3, 4, (suma) => {
  cuadrado(suma, (cuad) => {
    producto(cuad, 10, (prod) => {
      restar(prod, 2, (resta) => {
        informar(resta);
      });
    });
  });
});

console.log("fin");

/*
console.log("inicio");
let suma = sumar(3, 4);
informar(suma);
let cuad = cuadrado(suma);
informar(cuad);
let mult = producto(cuad, 10);
informar(mult);
let rest = restar(mult, 2);
informar(rest);
console.log("fin");*/
