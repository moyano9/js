
const celdas = document.querySelectorAll(".celda");
const matriz = [
    [3, 0, 6],
    [7, 1, 2],
    [8, 4, 5],
];

document.addEventListener("DOMContentLoaded", () => {

    pintarMatriz(matriz);


})

const pintarMatriz = (m) => {

    let cont = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            celdas[cont].textContent = matriz[i][j]
            cont++;
        }

    }
}

const desplazarCelda=(m)=>{

    let celdaSeleccionada = celda.textContent; //el 2
        let posicionFilaCero = -1;
        let posicionColumnaCero = -1;
        let posicionFilaCeldaSeleccionada = -1;
        let posicionColumnaCeldaSeleccionada = -1;

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {

                if (matriz[i][j] == 0) {
                    posicionFilaCero = i;
                    posicionColumnaCero = j;
                } else if (matriz[i][j] == celdaSeleccionada) {
                    let posicionFilaCeldaSeleccionada = i;
                    let posicionColumnaCeldaSeleccionada = j;
                }
            }



        }

        matriz[posicionFilaCero][posicionColumnaCero] = celdaSeleccionada
        matriz[posicionFilaCeldaSeleccionada][posicionColumnaCeldaSeleccionada] = 0


}

celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        
    let celdaSeleccionada=celda.textContent



    })
})

const comprobarResultado=(m)=>{

let cont=1
let orden= true


    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            if(m[i][j]!=cont){
                orden=false
            }
        }

    }



}