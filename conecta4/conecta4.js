/**
 * MATRIZ QUE IDENTIFICA EL ESTADO DEL TABLERO
 * 0 -> No se ha introducido ninguna ficha
 * 1 -> Jugador 1 ha introducido una ficha
 * 2 -> Jugador 2 ha introducido una ficha
*/
let matriz = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

const filas = 6
const columnas = 7
const tableroHTML = document.querySelector('#tablero-juego')
const controlesColumnas = document.querySelector('#controles-columnas')
const spanTurno = document.querySelector("#turno")

let turno = 1;

//FUNCIÓN QUE DIBUJA EL TABLERO EN HTML A PARTIR DE LA MATRIZ
const dibujarTablero = () => {
  // Limpiar el contenido anterior del tablero
  tableroHTML.innerHTML = ''
  controlesColumnas.innerHTML = ''

  // Crear y añadir botones para cada columna
  for (let j = 0; j < columnas; j++) {
    const boton = document.createElement('button')
    boton.classList.add('boton-columna');
    // Añadimos evento click para cada botón pasándole la columna seleccionada que corresponde con el id de cada botón
    boton.addEventListener('click', () => {
      jugar(j)
    })
    boton.textContent = `FICHA`
    controlesColumnas.appendChild(boton)
  }

  // Recorrer las filas y columnas para crear las celdas
  for (let i = 0; i < filas; i++) {
    const filaDiv = document.createElement('div')
    filaDiv.classList.add('fila');
    for (let j = 0; j < columnas; j++) {
      const celdaDiv = document.createElement('div')
      celdaDiv.classList.add('celda')
      if (matriz[i][j] == 1) {
        celdaDiv.classList.add('celdaJ1')
      }
      else if (matriz[i][j] == 2) {
        celdaDiv.classList.add('celdaJ2')
      }
      filaDiv.appendChild(celdaDiv)
    }
    tableroHTML.appendChild(filaDiv)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Llama a la función para dibujar el tablero al cargar la página
  dibujarTablero(matriz)
})



/////////////////////////// INICIO PRUEBA PRÁCTICA ///////////////////////////

// FUNCIÓN QUE CONTROLA LA LÓGICA DEL JUEGO
const jugar = (j) => {
  console.log(j)
  ///////////////////////// ESCRIBIR CÓDIGO AQUÍ /////////////////////////
  if (turno == 1) {

    let ficha = 0;

    for (let i = 5; i >= 0; i--) {

      if (matriz[i][j] == 0 && ficha == 0) {
        matriz[i][j] = 1;
        turno = 2;
        spanTurno.textContent = turno;
        ficha = 1;

      }



    }

    dibujarTablero(matriz)
  }

  else if (turno == 2) {

    let ficha = 0;

    for (let i = 5; i >= 0; i--) {

      if (matriz[i][j] == 0 && ficha == 0) {
        matriz[i][j] = 2;
        turno = 1;
        spanTurno.textContent = turno;
        ficha = 1;

      }



    }

    dibujarTablero(matriz)
  }

  comprobarGanador();


}
let contV1 = 0;
let contH1 = 0;
let contV2 = 0;
let contH2 = 0;
/* 
  FUNCIÓN QUE COMPRUEBA SI HAY 4 FICHAS CONECTADAS EN CUALQUIER DIRECCIÓN EN LÍNEA RECTA
  COMBINACIÓN 1: 4 FICHAS CONECTADAS HORIZONTALMENTE
  COMBINACIÓN 2: 4 FICHAS CONECTADAS VERTICALMENTE
*/
const comprobarGanador = () => {


  ///////////////////////// ESCRIBIR CÓDIGO AQUÍ /////////////////////////

  for (let i = 0; i <= 3; i++) {
    for(let j=0;j<=5;j++){
      
     if(matriz[i][j]==1 &&
       matriz[i+1][j]==1 &&
       matriz[i+2][j]==1 &&
       matriz[i+3][j]==1 

     ){ alert("gana jugador 1")}
     else if(matriz[i][j]==1 &&
       matriz[i+1][j]==2 &&
       matriz[i+2][j]==2 &&
       matriz[i+3][j]==2 

     ){ alert("gana jugador 2")}
    } 
}
for (let i = 0; i <= 5; i++) {
    for(let j=0;j<=3;j++){
      
     if(matriz[j][i]==1 &&
       matriz[j+1][i]==1 &&
       matriz[j+2][i]==1 &&
       matriz[j+3][i]==1 

     ){ alert("gana jugador 1")}
     else if(matriz[j][i]==1 &&
       matriz[j+1][i]==2 &&
       matriz[j+2][i]==2 &&
       matriz[j+3][i]==2 

     ){ alert("gana jugador 2")}
    } 
}


}
/////////////////////////// FIN PRUEBA PRÁCTICA ///////////////////////////



