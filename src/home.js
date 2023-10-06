const createHome = (() => {
    const createRestaurantDescription = () => {
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("home-content-container", "home-description");

        const descriptionHeader = document.createElement("h3");
        descriptionHeader.classList.add("home-header")
        descriptionHeader.textContent = "The Garden Bistro";

        const description = document.createElement("p");
        description.textContent = "The Garden Bistro is a charming, rustic restaurant nestled in the heart of a picturesque countryside. \
        It offers a unique dining experience surrounded by lush greenery, blooming flowers, and the soothing sounds of nature. \
        The restaurant is designed to be an oasis of tranquility, where guests can escape the hustle and bustle of the city and \
        savor delicious dishes made from locally-sourced, fresh ingredients.";

        descriptionContainer.appendChild(descriptionHeader);
        descriptionContainer.appendChild(description);

        return descriptionContainer;
    }

    const createRestaurantHours = () => {
        const hoursContainer = document.createElement("div");
        hoursContainer.classList.add("home-content-container", "home-hours");

        const hoursHeader = document.createElement("h3");
        hoursHeader.classList.add("home-header");
        hoursHeader.textContent = "Hours"

        const hours = document.createElement("ul");
        hours.classList.add("hours")

        const days = ["Sunday: 10am - 3pm / 5pm - 8pm",
                    "Monday: 10am - 3pm / 5pm - 9pm",
                    "Tuesday: Closed", 
                    "Wednesday: 10am - 3pm / 5pm - 9pm",
                    "Thursday: 10am - 3pm / 5pm - 9pm",
                    "Friday: 10am - 3pm / 5pm - 10pm",
                    "Saturday: 10am - 3pm / 5pm - 10pm"]

        for (let day of days) {
            const entry = document.createElement("li");
            entry.textContent = day;
            hours.appendChild(entry);
        }
        
        hoursContainer.appendChild(hoursHeader);
        hoursContainer.appendChild(hours);

        return hoursContainer;
    }

    const createLocation = () => {
        const locationContainer = document.createElement("div");
        locationContainer.classList.add("home-content-container", "home-location");

        const locationHeader = document.createElement("h3");
        locationHeader.classList.add("home-header");
        locationHeader.textContent = "Location";

        const location = document.createElement("p");
        location.textContent = "777 Pacific Blvd"
        const lineBreak = document.createElement("br");
        location.appendChild(lineBreak);
        const locationCity = document.createTextNode("Vancouver, BC V6B 4Y8")
        location.appendChild(locationCity);

        locationContainer.appendChild(locationHeader);
        locationContainer.appendChild(location);

        return locationContainer;
    }

    const home = () => {
        const homeTab = document.createElement("div");
        homeTab.setAttribute("id", "home");

        homeTab.appendChild(createRestaurantDescription());
        homeTab.appendChild(createRestaurantHours());
        homeTab.appendChild(createLocation());

        return homeTab;
    }


    return {home};
})();

function homeTab () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome.home());
}

export default homeTab;