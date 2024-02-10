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
let lastLogStored = Number(window.localStorage.getItem("lastLog")) || 0;

let daysElapsed = (currentDate - lastLogStored) / msToDays;

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
localStorage.setItem("lastLog", currentDate);
