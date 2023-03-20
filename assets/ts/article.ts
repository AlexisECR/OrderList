import { Modal } from './modal.js';

export class Article {
    id: number;
    title: string;
    price: number;
    stock: number;
    category: string;
    images: string[];
    modal: Modal;


    constructor(id:number, title: string, price: number, stock: number, category: string, images: string[], modal:Modal) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.images = images;
        this.modal = modal;
    }

    public createDivArticle(): HTMLDivElement{
        let article: HTMLDivElement = document.createElement("div");
        article.setAttribute("class", "article");
        article.dataset.id = String(this.id);

        article.appendChild(this.createDivImage());
        article.appendChild(this.createArticleDescription());
        article.appendChild(this.createArticlePrice());
        
        article.addEventListener('click',this.handleArticleClickEvent.bind(this))
        return article;
    }

    handleArticleClickEvent(){
        this.modal.show();
        this.modal.setTitle(this.title);
        this.modal.setBody(...this.getImagesProducts());
    }

    getImagesProducts(): HTMLImageElement[] {
        return this.images.map((image: string) => Object.assign(document.createElement('img'), {
            src: image
        }));
    }

    private createDivImage(): HTMLDivElement{
        const articleImage: HTMLDivElement = document.createElement("div");
        articleImage.setAttribute("class", "article-image");

        const image: HTMLImageElement = document.createElement("img");
        image.setAttribute("src", this.images[0]);

        articleImage.appendChild(image);
        return articleImage;
    }

    private createArticleDescription(): HTMLDivElement{
        let articleDescription: HTMLDivElement = document.createElement("div");
        articleDescription.setAttribute("class", "article-description");

        let articleName: HTMLSpanElement = document.createElement("span");
        articleName.setAttribute("class", "article-name");
        articleName.innerText = this.title;

        let icono: HTMLElement = document.createElement("i");
        icono.setAttribute("class", "bi bi-tag");

        let articleCategory: HTMLSpanElement = document.createElement("span");
        articleCategory.setAttribute("class", "article-category");
        articleCategory.innerText = this.category;

        articleDescription.appendChild(articleName);
        articleDescription.appendChild(icono);
        articleDescription.appendChild(articleCategory);

        return articleDescription;
    }

    public createArticlePrice(): HTMLDivElement {
        let articlePrice: HTMLDivElement = document.createElement('div');
        articlePrice.setAttribute('class', 'article-price');

        let priceBadge: HTMLSpanElement = document.createElement('span');
        priceBadge.setAttribute('class', 'price-badge');
        priceBadge.innerText = '$' + this.price;

        let stock: HTMLSpanElement = document.createElement('span');
        let [klass,text] = this.getTypeStock(this.stock, stock);
        stock.setAttribute('class',klass);
        stock.innerText = text;

        articlePrice.appendChild(priceBadge);
        articlePrice.appendChild(stock);
        return articlePrice;
    }

    private getTypeStock(amountStock: number, stock: HTMLSpanElement): [string,string]  {
        if (amountStock >= 50) {
            return ['instock','INSTOCK'];
        } else if (amountStock < 50 && amountStock > 0) {
            return ['lowstock','LOWSTOCK'];
        } else {
            return ['outofstock','OUTOFSTOCK']
        }
    }
}