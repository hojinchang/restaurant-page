import './style.css';

const initializeWebsite = () => {
    
    const createHeader = () => {
        function createNavigation() {
            const navigation = document.createElement("div");
            navigation.classList.add("nav");

            const homeButton = document.createElement("button");
            homeButton.classList.add("nav-button");
            homeButton.textContent = "Home";

            const menuButton = document.createElement("button");
            menuButton.classList.add("nav-button");
            menuButton.textContent = "Menu";

            const contactButton = document.createElement("button");
            contactButton.classList.add("nav-button");
            contactButton.textContent = "Contact";

            navigation.appendChild(homeButton);
            navigation.appendChild(menuButton);
            navigation.appendChild(contactButton);

            return navigation;
        }

        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "The Garden Bistro";

        header.appendChild(title);
        header.appendChild(createNavigation());

        return header;
    }

    const createMain = () => {
        const main = document.createElement("main");
        main.classList.add("main");

        return main;
    }

    const createFooter = () => {
        const footer = document.createElement("footer");
        footer.classList.add("footer");
        
        const profileLink = document.createElement("a");
        profileLink.href = "https://github.com/hojinchang";
        profileLink.setAttribute("target", "_blank");
        profileLink.setAttribute("rel", "noopener noreferrer");

        profileLink.textContent = "hojinchang";

        const footerText = document.createElement("p");
        footerText.textContent = "Created by ";
        footerText.appendChild(profileLink);

        footer.appendChild(footerText);

        return footer;
    }


    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

};


export default initializeWebsite;