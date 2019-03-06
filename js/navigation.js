
const navToggler = document.querySelector('button.navbar-toggler')

const menuDropdown = document.querySelector('div.collapse')

navToggler.addEventListener('click', function(){
    menuDropdown.classList.toggle('active')
})