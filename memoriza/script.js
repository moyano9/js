let carta1 = document.querySelector("#cart1");
let carta2 = document.querySelector("#cart2");
let carta3 = document.querySelector("#cart3");
let carta4 = document.querySelector("#cart4");
let carta5 = document.querySelector("#cart5");
let carta6 = document.querySelector("#cart6");
let carta7 = document.querySelector("#cart7");
let carta8 = document.querySelector("#cart8");
let carta9 = document.querySelector("#cart9");
let carta10 = document.querySelector("#cart10");
let carta11 = document.querySelector("#cart11");
let carta12 = document.querySelector("#cart12");

primeraCarta = null;

marcador = 0;
carta1.addEventListener("click", () => {
  carta1.src = "assets/face_01.png";
  if (primeraCarta === null) {
    primeraCarta = carta1;
  } else if (primeraCarta === carta7) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta1.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta2.addEventListener("click", () => {
  carta2.src = "assets/face_02.png";
  if (primeraCarta === null) {
    primeraCarta = carta2;
  } else if (primeraCarta === carta8) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta2.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta3.addEventListener("click", () => {
  carta3.src = "assets/face_03.png";
  if (primeraCarta === null) {
    primeraCarta = carta3;
  } else if (primeraCarta === carta9) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta3.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta4.addEventListener("click", () => {
  carta4.src = "assets/face_04.png";
  if (primeraCarta === null) {
    primeraCarta = carta4;
  } else if (primeraCarta === carta10) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta4.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta5.addEventListener("click", () => {
  carta5.src = "assets/face_05.png";
  if (primeraCarta === null) {
    primeraCarta = carta5;
  } else if (primeraCarta === carta11) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta5.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta6.addEventListener("click", () => {
  carta6.src = "assets/face_06.png";
  if (primeraCarta === null) {
    primeraCarta = carta6;
  } else if (primeraCarta === carta12) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta6.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta7.addEventListener("click", () => {
  carta7.src = "assets/face_01.png";
  if (primeraCarta === null) {
    primeraCarta = carta7;
  } else if (primeraCarta === carta1) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta7.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta8.addEventListener("click", () => {
  carta8.src = "assets/face_02.png";
  if (primeraCarta === null) {
    primeraCarta = carta8;
  } else if (primeraCarta === carta2) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta8.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta9.addEventListener("click", () => {
  carta9.src = "assets/face_03.png";
  if (primeraCarta === null) {
    primeraCarta = carta9;
  } else if (primeraCarta === carta3) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta9.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta10.addEventListener("click", () => {
  carta10.src = "assets/face_04.png";
  if (primeraCarta === null) {
    primeraCarta = carta10;
  } else if (primeraCarta === carta4) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta10.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta11.addEventListener("click", () => {
  carta11.src = "assets/face_05.png";
  if (primeraCarta === null) {
    primeraCarta = carta11;
  } else if (primeraCarta === carta5) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta11.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});

carta12.addEventListener("click", () => {
  carta12.src = "assets/face_06.png";
  if (primeraCarta === null) {
    primeraCarta = carta12;
  } else if (primeraCarta === carta6) {
    marcador++;
    primeraCarta = null;
  } else {
    setTimeout(() => {
      primeraCarta.src = "assets/back.png";
      carta12.src = "assets/back.png";
      primeraCarta = null;
    }, 2000);
  }

  if (marcador === 6) {
    alert("has ganado");
  }
});
