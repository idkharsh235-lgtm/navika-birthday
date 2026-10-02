const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const dashboard = document.getElementById("dashboard");

const memoryButton = document.getElementById("memoryButton");
const memoryBank = document.getElementById("memoryBank");
const backButton = document.getElementById("backButton");

const stockButton = document.getElementById("stockButton");
const stockPage = document.getElementById("stockPage");
const stockBackButton = document.getElementById("stockBackButton");

const secretButton = document.getElementById("secretButton");
const secretPage = document.getElementById("secretPage");
const secretBackButton = document.getElementById("secretBackButton");

const birthdayButton = document.getElementById("birthdayButton");
const birthdayPage = document.getElementById("birthdayPage");
const birthdayBackButton = document.getElementById("birthdayBackButton");


// START
startButton.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    dashboard.style.display = "block";
});


// MEMORY BANK
memoryButton.addEventListener("click", function () {
    dashboard.style.display = "none";
    memoryBank.style.display = "block";
});

backButton.addEventListener("click", function () {
    memoryBank.style.display = "none";
    dashboard.style.display = "block";
});


// STOCK
stockButton.addEventListener("click", function () {
    dashboard.style.display = "none";
    stockPage.style.display = "block";
});

stockBackButton.addEventListener("click", function () {
    stockPage.style.display = "none";
    dashboard.style.display = "block";
});


// SECRET FILE
secretButton.addEventListener("click", function () {
    dashboard.style.display = "none";
    secretPage.style.display = "block";
});

secretBackButton.addEventListener("click", function () {
    secretPage.style.display = "none";
    dashboard.style.display = "block";
});


// BIRTHDAY
birthdayButton.addEventListener("click", function () {
    secretPage.style.display = "none";
    birthdayPage.style.display = "block";

    createConfetti();
});


// CONFETTI
function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.backgroundColor = "#00ff88";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 5000);
    }
}


// BACK FROM BIRTHDAY
birthdayBackButton.addEventListener("click", function () {
    birthdayPage.style.display = "none";
    dashboard.style.display = "block";
});