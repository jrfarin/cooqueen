//MENU CLASS ACTIVE
const mainMenu = document.getElementById('mainNavList');
const listItems = mainMenu.getElementsByClassName("list-inline-item");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// TOGGLE VIEW PASSWORD
const loginPassword = document.querySelector('#loginPassword');
const iconPw = document.querySelector('.input-group-text > i')

 function togglePw() {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text'
        iconPw.classList.toggle('bi-eye-slash')
    } else {
        loginPassword.type = 'password'
        iconPw.classList.toggle('bi-eye-slash')
    }
}

iconPw.addEventListener('click', togglePw);



// DATE
let date =  new Date().getFullYear();
const year = document.querySelector('.year');
year.innerText = date;

