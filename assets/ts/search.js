export class Search {
    listArticles;
    searchText;
    constructor(listArticles, searchText) {
        this.listArticles = listArticles;
        this.searchText = searchText;
    }
    searchArticle() {
        this.listArticles.forEach(article => {
            const element = document.querySelector('[data-id=\"' + article.id + '\"]');
            element.style.display = article.title.toUpperCase().includes(this.searchText) ? '' : 'none';
        });
    }
}
