import { Article } from "./article.js";
import { Product } from "./producto.type.js";
import {Modal} from "./modal";
export class ProductService {

    constructor(private modal:Modal) {
    }

    public getAllProducts (callback: (data: Article[]) => void ):void{
        const xhttp : XMLHttpRequest = new XMLHttpRequest();
        const articles: Article[] = [];

        xhttp.addEventListener("load",() =>{
            if(xhttp.readyState !== 4)return;
            if(xhttp.status >= 200 && xhttp.status < 300) {
                let json = JSON.parse(xhttp.responseText);
                articles.push(...json.products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, this.modal)));
                callback(articles);
            }
        });
        xhttp.open('GET','https://dummyjson.com/products');
        xhttp.send();
    }

    public getProductsTitle (titleProduct: string, callback: (data: Article[]) => void):void{
        const xhttp : XMLHttpRequest = new XMLHttpRequest();
        const articles: Article[] = [];

        xhttp.addEventListener("load",() =>{
            if(xhttp.readyState !== 4)return;
            if(xhttp.status >= 200 && xhttp.status < 300) {
                let json = JSON.parse(xhttp.responseText);
                articles.push(...json.products.map((product: Product) => new Article(product.id, product.title, product.price, product.stock, product.category, product.images, product.description, this.modal)));
                callback(articles);
            }
        });
        xhttp.open('GET','https://dummyjson.com/products/search?q='+titleProduct);
        xhttp.send();
    }
}