

const animatedTags = document.querySelectorAll("h1, h2, h3, h4, h5, p, .fadein")

animatedTags.forEach(tag =>{
    tag.style.opacity = 0
    tag.style.transform = 'translateY(36px)'
  })
  
  const fadeIn = function() {
    
    let delay = 0.06
    
    animatedTags.forEach(tag =>{
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom
         
      if(tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 1s ${delay}s both`
        delay = delay + 0.06
      } else {
        tag.style.opacity = 0
        tag.style.animation = ""
      }
    })
  }
  
  fadeIn()
  
  document.addEventListener("scroll", function() {
    fadeIn()
  })
  
  window.addEventListener("resize", function() {
    fadeIn()
  })