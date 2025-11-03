gsap.from('.animaBtn', {x:-200, duration:3, delay:1, ease: 'bounce'})


gsap.to('.logo', {    
    onUpdate: function () {
        
        if (window.innerWidth <400) {
            gsap.to('.logo', {x:50,  y:20, duration:2, ease:'bounce'})
            }
        
        
        else if (window.innerWidth <500) {
            gsap.to('.logo', {x:60,  y:20, duration:2, ease:'bounce'})
            }
        
        else if (window.innerWidth <821) {
            gsap.to('.logo', {x:20, y:20, duration:2, delay:2, ease:'bounce'})
            
            }

        else if (window.innerWidth <1200) {
            
            gsap.to('.logo', {x:50, y:50, duration:3, delay:1})
            }
        }   
    }
       
)

 
let move = 50;

let animation2 = gsap.to('.item', {duration:2, delay:1, y: function(i) {

    if (i%3===1) return -move;

    else return move
       
    },
    onUpdate: function () {
        if (window.innerWidth <1200) {
            animation2.pause();
            
        }
        
    }

}) 





