import './style.css';
import homeTab from './home.js';

const websiteSkeleton = (() => {

    const setActive = (e) => {
        const navButtons = document.querySelectorAll(".nav-button");
        navButtons.forEach(button => {
            button.classList.remove("active");
        })

        e.target.classList.add("active");
    }

    const createHeader = () => {
        function createNavigation() {
            const navigation = document.createElement("div");
            navigation.classList.add("nav");

            const homeButton = document.createElement("button");
            homeButton.classList.add("nav-button");
            homeButton.setAttribute("id", "home-button");
            homeButton.textContent = "Home";
            homeButton.addEventListener("click", (e) => {
                if (e.target.classList.contains("active")) return;
                setActive(e);
                homeTab();
            });

            const menuButton = document.createElement("button");
            menuButton.classList.add("nav-button");
            menuButton.setAttribute("id", "menu-button");
            menuButton.textContent = "Menu";

            const contactButton = document.createElement("button");
            contactButton.classList.add("nav-button");
            contactButton.setAttribute("id", "contact-button");
            contactButton.textContent = "Contact";

            navigation.appendChild(homeButton);
            navigation.appendChild(menuButton);
            navigation.appendChild(contactButton);

            return navigation;
        }

        const header = document.createElement("header");
        header.setAttribute("id", "header");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "The Garden Bistro";

        header.appendChild(title);
        header.appendChild(createNavigation());

        return header;
    }

    const createMain = () => {
        const main = document.createElement("main");
        main.setAttribute("id", "main");

        return main;
    }

    const createFooter = () => {
        const footer = document.createElement("footer");
        footer.setAttribute("id", "footer");
        
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

    return {createHeader, createMain, createFooter}
})();



function initializeWebsite() {
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    content.appendChild(websiteSkeleton.createHeader());
    content.appendChild(websiteSkeleton.createMain());
    content.appendChild(websiteSkeleton.createFooter());
}


export default initializeWebsite;