//acceder a la coleccion de elementos del html
/*
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.scripts);
console.log(document.styleSheets);
console.log(document.title);
console.log(document.characterSet);

//te da la etiqueta html
console.log(document.documentElement);
//propiedad del html
console.log(document.documentElement.lang);
*/


/**SELECTORES */
//funcion q me permite obtener una referencia a un elemento del Dom

//Obtener un elemento por su id
console.log(document.getElementById("frutas"));

/* No Se usan
//por nombre de tag li h1 etc
console.log(document.getElementsByTagName("li"));
//por clase
console.log(document.getElementsByClassName("rojo"));
*/

//Sleciona un elemento atravez de un selector css #para id . clases 
//o el nombre de la etiqueta (p,h1,ul)
//trae la primera ocurrencia
console.log(document.querySelector("#meses"));

//PAra mas de uno
//devuelve un node list q es como si fuese un arrayes mejor 
console.log(document.querySelectorAll(".rojo"));

console.log(document.querySelectorAll("p"));


/**ATRIBUTOS */
//Atributos de una etiqueta

//se usa el signo $ para referenciar a un objeto de interfaz
const $link = document.querySelector("a");

//gets
            //    para el contenido
console.log($link.href);
console.log($link.getAttribute("href"));



//metodo para setear 
$link.setAttribute("href","https://infobae.com");

$link.setAttribute("target","_blank");

//remover atributo
$link.removeAttribute("target","_blank");

//devuelve true o false si tiene o no el atributo que le paso
console.log($link.hasAttribute("disable"));

//si no lo tiene lo agrega sino lo retira a los atributos buleanos
$link.toggleAttribute("disable");

/**CREACION DE ELEMENTOS */

//create crea un atributo q le pase como string
const $imagen = document.createElement("img");
$imagen.setAttribute("src","https://placeimg.com/300/300/animals");
$imagen.setAttribute("alt","imagen de un animal");

//agregar a un contenedor
$divImagen = document.getElementById("contenedor-imagen");
//appendchild agrega un hijo en el elemento que quiero
$divImagen.appendChild($imagen);

let url ='https://placeimg.com/200/200/arch';
let alt = 'imagen de arquitectura';

//atravez de la propiedad innerHTML se le pasa el literal sobre escribe lo que tenia
$divImagen.innerHTML = `<img src=${url} alt=${alt}/>`;


//Agregar texto plano
//$divImagen.innerText  agrega texto
//$divImagen.textContent agrega tambien los saltos de linea

const $titulo = document.createElement("h1");
//$titulo.innerText = "Soy un h1 hermoso";

//crea un nodo texto
const $nodoTexto = document.createTextNode("Soy un h1 creado con un nodo");
$titulo.appendChild($nodoTexto);
$divImagen.appendChild($titulo);

const $divParrafos = document.getElementById("texto");

//acceder a los hijos
/**children muetra solo los p que tiene dentro sin los nodo textos
 * childNode muestra todo lo que tiene incluso los /n
 * firstElementChild trae el primer nodo
 * firstChild trae el primero incluyendo los de texto
 * lastChild al ultimo  
 * lastElementChild al ultimo
 * childElementCount propiedad que dice cunato hijos tiene
 * appendChild agrega al final
 * prepend agrega al principio de todo
 * before antes del elemento que tengo de referecia en este caso fuera delk div antes
 * after despues del elemento
 * insertAdjacentElement(posicion, elementoAInsertar) beforbegin,afterbegin,afterbegin,afterend
 * insertAdjacentHTML(posicion, elementoAInsertarCOmo html) beforbegin,afterbegin,afterbegin,afterend
 * insertAdjacentText(posicion, elementoAInsertarcomotexto) beforbegin,afterbegin,afterbegin,afterend
 * insertbefor(elemento a insertar, pocicion)
 * replaceChildren remplaza lo que tiene dentro 
 */

//$divParrafos.insertAdjacentElement("afterend",$imagen);
//con corchetes puedo mostrar el hijo q quiero y insertar con antes o despues donde quiero
console.log($divParrafos.insertBefore($imagen,$divParrafos.children[2]));
$divParrafos.children[1].before($imagen);

/**Borrar nodos de un lemento */
//hasChildNodes()devuelve true mientras tenga nodos de hijos
/*while($divParrafos.hasChildNodes()){
    $divParrafos.removeChild($divParrafos.firstChild);
}*/

let elemento = $divParrafos.firstElementChild;
//nextElementSibling devuelve si tiene un hermano

//recorrer elementos a travez de nodos
while(elemento){
    console.log(elemento);
    elemento = elemento.nextElementSibling;
}

//busco un p con clase rojo
$pRojo = document.querySelector("p.rojo");
console.log($pRojo.parentNode);

//closest trae la ocurrencia mas cercana puedo usarse como los query
console.log($pRojo.closest(".inventada"));


/**AGREGAR STYLOS */
console.log($pRojo.className);
console.log($pRojo.classList);

//                                  se puede usar como cuando creo
const $liFrutilla = document.querySelector("ul>li");

//propiedad style accedo a la lista de estilos

//background-color  pasa a ser backgroundColor en java script
//atravez de una propiedad
console.log($liFrutilla.style.backgroundColor)

// atravez de metodo
console.log($liFrutilla.style.getPropertyValue("background-color"));

//setear con metodo
$liFrutilla.style.setProperty("color","blue");

//con propiedad
$liFrutilla.style.backgroundColor = "black";


//agregar clase
//$titulo.classList.add("letraAzul");
//$titulo.classList.add("rojo");
$titulo.classList.add("rojo","letraAzul");

//agrega si no esta o elemina si esta
$titulo.classList.toggle("rojo");


//remover clase
$titulo.classList.remove("rojo");

//ver si tiene la clase 
console.log($titulo.classList.contains("letraAul"));

//remplazar clase
//priemro el que saco luego el que agrego
$titulo.classList.replace("letraAzul","rojo");


const $imgAnuncio = document.querySelectorAll("img")[0];
console.log($imgAnuncio);

//remplaza lo que tenia ese elemento por el nuevo
//$imgAnuncio.outerHTML = "<p>Aca habia una imagen</p>";

//entrar a los atributos q yo invente es data set mas el nopmbre que le puse
//Se usa para poner el id invisible
console.log($imgAnuncio.dataset);
console.log($imgAnuncio.dataset.descripcion);
console.log($imgAnuncio.dataset.id);

//por metodos
console.log($imgAnuncio.getAttribute("data-id"));

//setear
$imgAnuncio.setAttribute("data-id","2345");
$imgAnuncio.dataset.id = "6566";



//2552

