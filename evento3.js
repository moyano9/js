//eventos teclado

const inputTexto= document.querySelector("#pruebaTexto")

inputTexto.addEventListener("keydown",()=>{

   console.log("has presionado una tecla")

})

//COPIAR TEXTO

inputTexto.addEventListener("copy",()=>{

  console.log("Has copiado el texto")

})

//Pinchar fuera del texto con validaciones

inputTexto.addEventListener("blur",()=>{

  console.log("Has pinchado fuera del input")

})

//posible prueba practica :
// dado un input para filtrar los modulos y muchos modulos, escribes e el input
//  y te dice los modulos que empiezan por esa letra o caracteres o hacerlo cuando pones 3 letra(keyup=3)

