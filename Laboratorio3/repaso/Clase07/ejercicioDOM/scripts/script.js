import { listaPersonas } from "./personas.js";

//console.log(listaPersonas);

const $section = document.getElementById("datos");

$section.appendChild(createTable(listaPersonas));


//crea una tabla en base a una lista de objetos
function createTable(lista){

    const $tabla = document.createElement("table");
    //agrego la casle tabal por defecto
    $tabla.classList.add("tabla");

    $tabla.appendChild(createThead(lista));
    $tabla.appendChild(createTbody(lista));
    return $tabla;
}


//crea un td en base a un texto a ingresar
function createTd(text){

    const $td = document.createElement('td');
    const $texto = document.createTextNode(text);
    $td.appendChild($texto);
    return $td;
}

//crea un tBody en base a una lista de objetos
function createTbody(lista){
    const $tBody = document.createElement("tbody");  

    lista.forEach(element => {
        const $trB = document.createElement("tr");
        for (const key in element) {
            
           if(key === "id"){
                $trB.setAttribute("data-id",key);
           }
           else{
                const $td = document.createElement("td");
                $td.textContent = element[key];
                $trB.appendChild($td);
           }
           
        }
        $tBody.appendChild($trB);
    });
    
    
    return $tBody;
}


//crea una thead en base a una lista de objetos
function createThead(lista){

    const $tHead = document.createElement("thead");
    const $tr = document.createElement("tr");
    //creo los encabezados
    for (const key in lista[0]) {
        if(key != "id")
        {
            const $th = document.createElement("th");
            const $text = document.createTextNode(key);
            $th.appendChild($text);
            $tr.appendChild($th);
            $tHead.appendChild($tr);
        }
       
    } 
    return $tHead;
}

