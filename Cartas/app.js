const start = document.querySelector("#start")

let caraCartas = ["carta2.jpg",
  "carta1.png", "carta2.jpg",
  "carta1.png", "carta2.jpg", "carta1.png", "carta2.jpg",
  "carta1.png", "carta2.jpg",
  "carta1.png", "carta2.jpg", "carta1.png"
]

let espaldaCartas = ["cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png", "cartaTapada.png"]


start.addEventListener("click", () => {
  const tablero = document.querySelector("#board")
  tablero.innerHTML = ""
  // Barajar aleatoriamente sin tocar tus arrays originales
  const deck = caraCartas.map((face, i) => ({ face, back: espaldaCartas[i] }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  for (let i = 0; i < caraCartas.length; i++) {
    let divCartas = document.createElement("div")
    divCartas.className = "card"

    const img = document.createElement("img")
    img.className = "carta"
    img.src = deck[i].back
    img.alt = Carta${i + 1}
    img.dataset.face = deck[i].face
    img.dataset.back = deck[i].back
    img.dataset.state = "back"
    divCartas.appendChild(img)
    tablero.appendChild(divCartas)

  }
  // Reset HUD y cronómetro para nueva partida (según cartas cargadas)
  totalPairs = Math.floor(caraCartas.length / 2);
  foundPairs = 0;
  moves = 0;
  document.querySelector("#moves").textContent = "0";
  document.querySelector("#pairs").textContent = 0/${totalPairs};
  resetTimer();
  document.getElementById("modal").setAttribute("hidden", "");
})

// --- Juego por click sencillo (sin MutationObserver) ---
document.addEventListener("click", (e) => {
  const img = e.target.closest("img.carta");
  if (!img) return;
  if (busy) return;                         // bloque si estamos comparando
  if (img.dataset.lock === "1") return;     // ya emparejada
  if (img.dataset.state === "face") return; // ya está boca arriba

  // Voltear visual + poner cara tras un pequeño retardo
  img.classList.add("cartaVolteada");
  setTimeout(() => {
    img.src = img.dataset.face;
    img.dataset.state = "face";
  }, 200);

  // Arrancar cronómetro al primer click real
  if (!tStart) startTimer();

  // Registrar carta abierta
  openCards.push(img);

  // Si hay dos abiertas, comparamos por RUTA (dataset.face)
  if (openCards.length === 2) {
    busy = true;
    moves++;
    document.querySelector("#moves").textContent = String(moves);

    const [a, b] = openCards;
    if (a.dataset.face === b.dataset.face) {
      // Acierto: bloquearlas
      a.dataset.lock = "1";
      b.dataset.lock = "1";
      foundPairs++;
      document.querySelector("#pairs").textContent = ${foundPairs}/${totalPairs};
      openCards = [];
      busy = false;

      // ¿Fin?
      if (foundPairs === totalPairs) {
        stopTimer();
        const timeTxt = document.querySelector("#timer").textContent;
        showWinModal(moves, timeTxt);
      }
    } else {
      // Fallo: tapar ambas tras un momento
      setTimeout(() => {
        for (const el of openCards) {
          el.classList.remove("cartaVolteada");
          el.src = el.dataset.back;
          el.dataset.state = "back";
        }
        openCards = [];
        busy = false;
      }, 700);
    }
  } else if (openCards.length > 2) {
    // Defensa por si se cuela una tercera (no debería)
    while (openCards.length > 2) {
      const extra = openCards.pop();
      extra.classList.remove("cartaVolteada");
      extra.src = extra.dataset.back;
      extra.dataset.state = "back";
    }
  }
});

// Estado mínimo de juego (simple) 
let totalPairs = 0;
let foundPairs = 0;
let openCards = [];
let busy = false;
let moves = 0;

// Cronómetro simple MM:SS 
let tStart = null;
let tInterval = null;

function startTimer() {
  tStart = Date.now();
  tInterval = setInterval(() => {
    const s = Math.floor((Date.now() - tStart) / 1000);
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    document.querySelector("#timer").textContent = ${mm}:${ss};
  }, 250);
}
function stopTimer() {
  if (tInterval) clearInterval(tInterval);
  tInterval = null;
}
function resetTimer() {
  stopTimer();
  tStart = null;
  document.querySelector("#timer").textContent = "00:00";
}

// === Modal de victoria (personalizado y sencillo) ===
function showWinModal(movesCount, timeText) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-card">
          <div class="modal-emoji">🎉</div>
          <h2 class="modal-title">¡Has ganado!</h2>
          <p class="modal-sub">Completaste el juego en</p>
          <div class="modal-stats">
            <div class="stat moves">
              <div class="label">Movimientos</div>
              <div class="value">${movesCount}</div>
            </div>
            <div class="stat time">
              <div class="label">Tiempo</div>
              <div class="value">${timeText}</div>
            </div>
          </div>
          <div class="modal-actions">
            <button id="again" class="modal-btn-primary">Jugar de nuevo</button>
            <button id="close" class="modal-btn-secondary">Cerrar</button>
          </div>
        </div>
      </div>
    `;
  modal.removeAttribute("hidden");
  // Cerrar o reiniciar
  modal.querySelector("#close").onclick = () => modal.setAttribute("hidden", "");
  modal.querySelector(".modal-overlay").onclick = (ev) => {
    if (ev.target.classList.contains("modal-overlay")) modal.setAttribute("hidden", "");
  };
  modal.querySelector("#again").onclick = () => {
    modal.setAttribute("hidden", "");
    document.getElementById("start").click();
  };
}