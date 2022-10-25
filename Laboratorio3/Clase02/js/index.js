
/*window.addEventListener("load",asignarManejadores);
function asignarManejadores(){
    document.getElementById("btnSaludar").addEventListener("click",function (){

    alert("Hola bienvenido a JS");
});
}*/



  //el document get elem entby id devuelve una direccion de memoria por eso uso const
  const btn = document.getElementById("btnSaludar");


  //manejador de eventos nombreevento punteo a funcionsin parentesis
  btn.addEventListener(     "click",  saludar   );




  // let nombre =  "juan";
  //usar const para guardar una variable q es una referencia
  //para el resto let 
  const vec = [4,3,5,6,1];//se delcara asi 
  //let vec1 =  new Array(); es lo mismo no se usa

  const vec2 = [];

  //no te de3ja aser eso por q es una direccion de memoria vec = vec2;

  vec.push(10);//agrega un elemento al final del array
  console.log(vec);
  console.log(vec2);





function saludar(){

    alert("Hola bienvenido a JS");
}

//FORMAS DE HACER FUNCIONES 
//funcion declarada
function sumar(a, b){
    return a + b;
}

//dfuncion expresada
const sumarr = function (a, b){
    return a + b;
}

//arroy function

const sumarrr = (a, b)=> {
    return a +b;
}
//si es una linea me ahorro el return 
const sumarrrr = (a, b)=> a + a;

console.log(sumar(3,4));
console.log(sumarr(3,4));
console.log(sumarrr(3,4));
console.log(sumarrrr(3,4));



// evento summit

//elementos por su tag un array con todos los elementos que tengo en los form de la pag
//tengo q decirle q form es [0] empiesa con 0
const formulario = document.getElementsByTagName("form")[0];

//atrapo el evento summit e de evento
formulario.addEventListener("submit",function(e){
    
    //e.targer apra saber quien envio el evento

    //evita q se lanse lo por defecto del form
    e.preventDefault();
    console.log("quisiste enviar");
    console.log(e.target);
    console.log(e);

})




//ejm para ver q puedo capturar el boton desde el contenedor o desde el boton pero el target es del mismo por default lo captura en la fase de burbuja
document.getElementById("btnSaludar").addEventListener("click" ,function(e){

    console.log("boton");
    console.log(e.target);
})


//al poner true como tercer parametro quiero q capture el evento en la fase de captura no por default
document.getElementById("contenedor").addEventListener("click" ,function(e){

    console.log("contenedor");
    console.log(e.target);
},true)