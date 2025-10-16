const cara = document.querySelector("#cara")
const cruz = document.querySelector("#cruz")
const imagenes = document.querySelector("#imagenes")
const racha = document.querySelector("#racha")
const rachaMax = document.querySelector("#rachaMax")
const mensaje = document.querySelector("#mensaje")
const resultado = document.querySelector("#resultado")
/* para tabla

const tdResultado = document.querySelector("#tdResultado");
const tdRacha = document.querySelector("#tdRacha");
const tdRachaMax = document.querySelector("#tdRachaMax");
*/
let cont = 0
let max = 0
let lado = ""


function generarLado() {
  let opcionRandomNumero = Math.floor(Math.random() * 2);
  lado = opcionRandomNumero === 1 ? "cara" : "cruz";

}

generarLado();

/*
tdResultado.textContent = "—";
tdRacha.textContent = cont;
tdRachaMax.textContent = max; 


function actualizarTabla(resultadoTxt) {
  if (tdResultado) tdResultado.textContent = resultadoTxt;
  if (tdRacha) tdRacha.textContent = cont;
  if (tdRachaMax) tdRachaMax.textContent = max;
}

*/


function jugar(eleccion) {

  if (eleccion == lado) {
    cont++;
    racha.textContent = cont
    mensaje.textContent = "✅ ¡Has acertado! Racha: " + cont + " aciertos"
    mensaje.style.color = "green"

    //     actualizarTabla("Has ganado");

    if (cont > max) {

      max = cont
      rachaMax.textContent = max
    }

  } else {
    cont = 0;
    racha.textContent = cont
    mensaje.textContent = "❌ Has fallado. Inténtalo otra vez"
    mensaje.style.color = "red"

    //    actualizarTabla("Has perdido");
  }

   // Limpiar el contenido anterior
  resultado.innerHTML = ""

  // Crear imagen
  const img = document.createElement("img")
  img.src = lado === "cara" ? "img/cara.png" : "img/cruz.png"  // 👈 ajusta la ruta si tus imágenes están en otra carpeta
  img.alt = "Moneda: " + lado
  img.width = 150


  // 👇 Añadimos la clase con animación
  img.classList.add("moneda-girando");

   // Insertar debajo
  resultado.appendChild(img)

  // Quitar la clase cuando termine la animación (para que se repita en la siguiente)
  img.addEventListener("animationend", () => {
    img.classList.remove("moneda-girando");
  });

  generarLado();

}


imagenes.addEventListener("click", () => {
  cruz.classList.remove("seleccionarImagen")
  cara.classList.remove("seleccionarImagen")

}, true)

cruz.addEventListener("click", () => {
  cruz.classList.add("seleccionarImagen")

  jugar("cruz")

})

cara.addEventListener("click", () => {
  cara.classList.add("seleccionarImagen")

  jugar("cara")
})




