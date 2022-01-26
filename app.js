const content = document.querySelector(".content");

//checks if the target that was clicked is valid
function validTarget(e) {
    if(e.target.classList.contains("question")){
        console.log('yep')
        return true
    }
}

//toggles the active class on selected div
function active(e) {
    if(validTarget(e)) {      
        console.log('yes')
        e.target.classList.toggle('active')
        e.target.nextElementSibling.classList.toggle('hide')
    }
}

content.addEventListener('click', active)