const currentTemp = document.querySelector('#current-temp'); 
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/lat=49.75134768338387&lon=6.635646868533408&appid=ecd25cadf3f310d7fdf3c83260934125';



async function apiFetch() {
    try {
        const response = await fetch (url); 
        if (response.ok) {
            const data = await response.json (); 
            console.log(data); // testing only
            // displayResults (data); // uncomment when ready } 
        }else {
            throw Error (await response.text());
        } 
    }catch (error) {
        console.log(error);
    }
}
   

apiFetch();