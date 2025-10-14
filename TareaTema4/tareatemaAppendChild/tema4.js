
let tareas = []
let tarea
let categoria




const agregarTarea = document.querySelector("#btn_ingresar")

agregarTarea.addEventListener("click", () => {

    categoria = prompt("¿Que categoría es?" + " DWEC " + " DWES " + " EMPLEO " + " PERSONAL ")
    let nombreTarea = prompt("¿Cual es la tarea que quieres ingresar?")
    tareas.push({ categoria: categoria, nombre: nombreTarea })
    let otra = prompt("¿Desea ingresar otra?")
    if (otra == "Si") {
        categoria = prompt("¿Que categoría es?" + " DWEC " + " DWES " + " EMPLEO " + " PERSONAL ")
        let nombreTarea = prompt("¿Cual es la tarea que quieres ingresar?")
        tareas.push({ categoria: categoria, nombre: nombreTarea })
    } else {

    }
    pintarLista();


})

const borrarTarea = document.querySelector("#btn_borrar")

borrarTarea.addEventListener("click", () => {
    categoria = prompt("¿Que categoría es?" + " DWEC " + " DWES " + " EMPLEO " + " PERSONAL ")
    let nombreTarea = prompt("¿Cual es la tarea que quieres borrar?")
    let indice = -1
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].categoria === categoria && tareas[i].nombre === nombreTarea) {
            indice = i
        }


    }
    if (indice >= 0) {
        tareas.splice(indice, 1)
        alert("Tarea borrada")
    } else {
        alert("No se encontró esa tarea en esa categoría")
    }
    let otraB = prompt("¿Desea borrar otra?")

    if (otraB == "Si") {
        categoria = prompt("¿Que categoría es?" + " DWEC " + " DWES " + " EMPLEO " + " PERSONAL ")
        let nombreTarea = prompt("¿Cual es la tarea que quieres borrar?")
        let indice = -1
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].categoria === categoria && tareas[i].nombre === nombreTarea) {
                indice = i
            }

        }
        if (indice >= 0) {
            tareas.splice(indice, 1)
            alert("Tarea borrada")
        } else {
            alert("No se encontró esa tarea en esa categoría")
        }
    } else {

    }
    borrarLista();
    pintarLista();
})



const contenedor = document.querySelector("#lista");

function pintarLista() {
    contenedor.innerHTML = "";
    for (let i = 0; i < tareas.length; i++) {
        const p = document.createElement("p");
        p.classList.add("tarea");
        p.textContent = " Categoría: " + tareas[i].categoria + " --------------------> Tarea: " + tareas[i].nombre;
        contenedor.appendChild(p);
    }
}


function borrarLista() {
   
    contenedor.innerHTML = "";

    
}