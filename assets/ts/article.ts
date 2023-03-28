import { Modal } from './modal.js';

export class Article {
    id: number;
    title: string;
    price: number;
    stock: number;
    category: string;
    images: string[];
    description: string;
    modal: Modal;


    constructor(id:number, title: string, price: number, stock: number, category: string, images: string[], description: string, modal:Modal) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.images = images;
        this.description = description;
        this.modal = modal;
    }

    public createDivArticle(): HTMLDivElement{
        let article: HTMLDivElement = document.createElement("div");
        article.setAttribute("class", "article");
        // article.setAttribute('name', 'art');
        article.dataset.id = String(this.id);
        article.appendChild(this.createRadioButton());
        article.appendChild(this.createDivImage());
        article.appendChild(this.createArticleDescription());
        article.appendChild(this.createArticlePrice());

        const icon:HTMLDivElement = this.createIcon();
        article.appendChild(icon);
        
        icon.addEventListener('click',this.handleArticleClickEvent.bind(this))
        return article;
    }

    handleArticleClickEvent(){
        this.modal.show();
        this.modal.setInfo(this.title, this.price, this.stock, this.description);
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

        let icon: HTMLElement = document.createElement("i");
        icon.setAttribute("class", "bi bi-tag");

        let articleCategory: HTMLSpanElement = document.createElement("span");
        articleCategory.setAttribute("class", "article-category");
        articleCategory.innerText = this.category;

        articleDescription.appendChild(articleName);
        articleDescription.appendChild(icon);
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

    public createRadioButton():HTMLDivElement{
        let divRadioButton: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        divRadioButton.setAttribute('class', 'input-radio')

        let radioButtonArticle: HTMLInputElement = document.createElement('input') as HTMLInputElement;
        radioButtonArticle.setAttribute('type', 'radio');
        radioButtonArticle.setAttribute('name', 'art');

        divRadioButton.appendChild(radioButtonArticle);
        return divRadioButton;
    }

    public createIcon():HTMLDivElement{
        let divIcon: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        divIcon.setAttribute('class', 'icon-plus')

        let iconPlus: HTMLElement = document.createElement('i') as HTMLElement;
        iconPlus.setAttribute('class', 'bi bi-plus-circle-fill');

        divIcon.appendChild(iconPlus);
        return divIcon;
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