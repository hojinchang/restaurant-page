const initializeWebsite = () => {
    const content = document.querySelector("#content");

    const createHeader = () => {
        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "My Restuarant";

        header.appendChild(title);

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

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};


initializeWebsite();