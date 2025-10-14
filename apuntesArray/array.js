
//declarar ARRAYS

const numeros =[1,2,3,4,5]
const numeros2= new Array(1,2,3,4,5)
const numeros3=[1,2,3,4,5,[1,2,3,4,5]]

//mostrar por consola

console.log(numeros)

//recorrer array 

for(let i=0;i<numeros3.length;i++){

    console.log(numeros[i])
}


//añadir un numero alfinal del array en php es numeros []=100

numeros.push(100)

console.table(numeros3)

//para objeros en JSON con llaves

const carrito=[]

const producto1={
    nombre: "impresora 3d",  //objeto JSON, valores siempre con :  !!!!!!
    precio: 250

}
 //todas las funciones nunca devuelven vista, siempre json, el front ya se ecnargara de pintarlos

carrito.push(producto1)
console.table(carrito)

const producto2={
    nombre: "ninebot",
    precio: 500
}

carrito.unshift(producto2) //añadir al inicio del arrray
carrito.pop() //te borra el ultimo
carrito.shift() //elminar el primero

carrito.splice(0) //te elimina cualquier elemento indicando la posicion , sopbrecargado depende
//  de los parametros que le metas hace una cosa u otra

// 1. esta preparado para borrar con un solo parametro segun la posicion
// 2. para actualizar , primer parametro posicion y segundo el numero de elementos a borrar(1)
//  y tecero el nuevo numero
carrito.splice(1,1,5)
// 3. Para añadir seria primero posicion, luego no borrar nada 0, y el numero a meter
carrito.splice(1,0,5)














