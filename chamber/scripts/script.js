let yearElement = document.querySelector('#year');
yearElement.innerHTML = '2024';

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
