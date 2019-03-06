

const navbarTag = document.querySelector('nav.navbar')

const toggleNavbar = function() {
    const pixels = window.pageYOffset
    
    if(pixels > 120){
        navbarTag.classList.add("scrolled")   
    } else {
        navbarTag.classList.remove("scrolled")
    }
  }

  toggleNavbar()

  document.addEventListener('scroll', function (){
    toggleNavbar() 
  })