import { products } from "./data.js";
import { Article } from "./article.js";
import { Product } from "./producto.type.js";
import { Modal } from "./modal.js";
import { Search } from "./search.js";
import {ProductService} from "./product.service.js";

const listArticleRef: HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
const inputFilter: HTMLInputElement = document.getElementById('filterArticle') as HTMLInputElement;
const modalRef: HTMLDivElement = document.getElementById('modalContainer') as HTMLDivElement;


const modal = new Modal(modalRef);
const product : ProductService = new ProductService(modal);
// const articles: Article[] = products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, modal));

product.getAllProducts((articles : Article[]) =>{
    articles.forEach((article: Article) => {
        listArticleRef.appendChild(article.createDivArticle());
    });
});


inputFilter.addEventListener('keydown', (event : KeyboardEvent) : void => {
    if (event.key === "Enter") {

        let text : string = (event.target as HTMLInputElement).value;

        product.getProductsTitle(text, (articles: Article[]) => {

            listArticleRef.innerHTML = " ";
            articles.forEach(article => {
                listArticleRef.appendChild(article.createDivArticle());
            });

        });

    }
});

inputFilter.addEventListener('input', () => {
    product.getAllProducts((articles : Article[]) => {
        listArticleRef.innerHTML = " ";
        articles.forEach((article: Article) => {
            listArticleRef.appendChild(article.createDivArticle());
        });
    });
});