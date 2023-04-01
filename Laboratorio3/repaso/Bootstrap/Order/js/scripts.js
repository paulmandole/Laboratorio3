const btnDesordenar = document.querySelector("#btnDesordenar").addEventListener('click',()=>{
    const columnas = document.querySelectorAll('.container>.row:first-child>div.col');
    console.log(columnas);
    columnas[0].classList.add("order-3");
    columnas[1].classList.add("order-1");
    columnas[2].classList.add("order-2");
});