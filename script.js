const menu = document.querySelector('.list-container'), bar = document.querySelector('.fa-bars');

bar.addEventListener('click', showLink);

function showLink(){
    menu.classList.toggle('show-menu')
}

