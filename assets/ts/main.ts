import { Article } from "./article.js";
import { Modal } from "./modal.js";
import {ProductService} from "./product.service.js";
import {MoveProducts} from "./move.products.js";

const listArticleRef: HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
const inputFilter: HTMLInputElement = document.getElementById('filterArticle') as HTMLInputElement;
const modalRef: HTMLDivElement = document.getElementById('modalContainer') as HTMLDivElement;
const refContainerButtons: HTMLDivElement = document.getElementById('orderlist-buttons') as HTMLDivElement;
const modal = new Modal(modalRef);
const product : ProductService = new ProductService(modal);
const move : MoveProducts = new MoveProducts(refContainerButtons);
// const articles: Article[] = products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, modal));

product.getAllProducts((articles : Article[]) =>{
    articles.forEach((art: Article) => {
        listArticleRef.appendChild(art.createDivArticle());
    });
    move.moveArticle();
});

inputFilter.addEventListener('keyup', (event : KeyboardEvent) : void => {
    //if (event.key === "Enter") {
        let text : string = (event.target as HTMLInputElement).value;
        product.getProductsTitle(text, (articles: Article[]) => {
            listArticleRef.innerHTML = " ";
            articles.forEach(article => {
                listArticleRef.appendChild(article.createDivArticle());
            });
        });
    //}
});

inputFilter.addEventListener('input', () => {
    product.getAllProducts((articles : Article[]) => {
        listArticleRef.innerHTML = " ";
        articles.forEach((article: Article) => {
            listArticleRef.appendChild(article.createDivArticle());
        });
    });
});