function saludar() {
    alert("Hola!");
}

function saludarDiv() {
    alert("Hola! Soy el div");
}

// Todo el contenido HTML cargado
document.addEventListener("DOMContentLoaded", function() {
    // Busca el elemento en el HTML
    const containerButton = document.getElementById("container-button");
    // verifica si el elemento existe por su id
    if (containerButton) {
        // Cuando se haga click se ejecuta la funcion 
        containerButton.addEventListener("click", saludarDiv);
    }
});