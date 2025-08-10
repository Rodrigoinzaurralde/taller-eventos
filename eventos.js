function alerta(){
    alert("Hola!");
}

const div = document.getElementsByTagName('div')[0];
    div.addEventListener('click', function(){
        alert("Hola soy el div");
});