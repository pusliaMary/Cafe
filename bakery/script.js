
gsap.from('.bounceAnim', {y:10, duration:3, ease:'bounce', opacity:0})

gsap.to ('.heading', {
    text:"PEACH BAKERY",
    duration:3,
    repeat:-1,
    repeatDelay: .7,
    yoyo: true,
    scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
        end: "bottom 20%",
        },
    
       
})





gsap.to('.pic1',  {
    
            
    
    onUpdate: function () {
        
       if (window.innerWidth <500) {
            gsap.to('.pic1', {y:-20, duration:2, ease:'bounce'})
            }
        
        else if (window.innerWidth <=820) {
            gsap.to('.pic1', {x:-100, duration:3, opacity:1})
            
            }

        else if (window.innerWidth >820) {
            
            gsap.to('.pic1', {x:450, duration:3, opacity:1})
            }
        },
        
    scrollTrigger: {
        trigger: ".pic1",
        start: "top 80%",
        end: "bottom 20%",
        }
    
      
    
})

gsap.from('.pic2', {
    
    onUpdate: function () {
        
        if (window.innerWidth <500) {
            gsap.to('.pic2', {y:-20, duration:2, ease:'bounce'})
            }
        
        else if (window.innerWidth <=820) {
            gsap.to('.pic2', {x:100, duration:3, opacity:1})
            
            }

        else if (window.innerWidth >820) {
            
            gsap.to('.pic2', {x:-450, duration:3, opacity:1})
            }
        }, 
    
    scrollTrigger: {
    trigger: ".pic2",
    start: "top 80%",
    end: "bottom 20%",
     }
})



