/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import './style.css';
// import BackgroundImg from './background.jpg';

const initializeWebsite = () => {
    const content = document.createElement("div");
    content.id = "content";

    document.body.appendChild(content);

    const createHeader = () => {
        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "My Restuarant";

        header.appendChild(title);

        console.log(header)


        // const backgroundImg = new Image();
        // backgroundImg.src = BackgroundImg;

        // header.appendChild(backgroundImg);

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgQmFja2dyb3VuZEltZyBmcm9tICcuL2JhY2tncm91bmQuanBnJztcblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IFJlc3R1YXJhbnRcIjtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlcilcblxuXG4gICAgICAgIC8vIGNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gYmFja2dyb3VuZEltZy5zcmMgPSBCYWNrZ3JvdW5kSW1nO1xuXG4gICAgICAgIC8vIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgcHJvZmlsZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2hvamluY2hhbmdcIjtcbiAgICAgICAgcHJvZmlsZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICBwcm9maWxlTGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJub29wZW5lciBub3JlZmVycmVyXCIpO1xuXG4gICAgICAgIHByb2ZpbGVMaW5rLnRleHRDb250ZW50ID0gXCJob2ppbmNoYW5nXCI7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IFwiO1xuICAgICAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKHByb2ZpbGVMaW5rKTtcblxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn07XG5cblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=