const form = document.querySelector('#my-form');
const nameInput = document.querySelector('input#first-name');
form.addEventListener('submit', (event)=> {
	event.preventDefault();
	const nameInputValue = nameInput.value;
	//hacer algo con el valor obtenido del input 
})