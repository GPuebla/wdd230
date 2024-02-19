document.addEventListener("DOMContentLoaded", function() {
    
    const baseURL =  "https://gpuebla.github.io/wdd230"
    const linksURL =  "https://gpuebla.github.io/wdd230/data/links.json"

    const ul = document.querySelector('#weeks-content');

    async function getLinks() {
        try {
            const response = await fetch (linksURL); 
            if (response.ok) {
                const data = await response.json (); 
                displayLinks (data.weeks); // uncomment when ready } 
                console.log(data.weeks)
            }else {
                throw Error (await response.text());
            } 
        }catch (error) {
            console.log(error);
        }   
    }


    function displayLinks(weeks) { 
        weeks.forEach(week => {
            
            let weekLi = document.createElement('li');
            weekLi.textContent = `${week.week}: `

            ul.appendChild(weekLi);

                week.links.forEach((activity, index) => {
                    let aActivity = document.createElement('a');
                    aActivity.textContent = `${activity.title} `;
                    aActivity.setAttribute('href',`${activity.url} `);
                    console.log(activity.url);

                    weekLi.append(aActivity);

                    if (index < week.links.length - 1) {
                        let separator = document.createElement('span');
                        separator.textContent = "|";
                        weekLi.appendChild(separator);
                    }

                });

            


        });
    }

    getLinks();

});

