const boton = document.getElementById('saludarId');
boton.addEventListener('click', function(event){
    event.stopPropagation();
    alert('Hola!');
});

const div = document.getElementsByTagName('div')[0];
div.addEventListener('click', function(){
    alert("Hola soy el div");
});