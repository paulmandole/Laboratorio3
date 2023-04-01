import { Persona } from "./persona.js";
import { crearTabla } from "./dinamicas.js";


//localStorage.setItem("personas",JSON.stringify(people));
//que me traiga personas o sino un array bacio
const personas = JSON.parse(localStorage.getItem("personas")) || [];




//locale storage se guarda como texto
//localStorage.setItem("nombre","juan");
//JSON.stringgify(objeto) convierte un objeto en un json pero como string
/*
localStorage.setItem("lista",JSON.stringify(personas));
console.log(localStorage);

const x = JSON.parse(localStorage.getItem("lista"));
console.log(x);

//borra un item
localStorage.removeItem("lista");
//borrar el storage
//localStorage.clear();
*/

//asigno solo un manejador para todoas las td se usa cuando son muchos o nose cuantos son
window.addEventListener("click",(e)=>{
    //matches recive un selector de css devuelve un bolleano true si el emisor del evento es una etiqueta td
    if(e.target.matches("td")){
        //veo el mensaje
        //console.log(e.target.textContent);
        //ir al padre y el id del padre
        
        let id = e.target.parentElement.dataset.id;
        //devuelve la primera ocurrencia de true
        cargarFormulario(personas.find((persona)=> persona.id == id));
    }
    else if(e.target.matches("#btnDelete"))
    {
        handlerDelete(parseInt($formulario.txtId.value));
        $formulario.reset();
    }
});

//accedo al form
const $formulario = document.forms[0];



$formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("enviando...");
    //desescturcturo el objeto
    const {txtId,txtNombre,txtEdad,txtEmail,rdoGenero} = $formulario;
    const formPersona = new Persona(txtId.value,txtNombre.value,txtEdad.value,txtEmail.value,rdoGenero.value);
    
    
 
    if(formPersona.id === ''){
        //alta
        console.log(formPersona);
        formPersona.id = Date.now();
        handlerCreate(formPersona);
    }
    else{
        //update
        handlerUpgrade(formPersona);
    }
    
    $formulario.reset();
});


//manejadores 
const handlerCreate = (nuevaPersona)=>{
    personas.push(nuevaPersona);
    actualizarStorage(personas);
    actualizarTabla(personas);
};

const handlerUpgrade = (personaEditada)=>{

    //map develve la persona q recivio en el callback alemnos q yo al cambie
   let indice = personas.findIndex((persona)=>{
        return persona.id == personaEditada.id;
   });
   //
   personas.splice(indice,1);
   personas.push(personaEditada);
    actualizarStorage(personaEditada);
    actualizarTabla(personaEditada);
};

const handlerDelete = (id)=>{
    
      //map develve la persona q recivio en el callback alemnos q yo al cambie
    let indice = personas.findIndex((persona)=>{
        return persona.id == id;
    });
    //
    personas.splice(indice,1);
    actualizarStorage(personas);
    actualizarTabla(personas);
};


const $divTabla = document.getElementById("divTabla");

const actualizarTabla = ()=>{
    //borrar tabla
    while($divTabla.hasChildNodes()){
        $divTabla.removeChild($divTabla.firstElementChild);
    }
    const data = JSON.parse(localStorage.getItem("personas"));
    if(data)
        $divTabla.appendChild(crearTabla(personas));
};


const actualizarStorage = (data)=>{

    localStorage.setItem("personas",JSON.stringify(personas));
    //personas = localStorage.getItem("personas",JSON.stringify(personas));

};

function cargarFormulario(persona){
    const {txtId,txtNombre,txtEdad,txtEmail,rdoGenero} = $formulario;
    txtId.value = persona.id;
    txtNombre.value = persona.nombre;
    txtEdad.value = persona.edad;
    txtEmail.value = persona.email;
    rdoGenero.value = persona.genero;
}

actualizarTabla(personas);



//02:00