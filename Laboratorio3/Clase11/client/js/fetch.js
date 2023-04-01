//la url que le pego
const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");
//correcto poner url q le lleguie por parametro ()url
const getPersonas = () =>{

    //pongo un fantasma de carga
    setSpinner(divSpinner, "./assets/Rocket.gif");
    //devuelve una promesa tengo q consumila
    fetch(URL)
    .then((res)=>
    { 
        //res es lo q devuelve
        //console.log(res);
        //return res.ok ?res.json():Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        if(res.ok)
        {
            return res.json();
        }
        else
        {
            //retorno una pormesa fallida para que la agarre el catch
            return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
        }
        
    })
    .then((data)=>
    {
        //muestra la info que trae la promesa que son envie
        console.log(data);
    })
    .catch((err)=>{
        //muestro el error por consola
        console.error(err);
    })
    .finally(()=>{clearSpinner(divSpinner)})
    

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

