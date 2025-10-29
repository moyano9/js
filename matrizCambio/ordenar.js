const celdas = document.querySelectorAll(".celda");

// Matriz 3x3 (0 representa el hueco vacío)
let matriz = [
  [3, 0, 6],
  [7, 1, 2],
  [8, 4, 5],
];

document.addEventListener("DOMContentLoaded", () => {
  pintarMatriz(matriz);

  celdas.forEach((celda) => {
    celda.addEventListener("click", () => {
      if (celda.textContent === "") return; // Si está vacía, no hace nada

      const valor = parseInt(celda.textContent, 10);
      const movido = moverSiPuede(matriz, valor);

      if (movido) {
        pintarMatriz(matriz);
        if (comprobarResultado(matriz)) {
          setTimeout(() => alert("¡Ordenado! 🎉"), 10);
        }
      }
    });
  });
});

const pintarMatriz = (m) => {
  let cont = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      const valor = m[i][j];
      const celda = celdas[cont];

      if (valor === 0) {
        celda.textContent = "";
        celda.classList.add("vacia");
      } else {
        celda.textContent = valor;
        celda.classList.remove("vacia");
      }
      cont++;
    }
  }
};

// 🔹 Versión simple sin funciones raras
const moverSiPuede = (m, valor) => {
  let filaValor = -1, colValor = -1, filaCero = -1, colCero = -1;

  // Buscar posiciones del valor y del 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (m[i][j] === valor) {
        filaValor = i;
        colValor = j;
      } else if (m[i][j] === 0) {
        filaCero = i;
        colCero = j;
      }
    }
  }

  // Comprobamos si están uno al lado del otro
 const estanJuntos =
  (filaValor === filaCero && (colValor === colCero - 1 || colValor === colCero + 1)) ||
  (colValor === colCero && (filaValor === filaCero - 1 || filaValor === filaCero + 1));

  if (estanJuntos) {
    // Intercambiar posiciones
    m[filaCero][colCero] = valor;
    m[filaValor][colValor] = 0;
    return true;
  }

  return false; // no se pueden mover
};

// Comprueba si está ordenado
const comprobarResultado = (m) => {
  const objetivo = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  let k = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] !== objetivo[k]) return false;
      k++;
    }
  }
  return true;
};