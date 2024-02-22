document.addEventListener("DOMContentLoaded", function() {

    const url = 'https://gpuebla.github.io/wdd230/chamber/data/members.json';

    const memberspro = document.querySelector('#memberspro');
    const m1 = document.querySelector('#m1');
    const m2 = document.querySelector('#m2');
    const m3 = document.querySelector('#m3');

    const getMemberData = async () => {
        const response = await fetch(url)
        data = await response.json()

        displayMembersPro(data.members);
        console.table(data.members) // test
    };

    const displayMembersPro = (members) => {

        const mspro = members.filter((member) => member.membership_level === "gold" || member.membership_level === "silver");

        console.log(mspro + 'FILTER')

        const display= (member, elemetContainer) => {

            let card = document.createElement('section');
            let logo = document.createElement('img');
            let companyName = document.createElement('h2');
    
            companyName.textContent = `${member.company_name}`;
            logo.setAttribute('src', member.logo);
            logo.setAttribute('alt', `logo of ${member.company_name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '400');
    
    
            card.appendChild(logo);
            card.appendChild(companyName);             
    
            elemetContainer.appendChild(card);
        }

        display(members[0],memberspro);
        display(members[1],memberspro);
        display(members[2],memberspro);
    }
    
    getMemberData();
});
