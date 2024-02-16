const currentTemp = document.querySelector('#current-temp'); 
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ecd25cadf3f310d7fdf3c83260934125&units=imperial';


async function apiFetch() {
    try {
        const response = await fetch (url); 
        if (response.ok) {
            const data = await response.json (); 
            console.table(data); // testing only
            displayResults (data); // uncomment when ready } 
        }else {
            throw Error (await response.text());
        } 
    }catch (error) {
        console.log(error);
    }
}


function displayResults(data) { 
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    console.log(iconsrc);
    let desc = data.weather[0].icon;
    weatherIcon.setAttribute('href',iconsrc);
    // weatherIcon.setAttribute('',___); 
    captionDesc.textContent = `${desc}`;
}
apiFetch();