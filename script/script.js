window.addEventListener('DOMContentLoaded', () => {

	function clock() {
		const clock = document.querySelector('.clock-number');

		const addZero = num => (num < 10) ? `0${num}` : num;
	
	 setInterval(() => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const second = date.getSeconds();
		clock.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(second)}`
	}, 1000);
};

function handlerHoverColor() {
    const iconContact = document.querySelector('.main-block-contact');
    

    iconContact.onmouseover = event => {
        event.target.classList.toggle('black_and_white')
    }



}
    handlerHoverColor();
	clock();
});