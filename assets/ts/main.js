import { Modal } from "./modal.js";
import { ProductService } from "./product.service.js";
const listArticleRef = document.getElementById('listArticles');
const inputFilter = document.getElementById('filterArticle');
const modalRef = document.getElementById('modalContainer');
const modal = new Modal(modalRef);
const product = new ProductService(modal);
// const articles: Article[] = products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, modal));
product.getAllProducts((articles) => {
    articles.forEach((article) => {
        listArticleRef.appendChild(article.createDivArticle());
    });
});
inputFilter.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        let text = event.target.value;
        product.getProductsTitle(text, (articles) => {
            listArticleRef.innerHTML = " ";
            articles.forEach(article => {
                listArticleRef.appendChild(article.createDivArticle());
            });
        });
    }
});
inputFilter.addEventListener('input', () => {
    product.getAllProducts((articles) => {
        listArticleRef.innerHTML = " ";
        articles.forEach((article) => {
            listArticleRef.appendChild(article.createDivArticle());
        });
    });
});
