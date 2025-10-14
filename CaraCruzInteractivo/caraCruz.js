const cara = document.querySelector("#cara")
const cruz = document.querySelector("#cruz")
const imagenes = document.querySelector("#imagenes")
const racha=document.querySelector("#racha")
const rachaMax=document.querySelector("#rachaMax")

let opcionRandomNumero=Math.floor(Math.random()*2);
if(opcionRandomNumero==1){
  lado="cara";
}
else{
  lado="cruz";
}

let puntos = 0;






imagenes.addEventListener("click", () => {
    cruz.classList.remove("seleccionarImagen")
    cara.classList.remove("seleccionarImagen")

}, true)

cruz.addEventListener("click", () => {
    cruz.classList.add("seleccionarImagen")
})

cara.addEventListener("click", () => {
    cara.classList.add("seleccionarImagen")
})


