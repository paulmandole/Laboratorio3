const cargarImagenes = (data)=>{

    const info = document.getElementById("info");
    data.forEach(personaje => {
        const imagen = document.createElement("img");
        imagen.setAttribute('src',personaje.image);
        imagen.setAttribute('alt',personaje.name);
        info.appendChild(imagen);
    });
}


//consumo api
const getPersonajes =  ()=>{

    const URL = "https://rickandmortyapi.com/api/character";

    //ajax puro
    const xhr = new XMLHttpRequest();

    //propiedad nos importa el 4 
    xhr.onreadystatechange = ()=>{
        //cuando la peticion este hecha
        if(xhr.readyState == 4){
            //cuando el estado sea correcto
            if(xhr.status == 200){
                //viene la info en formato texto
                let data = JSON.parse(xhr.responseText);
                cargarImagenes(data.results);
                console.log(data);
            }
        }
    };

    //abro la peticion (como abrir coneccion a base de datos)
    xhr.open("GET",URL);
    xhr.send();

}



getPersonajes();