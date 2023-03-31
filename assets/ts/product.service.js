import { Article } from "./article.js";
export class ProductService {
    modal;
    constructor(modal) {
        this.modal = modal;
    }
    getAllProducts(callback) {
        const xhttp = new XMLHttpRequest();
        const articles = [];
        xhttp.addEventListener("load", () => {
            if (xhttp.readyState !== 4)
                return;
            if (xhttp.status >= 200 && xhttp.status < 300) {
                let json = JSON.parse(xhttp.responseText);
                articles.push(...json.products.map((product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, this.modal)));
                callback(articles);
            }
        });
        xhttp.open('GET', 'https://dummyjson.com/products');
        xhttp.send();
    }
    getProductsTitle(titleProduct, callback) {
        const xhttp = new XMLHttpRequest();
        const articles = [];
        xhttp.addEventListener("load", () => {
            if (xhttp.readyState !== 4)
                return;
            if (xhttp.status >= 200 && xhttp.status < 300) {
                let json = JSON.parse(xhttp.responseText);
                articles.push(...json.products.map((product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, this.modal)));
                callback(articles);
            }
        });
        xhttp.open('GET', 'https://dummyjson.com/products/search?q=' + titleProduct);
        xhttp.send();
    }
}
