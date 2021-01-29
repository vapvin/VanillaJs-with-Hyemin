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
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if(this.isDeleting){ // 삭제일 경우
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else { // 입력중일경우
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300; // 0.3s

        if(this.isDeleting){
            typeSpeed /= 2; // 0.15s
        }

        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait; // 2초를 기다리고
            this.isDeleting = true; // 삭제를 시작
        } else if(this.isDeleting && this.txt === ""){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
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

