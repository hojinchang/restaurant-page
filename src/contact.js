
import { createAddress } from "./home.js";
import PhoneIcon from './images/phone_black_24dp.svg';
import LocationIcon from './images/place_black_24dp.svg';
import LocationMap from './images/location.png';

const createContact = (() => {
    const createPhoneNumber = () => {
        const phoneContainer = document.createElement("div");
        phoneContainer.classList.add("contact-content-container");
        const Icon = new Image();
        Icon.src = PhoneIcon;
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = "123-456-7890";

        phoneContainer.appendChild(Icon);
        phoneContainer.appendChild(phoneNumber);

        return phoneContainer;
    }

    const createLocation = () => {
        const addressContainer = document.createElement("div");
        addressContainer.classList.add("contact-content-container");
        const icon = new Image();
        icon.src = LocationIcon;
        const address = createAddress();

        addressContainer.appendChild(icon);
        addressContainer.appendChild(address);

        return addressContainer;
    }

    const createMap = () => {
        const mapContainer = document.createElement("div");
        mapContainer.classList.add("contact-content-container");
        const map = new Image();
        map.src = LocationMap;

        mapContainer.appendChild(map);

        return mapContainer;
    }

    const contact = () => {
        const contactTab = document.createElement("div");
        contactTab.setAttribute("id", "contact");

        contactTab.appendChild(createPhoneNumber());
        contactTab.appendChild(createLocation());
        contactTab.appendChild(createMap());

        return contactTab;
    }

    return {contact};
})();

function contactTab () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact.contact());
}

export default contactTab;