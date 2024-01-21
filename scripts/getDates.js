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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "☀️";
	} else {
		main.style.background = "#ffffff";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
	}
});