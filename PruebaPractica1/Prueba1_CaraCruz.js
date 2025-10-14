let opcion="";
let cont=0;
let resultado=0;
let opcionRandomNumero=Math.floor(Math.random()*2);
do {
    
opcion=prompt("Introduzca Cara o Cruz");
;
let lado="";


if(opcionRandomNumero===1){
  lado="cara";
}
else{
    lado="cruz";
}

if(lado===opcion){
    cont++;
    alert("¡Has acertado! Racha: "+cont+" aciertos");
    resultado=cont;
}else{
    cont=0;
    alert("Has fallado");
}

} while (opcion!="salir");


alert("Hasta Pronto. Cantidad de rondas seguidas de acierto = "+resultado);



