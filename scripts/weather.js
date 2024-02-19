const currentTemp = document.querySelector('#temp'); 
const weatherIcon = document.querySelector('#temp-icon'); 
const captionDesc = document.querySelector('#temp-description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-32.9&lon=-68.8&appid=ecd25cadf3f310d7fdf3c83260934125&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch (url); 
        if (response.ok) {
            const data = await response.json (); 
            displayResults (data); // uncomment when ready } 
			console.log(data)
        }else {
            throw Error (await response.text());
        } 
    }catch (error) {
        console.log(error);
    }   
}


function displayResults(data) { 
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc); 
    captionDesc.textContent = `${desc}`;
}
apiFetch();