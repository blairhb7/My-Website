

// This Code for the Menu Navigation
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')


// Nav Function to expan Nav bar
menu.onclick = function(){
    nav.classList.toggle('open')
}

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) => item.addEventListener('mouseover', activeLink))


// Fullpage function to slide landing page & contact
