
const navToggler = document.querySelector('button.navbar-toggler')

const menuDropdown = document.querySelector('div.collapse')


navToggler.addEventListener('click', function(){
    menuDropdown.classList.toggle('active')
})







// $('.navbar-toggler').on('click',function() {
//     alert("Hello! I am an alert box!!");
//   });