let yearElement = document.querySelector('#year');
yearElement.innerHTML = '2024';

// Last Modification: 

let nLastModif = Date(document.lastModified);
document.querySelector('#lastModification').innerHTML = `Last Modification: ${document.lastModified}`;