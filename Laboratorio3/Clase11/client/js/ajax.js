//la url que le pego
const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");
//correcto poner url q le lleguie por parametro ()url
const getPersonas = () =>{

    //pongo un fantasma de carga
    setSpinner(divSpinner, "./assets/Ghost.gif");
    //instancion un objeto que sera mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange" , ()=>{
        //solo me importa cuando esta com[pleto es 4
        if(xhr.readyState == 4)
        {
            if (xhr.status >= 200 && xhr.status < 300)
            {
                //console.log(xhr);
                //guardo lo que me devolvio el server en data
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
            else
            {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
            clearSpinner(divSpinner);
        }
    });

    xhr.open("GET" , URL);
    xhr.send();
};
const getPersona = (id) =>{

    //pongo un fantasma de carga
    setSpinner(divSpinner, "./assets/Ghost.gif");
    //instancion un objeto que sera mi peticion
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange" , ()=>{
        //solo me importa cuando esta com[pleto es 4
        if(xhr.readyState == 4)
        {
            if (xhr.status >= 200 && xhr.status < 300)
            {
                //console.log(xhr);
                //guardo lo que me devolvio el server en data
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
            else
            {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
            clearSpinner(divSpinner);
        }
    });

    xhr.open("GET"  , URL + "/" + id);
    xhr.send();
};






const setSpinner = (div, src)=>
{
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "spinner");
    div.appendChild(img);
    
};

const clearSpinner  =(div)=>
{
    while (div.hasChildNodes())
    {
        div.removeChild(div.firstElementChild);

    }
}

