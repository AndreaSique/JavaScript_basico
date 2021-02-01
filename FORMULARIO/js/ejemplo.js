var titulo_html = document.getElementById('titulo');
var caja_html = document.getElementById('caja');
var boton_html = document.getElementById('boton');



function activar(){
    titulo_html.classList.remove("titulo");
    titulo_html.classList.add("titulo2");
    caja_html.classList.add("caja2");
}

//EVENTOS

boton_html.addEventListener('click', activar);