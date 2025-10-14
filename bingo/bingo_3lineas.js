const generar = document.querySelector("#btn_generar");
const contenedor = document.querySelector("#cartones");

generar.addEventListener("click", () => {
  // Crear un contenedor para el cartón
  const carton = document.createElement("div");
  carton.classList.add("carton");

  // Generar 15 números únicos del 1 al 90
  let numeros = [];
  while (numeros.length < 15) {
    let num = Math.floor(Math.random() * 90) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }

  // Ordenar los números
  numeros.sort((a, b) => a - b);

  // Crear 3 líneas con 5 números cada una
  for (let i = 0; i < 3; i++) {
    const linea = document.createElement("p");
    const inicio = i * 5;
    const fin = inicio + 5;
    const lineaNums = numeros.slice(inicio, fin);
    linea.textContent = lineaNums.join("   ");
    carton.appendChild(linea);
  }

  contenedor.appendChild(carton);
});