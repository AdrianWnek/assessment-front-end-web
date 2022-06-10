console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully');
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

selectElement.addEventListener('change', (event) => {
	const result = document.querySelector('.result');
	result.textContent = `Form Submit $(event.target.value)`; 
});



let test = document.getElementById("test");

test.addEventListener("mouseover", function( event ) {
	alert("mouse over test!")
});