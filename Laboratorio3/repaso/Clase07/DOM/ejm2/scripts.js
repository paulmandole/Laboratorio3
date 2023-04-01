import {movies} from "./peliculas.js";

const $lista = document.getElementById("lista");



$lista.appendChild(crearItems(movies));


function crearItems(lista){
    //este es un elemento apra cargar en memoria y luego desaparece
    const $fragmento = document.createDocumentFragment();
    //array      //elemento
    lista.forEach(movie=>{
        //creo el li
        const $li = document.createElement("li");
        //creo el nodo de texto
        const $texto = document.createTextNode(movie.movie_name);
        //agrego al li eltexto
        $li.appendChild($texto);
        //agrego el atributo al li
        $li.setAttribute("data-id",movie.id);
        //agrego el li a la lista
        $fragmento.appendChild($li);
        
    });

    return $fragmento;
}




