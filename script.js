const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const btnEl = document.getElementById("btn");
const nameErrorEl = document.getElementById("nameError");
const emailErroeEl = document.getElementById("emailError");

btnEl.addEventListener('click', validate);


function validate(e){
    e.preventDefault();

    if(nameEl.value.trim()==''){
        nameEl.style.border= '2px solid red';
        nameErrorEl.style.visibility='visible';
        return false;
    }
    else if(emailEl.value.trim()==''){
        emailEl.style.border= '2px soild red';
        emailErroeEl.style.visibility= 'visible'
        return false
    }
    else{
        return true;
    }
}