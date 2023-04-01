const URL = "http://localhost:3000/personas";

const divSpinner = document.querySelector(".spinner");

//hacerla generia para limpiar lo que sea reciviendo el elemento por referencia
const clearDivSpiner = () => {
  while (divSpinner.hasChildNodes()) {
    divSpinner.removeChild(divSpinner.firstChild);
  }
};
const getSpinner = () => {
  const spinner = document.createElement("img");
  spinner.setAttribute("src", "./assets/ghost.gif");
  spinner.setAttribute("alt", "fantasma");
  return spinner;
};

const getPersonas = () => {
  //objeto q hace las peticiones
  const xhr = new XMLHttpRequest();
  //evento
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status <= 300) {
        //array de objetos personas
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error(`error ${xhr.status} :${xhr.statusText}`);
      }
      //borro el spiner
      clearDivSpiner();
    } else {
      //agrego el spinner al div
      divSpinner.appendChild(getSpinner());
    }
  });
  //abro la consulta con el opne pasandole el metoo y la url
  xhr.open("GET", URL);
  //envio la peticion
  xhr.send();
};
const getPersona = (id) => {
  //objeto q hace las peticiones
  const xhr = new XMLHttpRequest();
  //evento
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status <= 300) {
        //array de objetos personas
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error(`error ${xhr.status} :${xhr.statusText}`);
      }
      //borro el spiner
      clearDivSpiner();
    } else {
      //agrego el spinner al div
      divSpinner.appendChild(getSpinner());
    }
  });
  //abro la consulta con el opne pasandole el metoo y la url
  xhr.open("GET", URL + "/" + id);
  //envio la peticion
  xhr.send();
};
const createPersona = () => {
  const nuevaPersona = { nombre: "juan", apellido: "perez" };

  console.log(nuevaPersona);
  //objeto q hace las peticiones
  const xhr = new XMLHttpRequest();
  //evento
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status <= 300) {
        //array de objetos personas
        const data = JSON.parse(xhr.responseText);
        alert(`${data.id} ${data.nombre} ${data.apellido}`);
      } else {
        console.error(`error ${xhr.status} :${xhr.statusText}`);
      }
      //borro el spiner
      clearDivSpiner();
    } else {
      //agrego el spinner al div
      divSpinner.appendChild(getSpinner());
    }
  });

  //enviar por post
  xhr.open("POST", URL);

  //agrego esto
  xhr.setRequestHeader("Content-Type", "application/json;charset=utf8");

  //envio la peticion
  xhr.send(JSON.stringify(nuevaPersona));
};

const getPersonasFetch = () => {
  divSpinner.appendChild(getSpinner());
  //nos devuelve una promesa recive la URL
  fetch(URL)
    //  devuelvo      objeto con info  || promesa rechasada
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`error ${res.status} :${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error))
    .finally(() => clearDivSpiner());
};

//FEtch asinc
const getPersonasFetchAsync = async () => {
  try {
    divSpinner.appendChild(getSpinner());

    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`error ${res.status} :${res.statusText}`);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(error.message);
  } finally {
    clearDivSpiner();
  }
};

//<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
//AXIOS tengo q importar o puedo instalarlo por npm https://www.npmjs.com/package/axios

const getPersonasAxios = () => {
  divSpinner.appendChild(getSpinner());
  //los valores vienen directo en data des estructuro con data  sino seria res.data
  axios
    .get(URL)
    .then(({ data }) => console.log(data))
    .catch((error) => console.error(error.response))
    .finally(() => clearDivSpiner());
};

const getPersonasAxiosAsync = async () => {
  try {
    divSpinner.appendChild(getSpinner());
    const { data } = await axios.get(URL);

    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    clearDivSpiner();
  }
};

const createPersonaFetch = () => {
  const nuevaPersona = { nombre: "pepe", apellido: "lopez" };

  //creo un objeto donde pongo en el body la persona y se lo paso como segundo paramatro a fecht
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevaPersona),
  };
  divSpinner.appendChild(getSpinner());
  //nos devuelve una promesa recive la URL
  fetch(URL, option)
    //  devuelvo      objeto con info  || promesa rechasada
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`error ${res.status} :${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error))
    .finally(() => clearDivSpiner());
};

