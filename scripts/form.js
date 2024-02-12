const rangevalue= document.querySelector("#rangevalue");
const range = document.querySelector("#pRating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    
    if(range.value< 2){
        rangevalue.innerHTML = range.value+ " 😞";
    }
    else if(range.value>= 2 && range.value< 4)
    {
        rangevalue.innerHTML = range.value+ " 😔";
    }
    else if(range.value>= 4 && range.value< 6)
    {
        rangevalue.innerHTML = range.value+ " 😐";
    }
    else if(range.value>= 6 && range.value< 8)
    {
        rangevalue.innerHTML = range.value+ " 🙂";  
    }
    else if(range.value>= 8)
    {
        rangevalue.innerHTML = range.value+ " 😃";  
    }
}

