const baseURL =  "https://gpuebla.github.io/wdd230"
const linksURL =  "https://gpuebla.github.io/wdd230/data/links.json"

async function getLinks() {
    try {
        const response = await fetch (linksURL); 
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
    console.log("test function")
}

getLinks();