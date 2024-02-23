document.addEventListener("DOMContentLoaded", function() {


	let yearElement = document.querySelector('#year');
	yearElement.innerHTML = '2024';

	const welcMsg = document.querySelector("#welc-msg");
	const currentDate = Date.now();
	const msToDays = 84600000;

	// Last Modification: 

	let nLastModif = Date(document.lastModified);
	document.querySelector('#lastModification').innerHTML = `Last Modification: ${document.lastModified}`;

	// Navigation Menu

	const mainnav = document.querySelector('.navigation')
	const hambutton = document.querySelector('#menu');


	hambutton.addEventListener('click', () => {
		mainnav.classList.toggle('show');
		hambutton.classList.toggle('show');
	});

	// Visits
	let lastLogStored = Number(localStorage.getItem('theLastLog')) || 0;
	let totalVisitsStored = Number(localStorage.getItem('totalVisitsStored')) || 0;

	console.log("--> " + lastLogStored);
	console.log(currentDate);
	console.log(totalVisitsStored);

	let daysElapsed = 0.2 // (currentDate - lastLogStored) / msToDays;

	console.log(daysElapsed);

		if (daysElapsed !== 0 && daysElapsed< 1) {
			welcMsg.textContent = `Back so soon! Awesome!`;
		} 
		else if (daysElapsed == 0 ) {
			welcMsg.textContent = `Welcome! Let us know if you have any questions`;
		} 
		else{
			welcMsg.textContent = `You last visited ${daysElapsed.toFixed(0)} days ago `;
		}

		localStorage.setItem("daysElapsedStored", daysElapsed);
		//localStorage.setItem("theLastLog", currentDate);

});