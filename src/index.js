// index.js
class MenuBurger extends HTMLElement {
    createStyle() {
        const style = document.createElement('style');
        style.type = 'text/css';
        let menuBurgerStyle = '.menu-burger {';
        let triggerStyle = '.trigger {';
        let menuBurgerLinkStyle = '.menu-burger a {';
        style.textContent = '';
    
        // Positionnement du menu
        const position = this.getAttribute('position') || '';
        switch (position) {
            case 'left':
                menuBurgerStyle = menuBurgerStyle + 'top: 0; ';
                break;
            case 'right':
                menuBurgerStyle = menuBurgerStyle + 'right: 0; top: 0; ';
                triggerStyle = triggerStyle + 'align-items: flex-end;';

            break;
            case 'top':
                menuBurgerStyle = menuBurgerStyle + 'top: 0; ';
            break;
            case 'bottom':
                menuBurgerStyle = menuBurgerStyle + 'bottom: 0;';

            break;
            case 'full':
                menuBurgerStyle = menuBurgerStyle + 'top: 0; ' ;
            default:
            
            break;
        }


        // Couleur du texte
        const colorTxt = this.getAttribute('colorText') || '';
        if (colorTxt.length > 0) {
            menuBurgerLinkStyle = menuBurgerLinkStyle + 'color: ' + colorTxt + ';'
        }
        // Couleur du background
        const colorBg = this.getAttribute('colorBg') || '';
        if (colorBg.length > 0) {
            menuBurgerStyle = menuBurgerStyle + 'background-color: ' + colorBg + ';'
        }

        menuBurgerStyle += '}';
        
    triggerStyle += '}';
        menuBurgerLinkStyle += '}';


        style.textContent += menuBurgerStyle + triggerStyle + menuBurgerLinkStyle + '}';
        document.body.appendChild(style);
    }

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
    
    // Ajout de la classe directement à l'élément menu-burger
    const positionSelector = this.getAttribute("position");
    menuBurgerDiv.classList.add("menu-burger", positionSelector);
    
    // Séparation des li avec la classe menu-burger-item des autres éléments
    const menuBurgerItems = Array.from(this.querySelectorAll('li.menu-burger-item'));
    
    // Ajout des clones des li avec la classe menu-burger-item dans le conteneur ul
    menuBurgerItems.forEach(item => menuBurgerDiv.appendChild(item.cloneNode(true)));
    
    // Création de la div autour du ul
    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.classList.add('menu-container');
    menuContainerDiv.appendChild(menuBurgerDiv);
    
    // Ajout du conteneur div à l'élément menu-burger
    this.appendChild(menuContainerDiv);
    
    // Création du déclencheur pour fermer le menu
    const closeTrigger = document.createElement('div');
    closeTrigger.className = 'close-trigger';
    this.appendChild(closeTrigger);
    
    this.createStyle();
    
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
    
    // Ajout d'un gestionnaire d'événements pour le clic sur le déclencheur de fermeture
    closeTrigger.addEventListener('click', () => {
        menuBurgerDiv.classList.remove('open');
    });
} 

}

customElements.define('menu-burger', MenuBurger);
