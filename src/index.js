class MenuBurger extends HTMLElement {
    connectedCallback() {

        const menuBurgerDiv = document.createElement('ul');
        menuBurgerDiv.className = 'menu-burger';
        const content = this.getAttribute('content') || '[]';
        console.log(content);
        let menusElements = JSON.parse(content);
        console.log(menusElements);
        for (let i = 0; i < menusElements.length; i++) {
            const li = document.createElement('li');
            const barLink = document.createElement('a');
            console.log(menusElements[i]);
            barLink.innerText = menusElements[i].texte;
            barLink.href = menusElements[i].url
            barLink.className = 'bar';

            barLink.style.color = "#fff";
            barLink.style.textDecoration = "none";


            li.appendChild(barLink);
            menuBurgerDiv.appendChild(li);
        }

        menuBurgerDiv.style.position = "fixed";
        menuBurgerDiv.style.top = "0";
        menuBurgerDiv.style.width = "30vw";
        menuBurgerDiv.style.height = "100vh";
        menuBurgerDiv.style.listStyle = "none";
        menuBurgerDiv.style.backgroundColor = "#373a47";
        menuBurgerDiv.style.padding = "2vh";
        menuBurgerDiv.style.display = "none";
        menuBurgerDiv.style.zIndex = "10";


        const imgBurger = document.createElement('img');
        imgBurger.src = "OIP.jpeg";
        imgBurger.onclick = function () {
            menuBurgerDiv.style.display = "block"
        }
        this.appendChild(imgBurger);
        // const menuBurgerDiv = document.createElement('div');
        // menuBurgerDiv.className = 'menu-burger';
        //
        // for (let i = 0; i < nbDiv; i++) {
        //     const barDiv = document.createElement('div');
        //     barDiv.innerText = "bruh"
        //     barDiv.className = 'bar';
        //     menuBurgerDiv.appendChild(barDiv);
        // }

        this.appendChild(menuBurgerDiv);


        // Ajouter un paragraphe sans remplacer le contenu précédent
        this.insertAdjacentHTML('beforeend', '<p>Ceci est un paragraphe ajouté.</p>');
        this.removeAttribute('content')
    }
}

customElements.define('menu-burger', MenuBurger);