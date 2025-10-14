const generar = document.querySelector("#btn_generar");
const contenedor = document.querySelector("#cartones");

generar.addEventListener("click", () => {
  const carton = document.createElement("div");
  carton.classList.add("carton");

  // 1️⃣ Generar 15 números únicos del 1 al 90
  let numeros = [];
  while (numeros.length < 15) {
    let num = Math.floor(Math.random() * 90) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }
  numeros.sort((a, b) => a - b);

  // 2️⃣ Crear 3 filas con 9 casillas cada una
  for (let fila = 0; fila < 3; fila++) {
    const linea = document.createElement("div");
    linea.classList.add("linea");

    // Seleccionar 5 posiciones aleatorias (de 0 a 8) para poner números
    let posiciones = [];
    while (posiciones.length < 5) {
      let pos = Math.floor(Math.random() * 9);
      if (!posiciones.includes(pos)) posiciones.push(pos);
    }

    // Rellenar las 9 casillas
    for (let col = 0; col < 9; col++) {
      const celda = document.createElement("div");
      celda.classList.add("casilla");

      // Si la posición tiene número, colocar uno
      if (posiciones.includes(col) && numeros.length > 0) {
        celda.textContent = numeros.shift(); // toma el primero y lo quita
      } else {
        celda.textContent = ""; // hueco vacío
      }

      linea.appendChild(celda);
    }

    carton.appendChild(linea);
  }

  contenedor.appendChild(carton);
});