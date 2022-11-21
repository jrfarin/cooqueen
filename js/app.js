const mainMenu = document.getElementById('mainNavList');
const listItems = mainMenu.getElementsByClassName("list-inline-item");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

let date =  new Date().getFullYear();
const year = document.querySelector('.year');
year.innerText = date;