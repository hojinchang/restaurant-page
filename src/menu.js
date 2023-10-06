const createMenu = (() => {
    const createHeader = (className, headerText) => {
        const starterHeader = document.createElement("h3");
        starterHeader.classList.add(className);
        starterHeader.textContent = headerText;

        return starterHeader;
    }
    
    const createItem = (name, description, price) => {
        const item = document.createElement("div");
        item.classList.add("item")
        const itemText = document.createElement("div");
        itemText.classList.add("item-text");

        const itemName = document.createElement("h4");
        itemName.textContent = name;
        itemName.classList.add("item-name");
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = description;
        
        const itemPrice = document.createElement("h4");
        itemPrice.textContent = price;

        itemText.appendChild(itemName);
        itemText.appendChild(itemDescription);

        item.appendChild(itemText);
        item.appendChild(itemPrice);

        return item
    }

    const createStarters = () => {
        const starterContainer = document.createElement("div");
        starterContainer.classList.add("menu-content-container");
   
        starterContainer.appendChild(
            createHeader(
                "menu-header", 
                "Starters"
            )
        );
        starterContainer.appendChild(
            createItem(
                "Garden Salad Delight", 
                "A colorful medley of mixed greens, heirloom tomatoes, \
                roasted beets, and goat cheese drizzled with a balsamic vinaigrette.",
                "$13"
            )
        );
        starterContainer.appendChild(
            createItem(
                "Wild Mushroom Bruschetta", 
                "Sautéed wild mushrooms on toasted artisanal bread with garlic, \
                fresh herbs, and a balsamic reduction.",
                "$14"
            )
        );
        starterContainer.appendChild(
            createItem(
                "Harvest Stuffed Peppers", 
                "Sweet bell peppers filled with a quinoa and roasted vegetable \
                medley, baked to perfection and topped with a zesty tomato sauce.",
                "$15"
            )
        );

        return starterContainer;
    }

    const createMains = () => {
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("menu-content-container");

        mainContainer.appendChild(
            createHeader(
                "menu-header",
                "Mains"
            )
        )
        mainContainer.appendChild(
            createItem(
                "Herb-Crusted Salmon",
                "Fresh Atlantic salmon fillet coated in a blend of fresh herbs \
                and breadcrumbs, served with lemon herb butter sauce, and \
                roasted seasonal vegetables.",
                "$28"
            )
        )
        mainContainer.appendChild(
            createItem(
                "Farmhouse Ratatouille",
                "A hearty vegan dish with slow-cooked ratatouille, served \
                with garlic-infused couscous and a drizzle of basil pesto.",
                "$26"
            )
        )
        mainContainer.appendChild(
            createItem(
                "Savory Portobello Stack",
                "Grilled Portobello mushrooms layered with spinach, \
                roasted red pepper, and mozzarella cheese, served with a \
                balsamic reduction and quinoa pilaf.",
                "$24"
            )
        )

        return mainContainer;
    }

    const createDesserts = () => {
        const dessertContainer = document.createElement("div");
        dessertContainer.classList.add("menu-content-container");
        
        dessertContainer.appendChild(
            createHeader(
                "menu-header",
                "Desserts"
            )
        )
        dessertContainer.appendChild(
            createItem(
                "Summer Berry Tart",
                "A flaky, buttery pastry shell filled with a luscious vanilla \
                custard and topped with a medley of fresh summer berries, \
                including strawberries, blueberries, and raspberries.",
                "$14"
            )
        )
        dessertContainer.appendChild(
            createItem(
                "Chocolate Decadence Cake",
                "A sinfully rich and moist chocolate cake, layered with velvety \
                dark chocolate ganache, and served with a scoop of house-made \
                vanilla bean ice cream.",
                "$16"
            )
        )
        dessertContainer.appendChild(
            createItem(
                "Lemon Lavender Panna Cotta",
                "Creamy lemon-infused panna cotta with a delicate hint of lavender, \
                served in a glass jar with a layer of lemon curd and garnished \
                with candied lemon zest.",
                "$13"
            )
        )

        return dessertContainer;
    }

    const createBeverages = () => {
        const beverageContainer = document.createElement("div");
        beverageContainer.classList.add("menu-content-container");

        beverageContainer.appendChild(
            createHeader(
                "menu-header",
                "Beverages"
            )
        )
        beverageContainer.appendChild(
            createItem(
                "Blossom Breeze",
                "A refreshing blend of hibiscus and elderflower, served over ice.",
                "$8"
            )
        )
        beverageContainer.appendChild(
            createItem(
                "Orchard Elixir",
                "A mix of apple, pear, and ginger juices, topped with sparkling water.",
                "$8"
            )
        )
        beverageContainer.appendChild(
            createItem(
                "Herbal Infusion",
                "A soothing herbal tea with a blend of lavender, chamomile, and mint.",
                "$8"
            )
        )

        return beverageContainer;
    }


    const menu = () => {
        const menuTab = document.createElement("div");
        menuTab.setAttribute("id", "menu");

        menuTab.appendChild(createStarters());
        menuTab.appendChild(createMains());
        menuTab.appendChild(createDesserts());
        menuTab.appendChild(createBeverages());

        return menuTab;
    }

    return {menu}
    
})();


function menuTab () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu.menu());
}

export default menuTab;