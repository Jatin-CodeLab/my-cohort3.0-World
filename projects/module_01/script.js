// selectation variable part
let boxMain = document.querySelector("#boxMain");
let randomBox = document.querySelector("#taapBoxOnRandom");
let startBtn = document.querySelector("#startBtn");
let timer = document.querySelector("#timer");
let score = document.querySelector("#score");
let time = 0;
let timeTimer;

startBtn.addEventListener("click", () => {
	// Button disable kar do
	startBtn.disabled = true;
	startBtn.textContent = "Running...";

	// Timer reset
	time = 0;
	timer.textContent = `Timer : ${time}`;

timeTimer = setInterval(() => {
		time += 1;
		timer.textContent = `Timer : ${time}`;

		// Random position
		let X = Math.random() * 90;
		let Y = Math.random() * 90;

		randomBox.style.top = `${X}%`;
		randomBox.style.left = `${Y}%`;
	}, 1000);

	// 10 second baad sab band
	setTimeout(() => {
		clearInterval(timeTimer);

		startBtn.disabled = false;
		startBtn.textContent = "Start";
	}, 10000);
});
