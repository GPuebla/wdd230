document.addEventListener("DOMContentLoaded", function() {

    const url = '#';
    const cards = document.querySelector('#cards');

    const getProphetData = async () => {
    const response = await fetch(url)
    data = await response.json()

    displaymembers(data.members);
    console.table(data.members) // test
    };

    const displaymembers = (members) => {

    }



    getProphetData();

});