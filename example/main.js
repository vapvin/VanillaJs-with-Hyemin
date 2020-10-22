const SHOW = "show";

let next;
let prev;

const scrollEffects = ele => {
    window.scrollTo({
     'behavior': 'smooth',
      'left': 0,
      'top': ele.offsetTop
});
};

const scrolls = event => {
    let tags = ['HEADER', 'SECTION', 'FOOTER'];
    console.log(event)
    const target = event.target;

    if(tags.includes(target.nodeName)){
        next = target.nextElementSibling;
        prev = target.previousElementSibling;
    }else{
        next = target.closest(tags).nextElementSibling;
        prev = target.closest(tags).previousElementSibling;
    }

    if(event.deltaY < 0){
        event.preventDefault();
        const target = event.target;
        if(tags.includes(prev.nodeName)){
            scrollEffects(prev, 300, 'easeInOutQuad');
            target.closest(tags).classList.remove(SHOW);
            prev.classList.add(SHOW)
        }
    }else if(event.deltaY > 0){
        event.preventDefault();
        const target = event.target;
        if(tags.includes(next.nodeName)){
            scrollEffects(next, 300, 'easeInOutQuad');
            target.closest(tags).classList.remove(SHOW);
            next.classList.add(SHOW)
        }
    }else{
        return false;
    }
}

document.body.addEventListener('wheel',scrolls);
