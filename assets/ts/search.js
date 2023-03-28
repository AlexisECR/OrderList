export class Search {
    listArticles;
    event;
    constructor(listArticles, event) {
        this.listArticles = listArticles;
        this.event = event;
    }
    searchArticle() {
        let inputText = this.getInputText();
        this.listArticles.some(article => {
            if (((article.title).toUpperCase().includes(inputText))) {
                const elementShow = document.querySelector('[data-id=\"' + article.id + '\"]');
                elementShow.style.display = "";
            }
            else {
                const elementHide = document.querySelector('[data-id=\"' + article.id + '\"]');
                elementHide.style.display = "none";
            }
        });
    }
    getInputText() {
        let text = "";
        if (this.event.target instanceof HTMLInputElement) {
            text = (this.event.target.value).toUpperCase();
        }
        return text;
    }
}
