const meses=["enero","febrero","marzo","Abril"]
const meses2=["mayo","junio","julio","agosto"]

const producto1={
    nombre: "impresora 3d",
    precio: 250
}

const producto2={
    nombre:"ninebot one s2",
    precio: 500
}

const producto3={
    nombre:"cata atx rgb",
    precio:30
}

//metodo foreach-> no devuelve nada----

const carrito=[
    producto1,
    producto2,
    producto3
]
let total=0

for(let i=0;i<carrito.length;i++){

   total+= carrito[i].precio
}

//otra manera ya sea secuancial o asociativo

for(let p of carrito){
    console.log(p.precio)
}

//si es JSON

//en cada iteracion me divides el array en producto y me muestra el nombre

let cont=0;
carrito.forEach((producto,i)=>{
   // console.log(cont). //
    console.log(i)
    console.log(producto.nombre)
  //  cont++;   // a la vieja usanza para señalar posicion
 


})


// .Map hace lo mismo que le for each

const nuevoCarrito=carrito.map(producto=>producto.precio) //devuelve un array 

//comporbar si el valor existe dentro del array

carrito.forEach(producto=>{
    if(producto.precio==30){//probar funcionamiento       
        return producto.nombre
    }
})

//some array de objetos, devuelve un true o false

const existe = carrito.some(producto=> producto.precio==30)


// encuentra la posicion de lo que quieres

const indice1 = carrito.findIndex(producto=>producto.precio==30) // -1 si no existe
console.log(indice1)

//reduce, le pasas primero el valor inicial y segundo el dato que queirer recorrer

carrito.reduce((total,producto)=> total+producto.precio,0)


//filter array de los producto mayores a 50

res= carrito.filter(producto=>producto.precio>50)

//find te devuleve el primero que cumple esas condicion

res = carrito.find(producto=>producto.precio!=30)

//.every  comprueba si todos los elementos del array cumplen esa condciion

res=carrito.every(producto=>producto.precio!=30)//true o false devuelve






