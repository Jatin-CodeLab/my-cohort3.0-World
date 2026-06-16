// selectation variable part
let boxMain = document.querySelector("#boxMain");
let randomBox = document.querySelector("#taapBoxOnRandom");
let startBtn = document.querySelector("#startBtn");
let timer = document.querySelector("#timer");
let score = document.querySelector("#score");
let overlay = document.querySelector("#overlay");
let time = 0;
let timeTimer;
const box = document.createElement("div");
box.classList.add("taapBox");

startBtn.addEventListener("click", () => {
	boxMain.append(box); // 👈 Yahan likho
	startBtn.disabled = true;
	startBtn.textContent = "Tap circle";

	time = 0;
	timer.textContent = `Timer : ${time}`;

	timeTimer = setInterval(() => {
		let mainH = boxMain.clientHeight - box.offsetHeight;
		let mainW = boxMain.clientWidth - box.offsetWidth;
		time += 1;
		timer.textContent = `Timer : ${time}`;

		let X = Math.random() * mainH;
		let Y = Math.random() * mainW;

		box.style.top = `${X}px`;
		box.style.left = `${Y}px`;
	}, 1000);

	setTimeout(() => {
		clearInterval(timeTimer);
        overlay.style.display = "flex"
		startBtn.disabled = false;
		startBtn.textContent = "Start";
	}, 10000);
});
