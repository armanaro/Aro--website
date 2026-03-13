const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
function moveButton() {
    const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - 100));
    const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - 50));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", moveButton);

// yes button functionality

yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";

    const timeoutId = setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        gifResult.play();
    }, 3000);
});