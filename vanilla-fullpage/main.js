const SHOW = 'show'
let next;
let prev;
const scrollEffects = element => {  
    window.scrollTo({
      'left': 0,
      'top': element.offsetTop,

    });
  };
  const scrolling = event => {
    let tags = ['HEADER', 'SECTION', 'FOOTER'];

    const {target} = event;
    
    if(tags.includes(target.nodeName)){
       
        next = target.nextElementSibling;
        prev = target.previousElementSibling;
    } else {
        next = target.closest(tags).nextElementSibling;
        prev = target.closest(tags).previousElementSibling;
    }


    if(event.deltaY < 0){
        event.preventDefault()
        const {target} = event;
        if(tags.includes(prev.nodeName)){
            scrollEffects(prev, 1800, 'easeInOutQuad');
            target.closest(tags).classList.remove(SHOW);
            prev.classList.add(SHOW);
        }
        
    } else if(event.deltaY > 0){
        event.preventDefault();
        const {target} = event;
        if(tags.includes(next.nodeName)){
            scrollEffects(next, 1800, 'easeInOutQuad');
            target.closest(tags).classList.remove(SHOW);
            next.classList.add(SHOW);
        }
    }else{
        return false;
    }
} 
document.body.addEventListener('wheel', scrolling);

