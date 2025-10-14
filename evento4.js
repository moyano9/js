//evento formulario

const formulario=document.querySelector("#formulario")

formulario.addEventListener("submit",(e)=>{
 
e.preventDefault(); //para el submit, intermediario

console.log("introducir en el DOM")

window.location.href ="/login"


})

