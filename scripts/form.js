const rangevalue= document.querySelector("#rangevalue");
const range = document.querySelector("#pRating");

const passw1 = document.querySelector("#password");
const passw2 = document.querySelector("#password2");
const errorMsg = document.querySelector("#password-error-msg");

passw2.addEventListener('focusout', checkPassMatch)

function checkPassMatch() {
    if (passw1.value !== passw2.value) {
        passw1.value=""
        passw2.value=""
        passw1.focus()
        errorMsg.textContent = "Values do not match. Try again"
    } else {
        errorMsg.textContent=""
    }
}


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

