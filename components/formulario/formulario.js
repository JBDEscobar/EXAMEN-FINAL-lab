

function formulario() {

    
    let formulario = document.createElement("header");
    formulario.className = "formulario";
    


    let tarea = document.createElement("input");
    tarea.type = "text";
    tarea.placeholder = "tarea";
    tarea.className = "tarea";
    formulario.appendChild(tarea);





    let agregar = document.createElement("button");
   
    agregar.innerText = "Agregar";
    agregar.className = "agregar";
    formulario.appendChild(agregar);


      
    
   




  

    return formulario;

}

export { formulario}