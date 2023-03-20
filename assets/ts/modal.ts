export class Modal {
    ref: HTMLDivElement;
    btnClose?: HTMLButtonElement;
    
    constructor(ref: HTMLDivElement) {
        this.ref = ref;
    }

    show() {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose') as HTMLButtonElement;
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }

    hide() {
        this.ref.style.display = 'none';
    }

    setTitle(text:string):void{
        this.ref.querySelector('#titleModal')!.textContent = text;
    }

    setBody(...elements:HTMLElement[]){
        this.ref.querySelector('#modalBody')!.innerHTML = '';
        elements.forEach(element => {
            this.ref.querySelector('#modalBody')!.appendChild(element);
        });
    }
}