import { Article } from "./article";

export class Search {
    listArticles: Article[];
    event: KeyboardEvent;

    constructor(listArticles: Article[], event: KeyboardEvent) {
        this.listArticles = listArticles;
        this.event = event;
    }

    searchArticle() {
        let inputText: string = this.getInputText();
        this.listArticles.some(article => {
            if (((article.title).toUpperCase().includes(inputText))) {
                const elementShow: HTMLDivElement = document.querySelector('[data-id=\"' + article.id + '\"]') as HTMLDivElement;
                elementShow!.style.display = "";
            }
            else {
                const elementHide: HTMLDivElement = document.querySelector('[data-id=\"' + article.id + '\"]') as HTMLDivElement;
                elementHide!.style.display = "none";
            }
        });
    }

    getInputText(): string {
        let text = "";
        if (this.event.target instanceof HTMLInputElement) {
            text = (this.event.target.value).toUpperCase();
        }
        return text;
    }

}