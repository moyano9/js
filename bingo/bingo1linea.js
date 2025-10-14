const generar = document.querySelector("#btn_generar");
const contenedor = document.querySelector("#cartones");

generar.addEventListener("click", () => {
  // Crear un cartón nuevo
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

  // Mostrar en pantalla
  const p = document.createElement("p");
  p.textContent = "🎟️ Cartón: " + numeros.join(" - ");
  carton.appendChild(p);
  contenedor.appendChild(carton);
});