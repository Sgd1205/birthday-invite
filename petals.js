for (let i = 0; i < 30; i++) {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = "🌸";

  const size = Math.random() * 10 + 16; // Adjust for better emoji size
  petal.style.fontSize = `${size}px`;

  petal.style.position = "absolute";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.top = "-5vh"; // start slightly above view
  petal.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
  petal.style.opacity = Math.random() * 0.8 + 0.2;
  petal.style.animationDelay = Math.random() * 5 + "s";

  document.querySelector(".petals").appendChild(petal);
}
