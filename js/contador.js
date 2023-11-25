window.addEventListener("keydown",(e)=>{
    if(e.key=="+"){
        incrementar()
    }
    else if(e.key=="-"){
        decremento()
    }
})


let contador=0;
const valor=document.getElementById("valor")

function incrementar(){
// Comentario: Este codigo parece estar relacionado con un contador y funciones para incrementar decrementar y resetear el contador.

// Comentario: Esta línea incrementa la variable 'contador' en 1.
contador += 1;

// Comentario: Esta línea actualiza el contenido del elemento HTML con el id 'valor' con el valor actual de 'contador'
valor.innerHTML = contador;
}

// Comentario: Esta funcion parece estar relacionada con decrementar el contador.
function decremento(){
    // Comentario: Este comentario indica la intencion de mostrar una alerta con el mensaje "Decremento" pero esta comentada con doble barra por lo que no se ejecutara
    //alert("Decremento")

    // Comentario: Esta condicion verifica si 'contador' es mayor que 0 antes de decrementarlo.
    if(contador > 0){
        // Comentario: Si 'contador' es mayor que 0, se decrementa en 1.
        contador -= 1;
        // Comentario: Se actualiza el contenido del elemento HTML con el id 'valor' con el nuevo valor de 'contador'.
        valor.innerHTML = contador;
    } else {
        // Comentario: Si 'contador' es igual o menor que 0 se establece en 0.
        contador = 0;
        // Comentario: Se actualiza el contenido del elemento HTML con el id 'valor' con el valor actualizado de 'contador'.
        valor.innerHTML = contador;
    }
}

// Comentario: Esta funcion parece estar relacionada con resetear el contador.
function resetear(){
    // Comentario: Se establece 'contador' en 0.
    contador = 0;
    // Comentario: Se actualiza el contenido del elemento HTML con el id 'valor' con el valor actualizado de 'contador'.
    valor.innerHTML = contador;
}
