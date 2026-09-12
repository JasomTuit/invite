const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Cya on Sunday 😘";
});

noBtn.addEventListener("mouseover", () => {
  const yesRect = yesBtn.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  let randomX, randomY;
  let overlaps = true;

  while (overlaps) {
    randomX = Math.floor(Math.random() * (window.innerWidth - noRect.width));
    randomY = Math.floor(Math.random() * (window.innerHeight - noRect.height));

    const overlapsX = randomX < yesRect.right && randomX + noRect.width > yesRect.left;
    const overlapsY = randomY < yesRect.bottom && randomY + noRect.height > yesRect.top;

    overlaps = overlapsX && overlapsY;
  }

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});