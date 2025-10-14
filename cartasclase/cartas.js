document.addEventListener("DOMContentLoaded", ()=>{

    const c1 = document.querySelector("#c1")

    c1.addEventListener("click", ()=>{ //alternar entre dos imágenes al hacer clic, como si dieras la vuelta a una carta
        if (c1.src == "http://127.0.0.1:5500/entornoCliente/Ejemplos/DOM/carta1.png") {
            c1.src="carta2.png"
        }
        else{
            c1.src="carta1.png"
        }
    })



    const c2 = document.querySelector("#c2")

    c2.addEventListener("click", ()=>{ //intercambiar una carta por otra, por ejemplo mostrar el reverso o una nueva versión.
        c2.classList.add("hidden")
        const c2_1 = document.querySelector("#c2_1")
        c2_1.classList.remove("hidden")
    })



    const boton_crear = document.querySelector("#btn_crear")

    boton_crear.addEventListener("click", ()=>{ //crear dinámicamente una nueva carta en la página cada vez que pulsas el botón.
        let nuevaCarta = document.createElement("img")
        nuevaCarta.src="carta1.png"
        nuevaCarta.id="nueva_carta"
        nuevaCarta.width=200

        const cartas = document.querySelector("#cartas")
        cartas.appendChild(nuevaCarta) 
    })



}) 

