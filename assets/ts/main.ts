import { products } from "./data.js";
import { Article }  from "./article.js";
import { Product } from "./producto.type.js";
import { Modal } from "./modal.js";

const listArticleRef:HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;

const modalRef: HTMLDivElement = document.getElementById('modal') as HTMLDivElement;
const modal = new Modal(modalRef);

const articles: Article[] = products.map((product:Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, modal));

articles.forEach((article: Article) => {
    listArticleRef.appendChild(article.createDivArticle());
});