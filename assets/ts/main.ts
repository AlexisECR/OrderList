import { products } from "./data.js";
import { Article } from "./article.js";
import { Product } from "./producto.type.js";
import { Modal } from "./modal.js";
import { Search } from "./search.js";

const listArticleRef: HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
const inputFilter: HTMLInputElement = document.getElementById('filterArticle') as HTMLInputElement;

const modalRef: HTMLDivElement = document.getElementById('modalContainer') as HTMLDivElement;
const modal = new Modal(modalRef);

const articles: Article[] = products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, modal));

articles.forEach((article: Article) => {
    listArticleRef.appendChild(article.createDivArticle());
});

inputFilter.addEventListener('keyup', (event) => {
    const search = new Search(articles, event);
    search.searchArticle();
})