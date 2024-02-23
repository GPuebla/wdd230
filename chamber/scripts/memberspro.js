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

        const mspro = members.filter((member) => member.membership_level === "Gold" || member.membership_level === "Silver");

        const indexes = []

        while (indexes.length < 3) {
            const randomN = Math.floor(Math.random() * mspro.length);

            if (!indexes.includes(randomN)) {

                indexes.push(randomN);

            }
        }

        const display= (member, elemetContainer, linkElement) => {

            let card = document.createElement('section');
            let logo = document.createElement('img');
            let companyName = document.createElement('h2');

            let link = document.createElement('a');
            link.setAttribute('href',`https://${member.link}`);
            link.textContent = `${member.company_name}`;
    
            companyName.textContent = `${member.company_name}`;
            logo.setAttribute('src', member.logo);
            logo.setAttribute('alt', `logo of ${member.company_name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '400');
    
    
            card.appendChild(logo);
            card.appendChild(companyName);             
    
            elemetContainer.appendChild(card);
            linkElement.appendChild(link);


        }

        display(mspro[indexes[0]],memberspro,m1);
        display(mspro[indexes[1]],memberspro,m2);
        display(mspro[indexes[2]],memberspro,m3);
    }
    
    getMemberData();
});
