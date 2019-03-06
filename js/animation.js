

const animatedTags = document.querySelectorAll("h1, h2, h3, p, .fadein, a.btn")

animatedTags.forEach(tag =>{
    tag.style.opacity = 0
    tag.style.transform = 'translateY(40px)'
  })
  
  const fadeIn = function() {
    
    let delay = 0.08
    
    animatedTags.forEach(tag =>{
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom
         
      if(tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 0.8s ${delay}s both`
        delay = delay + 0.08
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