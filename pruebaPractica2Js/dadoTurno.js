const jugador1 = document.querySelector("#jugador1")
const jugador2 = document.querySelector("#jugador2")
const btnjugar = document.querySelector("#btnjugar");
const btnpasar = document.querySelector("#btnpasar");
const total1 = document.querySelector("#cont1");
const total2 = document.querySelector("#cont2");
const totalTurno = document.querySelector("#turno");
const dado = document.querySelector("#dado");

/*

const divjugador1 = document.querySelector("#jugador1")
const divjugador2 = document.querySelector("#jugador2")
const btnjugar = document.querySelector("#btnjugar");
const btnpasar = document.querySelector("#btnpasar");
const spantotal1 = document.querySelector("#cont1");
const spantotal2 = document.querySelector("#cont2");
const spantotalTurno = document.querySelector("#turno");
const spandado = document.querySelector("#dado");

usar esa estructura para futuros 


*/


let ladodado = 0

function tirarDado() {
    ladodado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    dado.textContent = ladodado;
}


jugador1.classList.add("seleccionarImagen");


let totalJugador1 = 0;
let totalJugador2 = 0;
let turno = 0;
let totaldado = 0;


btnjugar.addEventListener("click", () => {

    tirarDado();

    if (ladodado == 1) {

        if (jugador1.classList.contains("seleccionarImagen")) {

            jugador1.classList.remove("seleccionarImagen")
            jugador2.classList.remove("seleccionarImagen")

            turno = 0;
            jugador2.classList.add("seleccionarImagen")
            totalTurno.textContent = turno;
        } else {
            jugador1.classList.remove("seleccionarImagen")
            jugador2.classList.remove("seleccionarImagen")

            turno = 0;
            jugador1.classList.add("seleccionarImagen")
            totalTurno.textContent = turno;

        }

    } else {



        turno += ladodado;
        totalTurno.textContent = turno;


    }
})

btnpasar.addEventListener("click", () => {

    if (jugador1.classList.contains("seleccionarImagen")) {

        jugador1.classList.remove("seleccionarImagen")
        jugador2.classList.remove("seleccionarImagen")

        jugador2.classList.add("seleccionarImagen")

        totalJugador1 += turno;
        total1.textContent = totalJugador1;
        turno = 0;

    }
    else if (jugador2.classList.contains("seleccionarImagen")) {

        jugador1.classList.remove("seleccionarImagen")
        jugador2.classList.remove("seleccionarImagen")

        jugador1.classList.add("seleccionarImagen")


        totalJugador2 += turno;
        total2.textContent = totalJugador2;

        turno = 0;


    }

    if (totalJugador1 == 100) {

        alert("Gana Jugador1")

    }
    else if (totalJugador2 == 100) {

        alert("gana jugador2")
    }



})















