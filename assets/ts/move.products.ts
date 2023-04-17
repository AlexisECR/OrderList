export class MoveProducts {

    constructor(private refContainerButtons: HTMLDivElement) {
    }

    moveArticle() : void{

        const containerArticles : HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
        const listArticles : NodeListOf<HTMLDivElement> = containerArticles.querySelectorAll('div.article') as NodeListOf<HTMLDivElement>;
        const buttonFirst : HTMLButtonElement = this.refContainerButtons!.firstElementChild as HTMLButtonElement;
        const buttonUp : HTMLButtonElement  = this.refContainerButtons.children[1] as HTMLButtonElement;
        const buttonDown : HTMLButtonElement  = this.refContainerButtons.children[2] as HTMLButtonElement;
        const buttonLast : HTMLButtonElement  = this.refContainerButtons.lastElementChild as HTMLButtonElement;

        buttonFirst!.addEventListener('click',() =>{
            listArticles.forEach(article => {
                if ((article.querySelector('.input-radio')!.firstElementChild! as HTMLInputElement).checked) {
                    if(article !== article.parentElement!.firstElementChild) {
                        article.parentElement!.insertBefore(article, article.parentElement!.firstElementChild);
                    }
                }
            })
        });

        buttonLast!.addEventListener('click', () =>{
            listArticles.forEach(article => {
                if((article.querySelector('.input-radio')!.lastElementChild! as HTMLInputElement).checked) {
                    if(article !== article.parentElement!.lastElementChild){
                        article.parentElement!.appendChild(article);
                    }
                }
            })
        });

        buttonUp!.addEventListener('click', () =>{
            listArticles.forEach(article => {
                if((article.querySelector('.input-radio')!.firstElementChild! as HTMLInputElement).checked) {
                    if(article !== article.parentElement!.firstElementChild){
                        containerArticles.insertBefore(article, article.previousElementSibling);
                    }
                }
            })
        });

        buttonDown!.addEventListener('click', () =>{
            listArticles.forEach(article => {
                if(((article.querySelector('.input-radio')!.lastElementChild! as HTMLInputElement).checked)) {
                    if(article !== article.parentElement!.lastElementChild){
                        containerArticles.insertBefore(article, article.nextElementSibling!.nextElementSibling);
                    }
                }
            })
        });

    }
}