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
            let logo = document.createElement('img');


            let companyName = document.createElement('h2');
           
    
            let address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;
            
            let link = document.createElement('p');
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

    getMemberData();

});