const PI = 3.14;

function sumar(a,b){
    return a+b;
}
//exportado por defaul no necesito desextructurar
function dividir(a,b){
    if(validarCero(b))
        return a/b;
}

function validarCero(a){
    let esValido = 1;
    if(a == 0)
        esValido = 0;

    return esValido;
}

function calcularPerimetro(diametro){
    return PI * diametro;
}

//exportar varios 
//export {sumar,calcularPerimetro};

//Otra forma
export default{
    dividir,
    sumar,
    calcularPerimetro
};