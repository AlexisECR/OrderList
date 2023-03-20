import { products } from "./data.js";
import { Article } from "./article.js";
import { Modal } from "./modal.js";
const listArticleRef = document.getElementById('listArticles');
const modalRef = document.getElementById('modal');
const modal = new Modal(modalRef);
const articles = products.map((product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, modal));
articles.forEach((article) => {
    listArticleRef.appendChild(article.createDivArticle());
});
