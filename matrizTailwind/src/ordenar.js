
const celdas = document.querySelectorAll(".celda");

// Matriz 3x3 (0 representa el hueco)
let matriz = [
  [3, 0, 6],
  [7, 1, 2],
  [8, 4, 5],
];

document.addEventListener("DOMContentLoaded", () => {
  pintarMatriz(matriz);

  // Click en cada celda
  celdas.forEach((celda) => {
    celda.addEventListener("click", () => {
      const valor = parseInt(celda.textContent, 10);
      if (Number.isNaN(valor) || valor === 0) return;

      const movido = desplazarCelda(matriz, valor);
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
      celdas[cont].textContent = m[i][j];
      celdas[cont].style.opacity = m[i][j] === 0 ? "0.2" : "1";
      cont++;
    }
  }
};

// Devuelve {i,j} donde está "valor" en la matriz
const encontrarPosicion = (m, valor) => {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === valor) return { i, j };
    }
  }
  return null;
};

// ¿Dos posiciones son adyacentes (arriba/abajo/izquierda/derecha)?
const esAdyacente = (a, b) => {
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j) === 1;
};

// Intenta mover "valorSeleccionado" al hueco (0) si es adyacente
const desplazarCelda = (m, valorSeleccionado) => {
  const posCero = encontrarPosicion(m, 0);
  const posValor = encontrarPosicion(m, valorSeleccionado);
  if (!posCero || !posValor) return false;

  if (!esAdyacente(posCero, posValor)) {
    // No se puede mover si no es adyacente
    return false;
  }

  // Intercambio
  m[posCero.i][posCero.j] = valorSeleccionado;
  m[posValor.i][posValor.j] = 0;
  return true;
};

// Objetivo: 1..8 y 0 al final
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