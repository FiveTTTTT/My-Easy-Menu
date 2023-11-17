// index.js
class MenuBurger extends HTMLElement {
    connectedCallback() {
        // Création du conteneur global
        const containerDiv = document.createElement('div');

        // Ajout des trois spans dans le conteneur global
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');

        containerDiv.appendChild(span1);
        containerDiv.appendChild(span2);
        containerDiv.appendChild(span3);

        // Ajout du conteneur global à l'élément menu-burger
        containerDiv.className = 'trigger';
        this.appendChild(containerDiv);

        // Création du conteneur ul
        const menuBurgerDiv = document.createElement('ul');
        menuBurgerDiv.className = 'menu-burger';

        const position = this.getAttribute('position') || '';

        switch (position) {
            case 'left':

                break;
            case 'right':

                break;
            default:
                break;
        }

        // Séparation des li avec la classe menu-burger-item des autres éléments
        const menuBurgerItems = Array.from(this.querySelectorAll('li.menu-burger-item'));

        // Ajout des clones des li avec la classe menu-burger-item dans le conteneur ul
        menuBurgerItems.forEach(item => menuBurgerDiv.appendChild(item.cloneNode(true)));

        // Ajout du conteneur ul à l'élément menu-burger
        this.appendChild(menuBurgerDiv);

        // Ajout d'un gestionnaire d'événements pour le clic sur l'élément avec la classe 'trigger'
        containerDiv.addEventListener('click', () => {
            menuBurgerDiv.classList.toggle('open');
        });

        // Ajout d'un gestionnaire d'événements pour le clic en dehors de l'élément
        document.addEventListener('click', (event) => {
            const isInsideMenuBurger = this.contains(event.target) || menuBurgerDiv.contains(event.target);
            if (!isInsideMenuBurger) {
                menuBurgerDiv.classList.remove('open');
            }
        });
    }
}

customElements.define('menu-burger', MenuBurger);
