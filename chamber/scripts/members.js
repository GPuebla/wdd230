document.addEventListener("DOMContentLoaded", function() {

    const url = 'https://gpuebla.github.io/wdd230/chamber/data/members.json';
    const cards = document.querySelector('#members-container');

    const getMemberData = async () => {
        const response = await fetch(url)
        data = await response.json()

        displayMembers(data.members);
        console.table(data.members) // test

    };


    const displayMembers = (members) => {
    
        members.forEach( member => {
    
            let card = document.createElement('section');
            card.setAttribute('class','card');
            let logo = document.createElement('img');


            let companyName = document.createElement('h2');
           
    
            let address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;
            
            let link = document.createElement('a');
            link.setAttribute('href',member.link)
            link.textContent = `${member.link}`;           
    
            companyName.textContent = `${member.company_name}`;
            logo.setAttribute('src', member.logo);
            logo.setAttribute('alt', `logo of ${member.company_name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '400');
    
    
            card.appendChild(logo);
            card.appendChild(companyName); 
            card.appendChild(address);
            card.appendChild(link);
            
    
            cards.appendChild(card);
    
        });
    }

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");


    gridbutton.addEventListener("click", () => {
        
        console.log('grid'); 
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", () => {
        
        console.log('list'); 
        display.classList.add("list");
        display.classList.remove("grid");
    });

    getMemberData();

});