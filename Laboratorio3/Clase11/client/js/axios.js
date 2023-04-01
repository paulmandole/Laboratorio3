//la url que le pego
const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");
//correcto poner url q le lleguie por parametro ()url
const getPersonas = () =>{

    //pongo un fantasma de carga
    setSpinner(divSpinner, "./assets/Search.gif");
    //devuelve una promesa tengo q consumila
    axios(URL)
    .then((res)=>
    { 
        //.data trae la info
        console.log(res.data);
    })
    .catch((err)=>{
        //muestro el error por consola
        console.error(err.message);
    })
    .finally(()=>{clearSpinner(divSpinner)})
};

const getPersona = (id) =>{

    //pongo un fantasma de carga
    setSpinner(divSpinner, "./assets/Search.gif");
    //devuelve una promesa tengo q consumila
    axios(URL + "/" + id)
    .then((res)=>
    { 
        //.data trae la info
        console.log(res.data);
    })
    .catch((err)=>{
        //muestro el error por consola
        console.error(err.message);
    })
    .finally(()=>{clearSpinner(divSpinner)})
};




//insertar el icono de carga
const setSpinner = (div, src)=>
{
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "spinner");
    div.appendChild(img);
    
};

//remueve el icono
const clearSpinner  =(div)=>
{
    while (div.hasChildNodes())
    {
        div.removeChild(div.firstElementChild);

    }
}

const getPersonasAsync = async () =>{
    try 
    {
        setSpinner(divSpinner, "./assets/Search.gif");
        //{data} desesctructuro 
        const {data} = await axios(URL);
        console.log(data);

    } catch (error) 
    {
        console.error(err.message);
    }
    finally
    {
        clearSpinner(divSpinner)
    };
};



