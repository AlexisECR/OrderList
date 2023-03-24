import { Article } from "./article";

export class Search {

    constructor(private listArticles: Article[], private searchText: string) {
    }

    searchArticle(){
        this.listArticles.forEach(article => {
                const element: HTMLDivElement = document.querySelector('[data-id=\"' + article.id + '\"]') as HTMLDivElement;
                element!.style.display = article.title.toUpperCase().includes(this.searchText)? 'block': 'none';
         });
    }
}