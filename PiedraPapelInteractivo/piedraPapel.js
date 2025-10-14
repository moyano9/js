const piedraj1 = document.querySelector("#piedra1");
const papelj1 = document.querySelector("#papel1");
const tijeraj1 = document.querySelector("#tijera1");
const imagenes = document.querySelector("#imagenes1")

const piedraj2 = document.querySelector("#piedra2");
const papelj2 = document.querySelector("#papel2");
const tijeraj2 = document.querySelector("#tijera2");
const imagenes2 = document.querySelector("#imagenes2")
let puntos1 = 0
let puntos2 = 0

const btnjugar = document.querySelector("#btnjugar");

btnjugar.addEventListener("click", () => {
    const contador1 = document.querySelector("#contador1")
    const contador2 = document.querySelector("#contador2")
    let jugadaJugador1 = ""
    let jugadaJugador2 = ""

    if (piedraj1.classList.contains("seleccionarImagen")) {

        jugadaJugador1 = "piedra"

    } else if (tijeraj1.classList.contains("seleccionarImagen")) {

        jugadaJugador1 = "tijera"

    } else if (papel1.classList.contains("seleccionarImagen")) {

        jugadaJugador1 = "papel"

    }


    if (piedraj2.classList.contains("seleccionarImagen")) {

        jugadaJugador2 = "piedra"

    } else if (tijeraj2.classList.contains("seleccionarImagen")) {

        jugadaJugador2 = "tijera"

    } else if (papel2.classList.contains("seleccionarImagen")) {

        jugadaJugador2 = "papel"

    }

    if (jugadaJugador1 != "" && jugadaJugador2 != "") {

        if (jugadaJugador1 == jugadaJugador2) {

            alert("EMPATE")
        }
        else if (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera" ||
            jugadaJugador1 == "papel" && jugadaJugador2 == "piedra" ||
            jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") {

            puntos1++
        }
        else {
            puntos2++
        }
    }

    contador1.textContent = puntos1
    contador2.textContent = puntos2
})


//SELECCIONAR IMAGENES-------------------


imagenes.addEventListener("click", () => {
    piedraj1.classList.remove("seleccionarImagen")
    tijeraj1.classList.remove("seleccionarImagen")
    papelj1.classList.remove("seleccionarImagen")

}, true)

piedraj1.addEventListener("click", () => {

    piedraj1.classList.add("seleccionarImagen")
})
tijeraj1.addEventListener("click", () => {

    tijeraj1.classList.add("seleccionarImagen")
})
papelj1.addEventListener("click", () => {

    papelj1.classList.add("seleccionarImagen")
})
//---------JUGADOR 2-----------------------------

imagenes2.addEventListener("click", () => {
    piedraj2.classList.remove("seleccionarImagen")
    tijeraj2.classList.remove("seleccionarImagen")
    papelj2.classList.remove("seleccionarImagen")

}, true)


piedraj2.addEventListener("click", () => {


    piedraj2.classList.add("seleccionarImagen")
})
tijeraj2.addEventListener("click", () => {


    tijeraj2.classList.add("seleccionarImagen")
})
papelj2.addEventListener("click", () => {


    papelj2.classList.add("seleccionarImagen")
})

