//capturar boton de html
//selector

const boton= document.querySelector("#prueba")

//registrar evento click

boton.addEventListener("click",()=>{
    console.log("has hecho click en nav")
})



//registrar evento mouseenter

boton.addEventListener("mouseenter",()=>{

    console.log("has metido el raton dentro del boton")
    boton.style.color="red"
})

//registrar evento mouseout

boton.addEventListener("mouseout",()=>{
    console.log("has sacado el raton fuera")
    boton.style.color="blue"
})

//registrar evento mousedown y up

boton.addEventListener("mousedown",()=>{
    console.log("has hecho mouse down en nav")
})

boton.addEventListener("mouseup",()=>{
    console.log("has hecho mouse up en nav")
})

// evento doble click

boton.addEventListener("dbclick",()=>{
    console.log("has hecho mouse up en nav")
})



