let score = 0;

// START PAGE LOGIC
const startBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const startContainer = document.getElementById("startContainer");

startBtn.addEventListener("click", () => {
  startContainer.style.display = "none";
  gameContainer.style.display = "block";
});

// GAME LOGIC
const ball = document.getElementById("ball");
const btn = document.getElementById("shootBtn");
const scoreText = document.getElementById("score");
const msg = document.getElementById("message");

// LETTER LOGIC
const letterContainer = document.getElementById("letterContainer");
const closeLetter = document.getElementById("closeLetter");

closeLetter.addEventListener("click", () => {
  letterContainer.style.display = "none";
});

btn.addEventListener("click", shoot);

function shoot() {
  const hit = Math.random() > 0.3;

  ball.style.bottom = "190px";

  setTimeout(() => {
    if (hit) {
      score++;
      msg.innerHTML = "💗 Perfect shot!";
    } else {
      msg.innerHTML = "💔 Missed! Try again!";
    }

    scoreText.innerHTML = "Score: " + score;

    ball.style.bottom = "15px";

    if (score === 5) {
      win();
    }
  }, 800);
}

function win() {
  msg.innerHTML = `
  💕 You won my heart 💕 <br>
  <button id="openLetter">Open My Letter ✉️</button>
  `;

  btn.disabled = true;

  document.getElementById("openLetter").addEventListener("click", () => {
    letterContainer.style.display = "block";
  });
}

// HEART ANIMATIONS
createHearts();

function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 400);
}
