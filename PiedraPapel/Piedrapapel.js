

let j1 = prompt("Nombre jugador j1");
let j2 = prompt("Nombre jugador j2");


let cont1 = 0;
let cont2 = 0;
let rondas = prompt("Numero de rondas a jugar")
let controndaj1 = 0;
let controndaj2 = 0;
let ronda = 0;


let i = 0;

for (rondas; rondas > 0; rondas--) {
    ronda++;
    let jugadasj1 = prompt("Piedra, papel o tijera");
    let jugadasj2 = prompt("Piedra, papel o tijera");
    let arrayj1 = jugadasj1.split(" ")
    let arrayj2 = jugadasj2.split(" ")
    for (i = 0; i < arrayj1.length; i++) {

        if (arrayj1[i] == "piedra" && arrayj2[i] == "papel") {

            cont2++;

        } else if (arrayj1[i] == "piedra" && arrayj2[i] == "tijera") {

            cont1++;
        } else if (arrayj1[i] == "tijera" && arrayj2[i] == "papel") {

            cont1++;

        } else if (arrayj1[i] == "tijera" && arrayj2[i] == "piedra") {

            cont2++;
        } else if (arrayj1[i] == "papel" && arrayj2[i] == "piedra") {

            cont1++;

        } else if (arrayj1[i] == "papel" && arrayj2[i] == "tijera") {

            cont2++;
        }

    }
    alert("Ronda " + ronda)
    if (cont1 === cont2) {
        alert("Resultado: Empate")
    } else if (cont1 > cont2) {
        alert("Resultado Ronda: Jugador 1 " + j1 + " Gana " + cont1 + " VS " + cont2)
        controndaj1++;
    } else if (cont1 < cont2) {
        alert("Jugador 2 " + j2 + " Gana " + cont1 + " VS " + cont2)
        controndaj2++;
    };
}



