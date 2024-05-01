(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const fireSize = 500;
    const flameSize = 100;
    const flameCount = 40;
    const fireElement = document.querySelector(".fire");

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < flameCount * 2; i++) {
      let flame = document.createElement("div");
      flame.className = "flame";
      flame.style.height = `${Math.random() * (flameSize / 2)}px`;
      flame.style.marginLeft = `${Math.random() * fireSize - fireSize / 2}px`;
      flame.style.animation = `burning ${
        Math.random() * 2000 + 1000
      }ms -3000ms infinite linear`;

      fragment.appendChild(flame);
    }

    fireElement.appendChild(fragment);
  });
})();
