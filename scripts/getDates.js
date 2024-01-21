let yearElement = document.querySelector('#year');
yearElement.innerHTML = '2024';

// Last Modification: 

let nLastModif = Date(document.lastModified);
document.querySelector('#lastModification').innerHTML = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');
const navbar = document.querySelector('nav');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    navbar.classList.toggle('noDisplay');
});