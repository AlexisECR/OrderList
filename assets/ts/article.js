export class Article {
    id;
    title;
    price;
    stock;
    category;
    images;
    modal;
    constructor(id, title, price, stock, category, images, modal) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.images = images;
        this.modal = modal;
    }
    createDivArticle() {
        let article = document.createElement("div");
        article.setAttribute("class", "article");
        article.dataset.id = String(this.id);
        article.appendChild(this.createDivImage());
        article.appendChild(this.createArticleDescription());
        article.appendChild(this.createArticlePrice());
        article.addEventListener('click', this.handleArticleClickEvent.bind(this));
        return article;
    }
    handleArticleClickEvent() {
        this.modal.show();
        this.modal.setTitle(this.title);
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
        let icono = document.createElement("i");
        icono.setAttribute("class", "bi bi-tag");
        let articleCategory = document.createElement("span");
        articleCategory.setAttribute("class", "article-category");
        articleCategory.innerText = this.category;
        articleDescription.appendChild(articleName);
        articleDescription.appendChild(icono);
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
