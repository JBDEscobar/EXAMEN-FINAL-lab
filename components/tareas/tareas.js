
function tareas(){

let tareas = document.createElement("div");
tareas.className = "tareas";



let tarea = document.createElement("input");
tarea.className = "tarea";
tarea.innerText = "Tarea 1";
tareas.appendChild(tarea);


let eliminar = document.createElement("button");
eliminar.innerText = "Eliminar";
eliminar.className = "eliminar";
tareas.appendChild(eliminar);


  
    





    return tareas;
}
export { tareas }