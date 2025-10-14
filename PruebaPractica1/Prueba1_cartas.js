let prueba=1;
let cartasOcultas=["X","X","X","X","X","X","X","X"];
let cont=0;
let acertados=0;


do {

let cartasPrueba=["X","X","X","X","X","X","X","X"];

let cartas=("O B O E C B E C");
let arrayCartas=cartas.split(" ");
alert(cartasOcultas);


let opciones=prompt("Introduzca dos cartas a revelar: ")
opcionesArray=opciones.split(",");



if(arrayCartas[opcionesArray[0]-1]==arrayCartas[opcionesArray[1]-1]){

  
    cartasOcultas[opcionesArray[0]-1]=arrayCartas[opcionesArray[0]-1];
    cartasOcultas[opcionesArray[1]-1]=arrayCartas[opcionesArray[1]-1];
    cartasPrueba[opcionesArray[0]-1]=arrayCartas[opcionesArray[0]-1];
    cartasPrueba[opcionesArray[1]-1]=arrayCartas[opcionesArray[1]-1];
    alert(cartasOcultas);
    acertados++;

}else{
    cartasPrueba[opcionesArray[0]-1]=arrayCartas[opcionesArray[0]-1];
    cartasPrueba[opcionesArray[1]-1]=arrayCartas[opcionesArray[1]-1];
    alert(cartasPrueba);
}

cont++;


} while (acertados!=4)

if(cont<=4){


    alert("Excelente")


}else if(cont>4 && cont <10){

    alert("Bien Hecho")
}else{
    alert("Se puede mejorar")
}














