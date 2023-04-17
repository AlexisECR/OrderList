export class Article {
    price;
    stock;
    category;
    images;
    description;
    modal;
    id;
    title;
    constructor(id, title, price, stock, category, images, description, modal) {
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.images = images;
        this.description = description;
        this.modal = modal;
        this.id = id;
        this.title = title;
    }
    createDivArticle() {
        let article = document.createElement("div");
        article.setAttribute("class", "article");
        // article.setAttribute('name', 'art');
        article.dataset.id = String(this.id);
        article.appendChild(this.createRadioButton());
        article.appendChild(this.createDivImage());
        article.appendChild(this.createArticleDescription());
        article.appendChild(this.createArticlePrice());
        const icon = this.createIcon();
        article.appendChild(icon);
        article.addEventListener('click', (e) => {
            const radio = e.currentTarget.children[0].firstElementChild;
            if (!radio.checked) {
                radio.checked = true;
            }
        });
        icon.addEventListener('click', this.handleArticleClickEvent.bind(this));
        return article;
    }
    handleArticleClickEvent() {
        this.modal.show();
        this.modal.setInfo(this.title, this.price, this.stock, this.description);
        this.modal.setBody(...this.getImagesProducts());
    }
    getImagesProducts() {
        return this.images.map((image) => Object.assign(document.createElement('img'), {
            src: image
        }));
    }
    createDivImage() {
        const articleImage = document.createElement("div");
        articleImage.setAttribute("class", "article-image");
        const image = document.createElement("img");
        image.setAttribute("src", this.images[0]);
        articleImage.appendChild(image);
        return articleImage;
    }
    createArticleDescription() {
        let articleDescription = document.createElement("div");
        articleDescription.setAttribute("class", "article-description");
        let articleName = document.createElement("span");
        articleName.setAttribute("class", "article-name");
        articleName.innerText = this.title;
        let icon = document.createElement("i");
        icon.setAttribute("class", "bi bi-tag");
        let articleCategory = document.createElement("span");
        articleCategory.setAttribute("class", "article-category");
        articleCategory.innerText = this.category;
        articleDescription.appendChild(articleName);
        articleDescription.appendChild(icon);
        articleDescription.appendChild(articleCategory);
        return articleDescription;
    }
    createArticlePrice() {
        let articlePrice = document.createElement('div');
        articlePrice.setAttribute('class', 'article-price');
        let priceBadge = document.createElement('span');
        priceBadge.setAttribute('class', 'price-badge');
        priceBadge.innerText = '$' + this.price;
        let stock = document.createElement('span');
        let [klass, text] = this.getTypeStock(this.stock, stock);
        stock.setAttribute('class', klass);
        stock.innerText = text;
        articlePrice.appendChild(priceBadge);
        articlePrice.appendChild(stock);
        return articlePrice;
    }
    createRadioButton() {
        let divRadioButton = document.createElement('div');
        divRadioButton.setAttribute('class', 'input-radio');
        divRadioButton.setAttribute('id', 'inputRadio');
        let radioButtonArticle = document.createElement('input');
        radioButtonArticle.setAttribute('type', 'radio');
        radioButtonArticle.setAttribute('name', 'art');
        divRadioButton.appendChild(radioButtonArticle);
        return divRadioButton;
    }
    createIcon() {
        let divIcon = document.createElement('div');
        divIcon.setAttribute('class', 'icon-plus');
        let iconPlus = document.createElement('i');
        iconPlus.setAttribute('class', 'bi bi-plus-circle-fill');
        divIcon.appendChild(iconPlus);
        return divIcon;
    }
    getTypeStock(amountStock, stock) {
        if (amountStock >= 50) {
            return ['instock', 'INSTOCK'];
        }
        else if (amountStock < 50 && amountStock > 0) {
            return ['lowstock', 'LOWSTOCK'];
        }
        else {
            return ['outofstock', 'OUTOFSTOCK'];
        }
    }
}
