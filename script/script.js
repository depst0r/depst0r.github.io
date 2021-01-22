const clock = document.querySelector('.clock-number');
const addZero = num => (num < 10) ? `0${num}` : num;

const clockChange = setInterval(() => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const second = date.getSeconds();
	clock.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(second)}`
}, 1000);