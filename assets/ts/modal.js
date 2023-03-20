export class Modal {
    ref;
    btnClose;
    constructor(ref) {
        this.ref = ref;
    }
    show() {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose');
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }
    hide() {
        this.ref.style.display = 'none';
    }
    setTitle(text) {
        this.ref.querySelector('#titleModal').textContent = text;
    }
    setBody(...elements) {
        this.ref.querySelector('#modalBody').innerHTML = '';
        elements.forEach(element => {
            this.ref.querySelector('#modalBody').appendChild(element);
        });
    }
}
