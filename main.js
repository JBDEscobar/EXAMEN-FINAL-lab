import { formulario } from "./components/formulario/formulario.js";
import { tareas } from "./components/tareas/tareas.js";
function section(){

    let section = document.createElement("div");
    section.className = "section";




    section.appendChild(formulario());


   section.appendChild(tareas());
   section.appendChild(tareas());
   section.appendChild(tareas());
   section.appendChild(tareas());
   section.appendChild(tareas());
   section.appendChild(tareas());
   








    return section;
}
document.body.appendChild(section());