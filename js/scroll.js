

const navbarTag = document.querySelector('nav.navbar')
const logoTag = document.querySelector('nav.navbar a.navbar-brand img')

const toggleNavbar = function() {
    const pixels = window.pageYOffset
    
    if(pixels > 200){
        navbarTag.classList.add("scrolled")
        logoTag.classList.add("scrolled")
    } else {
        navbarTag.classList.remove("scrolled")
        logoTag.classList.remove("scrolled")
    }

}

  toggleNavbar()

  document.addEventListener('scroll', function (){
    toggleNavbar() 
  })