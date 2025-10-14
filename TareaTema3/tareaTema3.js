function Candidato(experiencia, tecnologias, localizacion, salario ){

    this.experiencia=experiencia
    this.tecnologias=tecnologias
    this.localizacion=localizacion
    this.salario=salario

}

function Oferta(experiencia, tecnologias, localizacion, salario){


    this.experiencia=experiencia
    this.tecnologias=tecnologias
    this.localizacion=localizacion
    this.salario=salario

}

function CandidatoAdecuado(candidato,oferta){

     if (candidato.experiencia < oferta.experiencia) return false;

  // 2️⃣ Tecnologías
  for (let tech of oferta.tecnologias) {
  if (!candidato.tecnologias.includes(tech)) return false;
}

  // 3️⃣ Localización
  for (let tech of candidato.tecnologias) {
  if (!oferta.tecnologias.includes(tech)) return false;
}
  
  if (!localizacionValida) return false;

  // 4️⃣ Salario
  if (candidato.salario > oferta.salario) return false;

  return true;

}


let expCandidato = prompt("Años de experiencia del candidato:");
let tecCandidato = prompt("Tecnologías del candidato (separadas por comas):").split(",");
let locCandidato = prompt("Localización del candidato (separadas por comas):")
let salCandidato = prompt("Salario pretendido del candidato:");

let expOferta = 0
let tecOferta = "JavaScript"
let locOferta = ["Madrid","Malaga"]
let salOferta = 24000


let candidato= new Candidato(expCandidato,tecCandidato,locCandidato,salCandidato)
let oferta=new Oferta(expOferta,tecOferta,locOferta,salOferta)

if(CandidatoAdecuado(candidato,oferta)){

    alert("El Candidato es Adecuado")
}else{

    alert("El Candidato NO es Adecuado")


}



