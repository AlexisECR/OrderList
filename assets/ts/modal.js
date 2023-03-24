export class Modal {
    ref;
    btnClose;
    constructor(ref) {
        this.ref = ref;
    }
    show() {
        this.ref.style.display = 'flex';
        this.btnClose = this.ref.querySelector('#btnClose');
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }
    hide() {
        this.ref.style.display = 'none';
    }
    setInfo(title, price, stock, description) {
        this.ref.querySelector('.titleModal').textContent = title;
        this.ref.querySelector('#modalDescription').innerHTML = "Description: <br>" + description;
        this.ref.querySelector('#modalPrice').textContent = "Price: $" + price;
        // this.ref.querySelector('#modalStock')!.textContent = "Stock: "+stock;
    }
    setBody(...elements) {
        this.ref.querySelector('.modal-image').innerHTML = '';
        elements.forEach(element => {
            const slidesImage = document.createElement('div');
            slidesImage.setAttribute('class', 'slides-img');
            slidesImage.appendChild(element);
            this.ref.querySelector('.modal-image').appendChild(slidesImage);
        });
    }
}