const createPersonaAxiosAsync = async () => {
  try {
    const nuevaPersona = { nombre: "raul", apellido: "ramirez" };
    //creo un objeto donde pongo en el data la persona y se lo paso como segundo paramatro a fecht
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(nuevaPersona),
    };
    divSpinner.appendChild(getSpinner());
    //ya no es axios.get es axios solo y le paso el opciones cooo segundo param
    const { data } = await axios(URL, option);

    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    clearDivSpiner();
  }
};

const deletePersona = (id) => {
  //objeto q hace las peticiones
  const xhr = new XMLHttpRequest();
  //evento
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status <= 300) {
        //array de objetos personas
        const data = JSON.parse(xhr.responseText);
        alert(data);
      } else {
        console.error(`error ${xhr.status} :${xhr.statusText}`);
      }
      //borro el spiner
      clearDivSpiner();
    } else {
      //agrego el spinner al div
      divSpinner.appendChild(getSpinner());
    }
  });

  //enviar por delete
  xhr.open("delete", URL + "/" + id);
  //envio la peticion
  xhr.send();
};

const deletePersonaFetch = (id) => {
  

  //creo un objeto donde pongo en el body la persona y se lo paso como segundo paramatro a fecht
  const option = {
    method: "DELETE",
  };
  divSpinner.appendChild(getSpinner());
  //nos devuelve una promesa recive la URL
  fetch(URL + "/"+ id, option)
    //  devuelvo      objeto con info  || promesa rechasada
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`error ${res.status} :${res.statusText}`)
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error))
    .finally(() => clearDivSpiner());
};

const deletePersonaAxiosAsync = async (id) => {
    try {
      
      divSpinner.appendChild(getSpinner());
      //ya no es axios.get es axios solo y le paso el opciones cooo segundo param
      const { data } = await axios.delete(URL + "/"+id);
  
      alert(data);
    } catch (error) {
      console.error(error);
    } finally {
      clearDivSpiner();
    }
  };
  const updatePersona = () => {

    const personaToEdit = { id:11,nombre: "juan", apellido: "carlos" };
    //objeto q hace las peticiones
    const xhr = new XMLHttpRequest();
    //evento
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status <= 300) {
          //array de objetos personas
          const data = JSON.parse(xhr.responseText);
          alert(data);
        } else {
          console.error(`error ${xhr.status} :${xhr.statusText}`);
        }
        //borro el spiner
        clearDivSpiner();
      } else {
        //agrego el spinner al div
        divSpinner.appendChild(getSpinner());
      }
    });
  
    //enviar por delete
    xhr.open("PUT", URL + "/" + personaToEdit.id);

    xhr.setRequestHeader("Content-Type", "application/json;charset=utf8");
    //envio la peticion
    xhr.send(JSON.stringify(personaToEdit));
  };

document.getElementById("btnGetP").addEventListener("click", getPersonas);
document
  .getElementById("btnGetPAxios")
  .addEventListener("click", getPersonasAxios);
document
  .getElementById("btnGetPAxiosAsync")
  .addEventListener("click", getPersonasAxiosAsync);
document
  .getElementById("btnGetPFetch")
  .addEventListener("click", getPersonasFetch);
document
  .getElementById("btnGetPFetchAsync")
  .addEventListener("click", getPersonasFetchAsync);
document
  .getElementById("createPersona")
  .addEventListener("click", createPersona);
document
  .getElementById("createPersonaFetch")
  .addEventListener("click", createPersonaFetch);

document
  .getElementById("createPersonaAxiosAsync")
  .addEventListener("click", createPersonaAxiosAsync);

  const vec = [2,2,4,4,5,6,8,2,2];
  const x = new Set(vec);//recive solo valores nuevos

  const y = [...x];

  console.log(x);

  console.log(y);


//2:25
