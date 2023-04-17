export class MoveProducts {
    refContainerButtons;
    constructor(refContainerButtons) {
        this.refContainerButtons = refContainerButtons;
    }
    moveArticle() {
        const containerArticles = document.getElementById('listArticles');
        const listArticles = containerArticles.querySelectorAll('div.article');
        const buttonFirst = this.refContainerButtons.firstElementChild;
        const buttonUp = this.refContainerButtons.children[1];
        const buttonDown = this.refContainerButtons.children[2];
        const buttonLast = this.refContainerButtons.lastElementChild;
        buttonFirst.addEventListener('click', () => {
            listArticles.forEach(article => {
                if (article.querySelector('.input-radio').firstElementChild.checked) {
                    if (article !== article.parentElement.firstElementChild) {
                        article.parentElement.insertBefore(article, article.parentElement.firstElementChild);
                    }
                }
            });
        });
        buttonLast.addEventListener('click', () => {
            listArticles.forEach(article => {
                if (article.querySelector('.input-radio').lastElementChild.checked) {
                    if (article !== article.parentElement.lastElementChild) {
                        article.parentElement.appendChild(article);
                    }
                }
            });
        });
        buttonUp.addEventListener('click', () => {
            listArticles.forEach(article => {
                if (article.querySelector('.input-radio').firstElementChild.checked) {
                    if (article !== article.parentElement.firstElementChild) {
                        containerArticles.insertBefore(article, article.previousElementSibling);
                    }
                }
            });
        });
        buttonDown.addEventListener('click', () => {
            listArticles.forEach(article => {
                if ((article.querySelector('.input-radio').lastElementChild.checked)) {
                    if (article !== article.parentElement.lastElementChild) {
                        containerArticles.insertBefore(article, article.nextElementSibling.nextElementSibling);
                    }
                }
            });
        });
    }
}
