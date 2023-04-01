


export const crearTabla = (data)=>{
    const $table = document.createElement("tabla");
    const $tHead = document.createElement("thead");
    const $tBody = document.createElement("tbody");

    const $cabecera = document.createElement("tr");

    for (const key in data[0]) {
        if(key!== "id"){
            const $th = document.createElement("th");
            const $text = document.createTextNode(key);
            $th.appendChild($text);
            $cabecera.appendChild($th);
            
        }
        
    }
    $tHead.appendChild($cabecera);
    $table.appendChild($tHead);


    //forma corta
    data.forEach((element,index) => {
        const $tr = document.createElement("tr");
        //consigo las keys
        for (const key in element) {

            if(key === "id"){
                $tr.setAttribute("data-id",element[key]);
            }
            else{
                const $td = document.createElement("td");
                //agrego el texto al td
                $td.textContent = element[key];
                
                $tr.appendChild($td);
            }
        }
        if(index % 2)
            $tr.style.backgroundColor = "#ccc";
        $tBody.appendChild($tr);

    });
    $table.appendChild($tBody);

    return $table;
};