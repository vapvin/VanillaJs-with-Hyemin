// 입력할 단어 배열
// span
// 기다리는 시간 => wait

class TypeWriter {
    constructor(txtElement, words, wait=2000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
    }

    type(){

    }
}

function init(){
    const txtElement = document.querySelector('.txt-typing');
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    
    const typeObject = new TypeWriter(txtElement, words, wait);
    typeObject.type();
}

document.addEventListener('DOMContentLoaded', init);