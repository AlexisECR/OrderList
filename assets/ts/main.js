import { products } from "./data.js";
import { Article } from "./article.js";
import { Modal } from "./modal.js";
import { Search } from "./search.js";
const listArticleRef = document.getElementById('listArticles');
const inputFilter = document.getElementById('filterArticle');
const modalRef = document.getElementById('modalContainer');
const modal = new Modal(modalRef);
const articles = products.map((product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, modal));
articles.forEach((article) => {
    listArticleRef.appendChild(article.createDivArticle());
});
inputFilter.addEventListener('keyup', (event) => {
    const search = new Search(articles, event);
    search.searchArticle();
});

