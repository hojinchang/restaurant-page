/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Dancing_Script/static/DancingScript-Regular.ttf */ "./src/fonts/Dancing_Script/static/DancingScript-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Fragment_Mono/FragmentMono-Regular.ttf */ "./src/fonts/Fragment_Mono/FragmentMono-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Dancing Script';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'); 
    font-weight: normal;
    font-style: normal;
}

@font-face {
font-family: 'Fragment Mono';
src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
font-weight: normal;
font-style: normal;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --title-font: "Dancing Script", cursive;
    --content-font: 'Fragment Mono', monospace;
    --content-background-colour: rgba(0, 0, 0, 0.8);
    --main-margin: 3rem;
    --max-container-width: 50rem;
    --container-border-radius: 10px;
    --container-padding: 3rem;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-attachment: fixed;
    background-size: cover;

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

ul {
    list-style: none;
}

#header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--content-background-colour);
    padding: 2rem;
    font-family: var(--title-font);
    font-size: 2.2rem;
}

.title {
    margin-bottom: 1rem;
}

.nav-button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0.8rem 1rem;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: white;
    transition: transform 0.3s ease;
}

.nav-button:hover {
    transform: translateY(-0.5rem);
}

.nav-button.active {
    text-decoration: underline;
    text-underline-offset: 1em;
}

.home-content-container {
    text-align: center;
}

.home-content-container:first-child {
    margin-top: var(--main-margin);
}
.home-content-container:nth-child(2) {
    margin: 2rem auto;
}
.home-content-container:last-child {
    margin-bottom: var(--main-margin);
}

.home-header {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.hours {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#menu {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.menu-header {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.item:last-child {
    margin-bottom: 0;
}

.item-text {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    gap: 0.5rem;
}

.item-description {
    color: rgba(255, 255, 255, 0.7);
}


#contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.icon {
    fill: #FFFFFF;
    width: 1.5rem;
}

.contact-content-container {
    display: flex;
    gap: 1rem;
}

.contact-content-container:nth-child(2) {
    margin: 2rem 0;
}

.contact-content-container:last-child {
    justify-content: center;
}

.home-content-container,
#menu,
#contact {
    background: var(--content-background-colour);
    max-width: var(--max-container-width);
    margin: var(--main-margin) auto;
    border-radius: var(--container-border-radius);
    font-family: var(--content-font);
    padding: var(--container-padding);
}

#footer {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--content-background-colour);
    height: 30px;
    margin-top: auto;

    font-family: var(--content-font);
}

a {
    text-decoration: none;
    font-weight: bold;
    color: white;
}

a:hover {
    text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,4DAAiF;IACjF,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;AACA,4BAA4B;AAC5B,4DAAwE;AACxE,mBAAmB;AACnB,kBAAkB;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,uCAAuC;IACvC,0CAA0C;IAC1C,+CAA+C;IAC/C,mBAAmB;IACnB,4BAA4B;IAC5B,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,yDAAgD;IAChD,4BAA4B;IAC5B,sBAAsB;;IAEtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,WAAW;AACf;;AAEA;IACI,+BAA+B;AACnC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;;IAGI,4CAA4C;IAC5C,qCAAqC;IACrC,+BAA+B;IAC/B,6CAA6C;IAC7C,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4CAA4C;IAC5C,YAAY;IACZ,gBAAgB;;IAEhB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["@font-face {\n    font-family: 'Dancing Script';\n    src: url('fonts/Dancing_Script/static/DancingScript-Regular.ttf') format('woff2'); \n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\nfont-family: 'Fragment Mono';\nsrc: url('fonts/Fragment_Mono/FragmentMono-Regular.ttf') format('woff2');\nfont-weight: normal;\nfont-style: normal;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --title-font: \"Dancing Script\", cursive;\n    --content-font: 'Fragment Mono', monospace;\n    --content-background-colour: rgba(0, 0, 0, 0.8);\n    --main-margin: 3rem;\n    --max-container-width: 50rem;\n    --container-border-radius: 10px;\n    --container-padding: 3rem;\n}\n\nbody {\n    background-image: url(\"./images/background.jpg\");\n    background-attachment: fixed;\n    background-size: cover;\n\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white;\n}\n\nul {\n    list-style: none;\n}\n\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: var(--content-background-colour);\n    padding: 2rem;\n    font-family: var(--title-font);\n    font-size: 2.2rem;\n}\n\n.title {\n    margin-bottom: 1rem;\n}\n\n.nav-button {\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0.8rem 1rem;\n    margin: 0 1rem;\n    font-size: 1.5rem;\n    color: white;\n    transition: transform 0.3s ease;\n}\n\n.nav-button:hover {\n    transform: translateY(-0.5rem);\n}\n\n.nav-button.active {\n    text-decoration: underline;\n    text-underline-offset: 1em;\n}\n\n.home-content-container {\n    text-align: center;\n}\n\n.home-content-container:first-child {\n    margin-top: var(--main-margin);\n}\n.home-content-container:nth-child(2) {\n    margin: 2rem auto;\n}\n.home-content-container:last-child {\n    margin-bottom: var(--main-margin);\n}\n\n.home-header {\n    margin-bottom: 2rem;\n    font-size: 1.5rem;\n}\n\n.hours {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.menu-header {\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n}\n\n.item {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.item:last-child {\n    margin-bottom: 0;\n}\n\n.item-text {\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n    gap: 0.5rem;\n}\n\n.item-description {\n    color: rgba(255, 255, 255, 0.7);\n}\n\n\n#contact {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.icon {\n    fill: #FFFFFF;\n    width: 1.5rem;\n}\n\n.contact-content-container {\n    display: flex;\n    gap: 1rem;\n}\n\n.contact-content-container:nth-child(2) {\n    margin: 2rem 0;\n}\n\n.contact-content-container:last-child {\n    justify-content: center;\n}\n\n.home-content-container,\n#menu,\n#contact {\n    background: var(--content-background-colour);\n    max-width: var(--max-container-width);\n    margin: var(--main-margin) auto;\n    border-radius: var(--container-border-radius);\n    font-family: var(--content-font);\n    padding: var(--container-padding);\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: var(--content-background-colour);\n    height: 30px;\n    margin-top: auto;\n\n    font-family: var(--content-font);\n}\n\na {\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n\na:hover {\n    text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _images_phone_black_24dp_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone_black_24dp.svg */ "./src/images/phone_black_24dp.svg");
/* harmony import */ var _images_place_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/place_black_24dp.svg */ "./src/images/place_black_24dp.svg");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");






const createContact = (() => {
    const createPhoneNumber = () => {
        const phoneContainer = document.createElement("div");
        phoneContainer.classList.add("contact-content-container");
        const icon = new Image();
        icon.classList.add("icon");
        icon.src = _images_phone_black_24dp_svg__WEBPACK_IMPORTED_MODULE_1__;
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = "123-456-7890";

        phoneContainer.appendChild(icon);
        phoneContainer.appendChild(phoneNumber);

        return phoneContainer;
    }

    const createLocation = () => {
        const addressContainer = document.createElement("div");
        addressContainer.classList.add("contact-content-container");
        const icon = new Image();
        icon.classList.add("icon");
        icon.src = _images_place_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__;
        const address = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createAddress)();

        addressContainer.appendChild(icon);
        addressContainer.appendChild(address);

        return addressContainer;
    }

    const createMap = () => {
        const mapContainer = document.createElement("div");
        mapContainer.classList.add("contact-content-container");
        const map = new Image();
        map.src = _images_location_png__WEBPACK_IMPORTED_MODULE_3__;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTab);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddress: () => (/* binding */ createAddress),
/* harmony export */   homeTab: () => (/* binding */ homeTab)
/* harmony export */ });
const createHome = (() => {
    const createRestaurantDescription = () => {
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("home-content-container");

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
        hoursContainer.classList.add("home-content-container");

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
        locationContainer.classList.add("home-content-container");

        const locationHeader = document.createElement("h3");
        locationHeader.classList.add("home-header");
        locationHeader.textContent = "Location";

        const address = createAddress();

        locationContainer.appendChild(locationHeader);
        locationContainer.appendChild(address);

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

const createAddress = () => {
    const adress = document.createElement("p");
    adress.textContent = "777 Pacific Blvd"
    const lineBreak = document.createElement("br");
    adress.appendChild(lineBreak);
    const locationCity = document.createTextNode("Vancouver, BC V6B 4Y8")
    adress.appendChild(locationCity);

    return adress;
}

function homeTab () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome.home());
}



/***/ }),

/***/ "./src/initWebsite.js":
/*!****************************!*\
  !*** ./src/initWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const websiteSkeleton = (() => {

    const active = (e) => {
        return e.target.classList.contains("active");
    }

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
            homeButton.classList.add("nav-button", "active");
            homeButton.setAttribute("id", "home-button");
            homeButton.textContent = "Home";
            homeButton.addEventListener("click", (e) => {
                 if (!active(e)) {
                    setActive(e);
                    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeTab)();
                 };
            });

            const menuButton = document.createElement("button");
            menuButton.classList.add("nav-button");
            menuButton.setAttribute("id", "menu-button");
            menuButton.textContent = "Menu";
            menuButton.addEventListener("click", (e) => {
                if (!active(e)) {
                    setActive(e);
                    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
                }
            })

            const contactButton = document.createElement("button");
            contactButton.classList.add("nav-button");
            contactButton.setAttribute("id", "contact-button");
            contactButton.textContent = "Contact";
            contactButton.addEventListener("click", (e) => {
                if(!active(e)) {
                    setActive(e);
                    (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
                }
            })

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
    document.body.appendChild(websiteSkeleton.createHeader());
    document.body.appendChild(websiteSkeleton.createMain());
    document.body.appendChild(websiteSkeleton.createFooter());

    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeTab)();
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);

/***/ }),

/***/ "./src/fonts/Dancing_Script/static/DancingScript-Regular.ttf":
/*!*******************************************************************!*\
  !*** ./src/fonts/Dancing_Script/static/DancingScript-Regular.ttf ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e15416c2d596d51a588.ttf";

/***/ }),

/***/ "./src/fonts/Fragment_Mono/FragmentMono-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/Fragment_Mono/FragmentMono-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7169c93798423421b046.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de1cd35aab401bd1b8a0.jpg";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c954bb58e451c8540215.png";

/***/ }),

/***/ "./src/images/phone_black_24dp.svg":
/*!*****************************************!*\
  !*** ./src/images/phone_black_24dp.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27b38306ff9cfb45c7a0.svg";

/***/ }),

/***/ "./src/images/place_black_24dp.svg":
/*!*****************************************!*\
  !*** ./src/images/place_black_24dp.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bbdec5872906eb6befb.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initWebsite */ "./src/initWebsite.js");


(0,_initWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlMQUF3RTtBQUNwSCw0Q0FBNEMsdUtBQStEO0FBQzNHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLHNDQUFzQyxvQ0FBb0MseUZBQXlGLDBCQUEwQix5QkFBeUIsR0FBRyxnQkFBZ0IsK0JBQStCLDJFQUEyRSxzQkFBc0IscUJBQXFCLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsV0FBVyxnREFBZ0QsaURBQWlELHNEQUFzRCwwQkFBMEIsbUNBQW1DLHNDQUFzQyxnQ0FBZ0MsR0FBRyxVQUFVLHlEQUF5RCxtQ0FBbUMsNkJBQTZCLDBCQUEwQixvQkFBb0IsNkJBQTZCLDhCQUE4QixtQkFBbUIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1EQUFtRCxvQkFBb0IscUNBQXFDLHdCQUF3QixHQUFHLFlBQVksMEJBQTBCLEdBQUcsaUJBQWlCLHNCQUFzQix1QkFBdUIsbUJBQW1CLDJCQUEyQixxQkFBcUIsd0JBQXdCLG1CQUFtQixzQ0FBc0MsR0FBRyx1QkFBdUIscUNBQXFDLEdBQUcsd0JBQXdCLGlDQUFpQyxpQ0FBaUMsR0FBRyw2QkFBNkIseUJBQXlCLEdBQUcseUNBQXlDLHFDQUFxQyxHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxzQ0FBc0Msd0NBQXdDLEdBQUcsa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxrQkFBa0IsMEJBQTBCLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxXQUFXLG9CQUFvQixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLGdCQUFnQixHQUFHLDZDQUE2QyxxQkFBcUIsR0FBRywyQ0FBMkMsOEJBQThCLEdBQUcsZ0RBQWdELG1EQUFtRCw0Q0FBNEMsc0NBQXNDLG9EQUFvRCx1Q0FBdUMsd0NBQXdDLEdBQUcsYUFBYSxvQkFBb0IsOEJBQThCLDBCQUEwQixxREFBcUQsbUJBQW1CLHVCQUF1Qix5Q0FBeUMsR0FBRyxPQUFPLDRCQUE0Qix3QkFBd0IsbUJBQW1CLEdBQUcsYUFBYSxpQ0FBaUMsR0FBRyxtQkFBbUI7QUFDN3BLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaE4xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBDO0FBQ1k7QUFDRztBQUNUOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBWTtBQUMvQix3QkFBd0IsdURBQWE7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpREFBVzs7QUFFN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNuRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHcUI7QUFDZTtBQUNQO0FBQ007O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQU87QUFDM0I7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFPO0FBQzNCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlEQUFPO0FBQ1g7OztBQUdBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUN2SGhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BOdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQThDOztBQUU5Qyx3REFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0V2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvRGFuY2luZ19TY3JpcHQvc3RhdGljL0RhbmNpbmdTY3JpcHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9GcmFnbWVudF9Nb25vL0ZyYWdtZW50TW9uby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTsgXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuZm9udC1mYW1pbHk6ICdGcmFnbWVudCBNb25vJztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICAtLXRpdGxlLWZvbnQ6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgICAtLWNvbnRlbnQtZm9udDogJ0ZyYWdtZW50IE1vbm8nLCBtb25vc3BhY2U7XG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3VyOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1tYWluLW1hcmdpbjogM3JlbTtcbiAgICAtLW1heC1jb250YWluZXItd2lkdGg6IDUwcmVtO1xuICAgIC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS1jb250YWluZXItcGFkZGluZzogM3JlbTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4jaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3VyKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuXG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMWVtO1xufVxuXG4uaG9tZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG9tZS1jb250ZW50LWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tbWFpbi1tYXJnaW4pO1xufVxuLmhvbWUtY29udGVudC1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn1cbi5ob21lLWNvbnRlbnQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1haW4tbWFyZ2luKTtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaG91cnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuI21lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDNyZW07XG59XG5cbi5tZW51LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pdGVtLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cblxuI2NvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5pY29uIHtcbiAgICBmaWxsOiAjRkZGRkZGO1xuICAgIHdpZHRoOiAxLjVyZW07XG59XG5cbi5jb250YWN0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNvbnRhY3QtY29udGVudC1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmNvbnRhY3QtY29udGVudC1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRlbnQtY29udGFpbmVyLFxuI21lbnUsXG4jY29udGFjdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG91cik7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGFpbmVyLXdpZHRoKTtcbiAgICBtYXJnaW46IHZhcigtLW1haW4tbWFyZ2luKSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29udGVudC1mb250KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvdXIpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbnRlbnQtZm9udCk7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0REFBaUY7SUFDakYsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qiw0REFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQywrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELDRCQUE0QjtJQUM1QixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksNENBQTRDO0lBQzVDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0IsNkNBQTZDO0lBQzdDLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCc7XFxuICAgIHNyYzogdXJsKCdmb250cy9EYW5jaW5nX1NjcmlwdC9zdGF0aWMvRGFuY2luZ1NjcmlwdC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnd29mZjInKTsgXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuZm9udC1mYW1pbHk6ICdGcmFnbWVudCBNb25vJztcXG5zcmM6IHVybCgnZm9udHMvRnJhZ21lbnRfTW9uby9GcmFnbWVudE1vbm8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3dvZmYyJyk7XFxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5mb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS10aXRsZS1mb250OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgICAtLWNvbnRlbnQtZm9udDogJ0ZyYWdtZW50IE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG91cjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAtLW1haW4tbWFyZ2luOiAzcmVtO1xcbiAgICAtLW1heC1jb250YWluZXItd2lkdGg6IDUwcmVtO1xcbiAgICAtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLWNvbnRhaW5lci1wYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxZW07XFxufVxcblxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLW1haW4tbWFyZ2luKTtcXG59XFxuLmhvbWUtY29udGVudC1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxufVxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYWluLW1hcmdpbik7XFxufVxcblxcbi5ob21lLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLml0ZW06bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgZmlsbDogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWNvbnRlbnQtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50LWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWNvbnRlbnQtY29udGFpbmVyLFxcbiNtZW51LFxcbiNjb250YWN0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG91cik7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRhaW5lci13aWR0aCk7XFxuICAgIG1hcmdpbjogdmFyKC0tbWFpbi1tYXJnaW4pIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbnRlbnQtZm9udCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3VyKTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29udGVudC1mb250KTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgY3JlYXRlQWRkcmVzcyB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnLi9pbWFnZXMvcGhvbmVfYmxhY2tfMjRkcC5zdmcnO1xuaW1wb3J0IExvY2F0aW9uSWNvbiBmcm9tICcuL2ltYWdlcy9wbGFjZV9ibGFja18yNGRwLnN2Zyc7XG5pbXBvcnQgTG9jYXRpb25NYXAgZnJvbSAnLi9pbWFnZXMvbG9jYXRpb24ucG5nJztcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlUGhvbmVOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGhvbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGVudC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgaWNvbi5zcmMgPSBQaG9uZUljb247XG4gICAgICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCIxMjMtNDU2LTc4OTBcIjtcblxuICAgICAgICBwaG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gICAgICAgIHJldHVybiBwaG9uZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGVudC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgaWNvbi5zcmMgPSBMb2NhdGlvbkljb247XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVBZGRyZXNzKCk7XG5cbiAgICAgICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgICAgICByZXR1cm4gYWRkcmVzc0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1hcC5zcmMgPSBMb2NhdGlvbk1hcDtcblxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgICAgICByZXR1cm4gbWFwQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcblxuICAgICAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNyZWF0ZVBob25lTnVtYmVyKCkpO1xuICAgICAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xuICAgICAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNyZWF0ZU1hcCgpKTtcblxuICAgICAgICByZXR1cm4gY29udGFjdFRhYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NvbnRhY3R9O1xufSkoKTtcblxuZnVuY3Rpb24gY29udGFjdFRhYiAoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QuY29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFRhYjsiLCJjb25zdCBjcmVhdGVIb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVSZXN0YXVyYW50RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRlclwiKVxuICAgICAgICBkZXNjcmlwdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiVGhlIEdhcmRlbiBCaXN0cm9cIjtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVGhlIEdhcmRlbiBCaXN0cm8gaXMgYSBjaGFybWluZywgcnVzdGljIHJlc3RhdXJhbnQgbmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgYSBwaWN0dXJlc3F1ZSBjb3VudHJ5c2lkZS4gXFxcbiAgICAgICAgSXQgb2ZmZXJzIGEgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlIHN1cnJvdW5kZWQgYnkgbHVzaCBncmVlbmVyeSwgYmxvb21pbmcgZmxvd2VycywgYW5kIHRoZSBzb290aGluZyBzb3VuZHMgb2YgbmF0dXJlLiBcXFxuICAgICAgICBUaGUgcmVzdGF1cmFudCBpcyBkZXNpZ25lZCB0byBiZSBhbiBvYXNpcyBvZiB0cmFucXVpbGl0eSwgd2hlcmUgZ3Vlc3RzIGNhbiBlc2NhcGUgdGhlIGh1c3RsZSBhbmQgYnVzdGxlIG9mIHRoZSBjaXR5IGFuZCBcXFxuICAgICAgICBzYXZvciBkZWxpY2lvdXMgZGlzaGVzIG1hZGUgZnJvbSBsb2NhbGx5LXNvdXJjZWQsIGZyZXNoIGluZ3JlZGllbnRzLlwiO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSGVhZGVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSZXN0YXVyYW50SG91cnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRlclwiKTtcbiAgICAgICAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCJcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpXG5cbiAgICAgICAgY29uc3QgZGF5cyA9IFtcIlN1bmRheTogMTBhbSAtIDNwbSAvIDVwbSAtIDhwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIk1vbmRheTogMTBhbSAtIDNwbSAvIDVwbSAtIDlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlR1ZXNkYXk6IENsb3NlZFwiLCBcbiAgICAgICAgICAgICAgICAgICAgXCJXZWRuZXNkYXk6IDEwYW0gLSAzcG0gLyA1cG0gLSA5cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJUaHVyc2RheTogMTBhbSAtIDNwbSAvIDVwbSAtIDlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyaWRheTogMTBhbSAtIDNwbSAvIDVwbSAtIDEwcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJTYXR1cmRheTogMTBhbSAtIDNwbSAvIDVwbSAtIDEwcG1cIl1cblxuICAgICAgICBmb3IgKGxldCBkYXkgb2YgZGF5cykge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGRheTtcbiAgICAgICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAgICAgcmV0dXJuIGhvdXJzQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUxvY2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBsb2NhdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkZXJcIik7XG4gICAgICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVBZGRyZXNzKCk7XG5cbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgICAgICByZXR1cm4gbG9jYXRpb25Db250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuXG4gICAgICAgIGhvbWVUYWIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzdGF1cmFudERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBob21lVGFiLmFwcGVuZENoaWxkKGNyZWF0ZVJlc3RhdXJhbnRIb3VycygpKTtcbiAgICAgICAgaG9tZVRhYi5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcblxuICAgICAgICByZXR1cm4gaG9tZVRhYjtcbiAgICB9XG5cblxuICAgIHJldHVybiB7aG9tZX07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVBZGRyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkcmVzcy50ZXh0Q29udGVudCA9IFwiNzc3IFBhY2lmaWMgQmx2ZFwiXG4gICAgY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGFkcmVzcy5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVmFuY291dmVyLCBCQyBWNkIgNFk4XCIpXG4gICAgYWRyZXNzLmFwcGVuZENoaWxkKGxvY2F0aW9uQ2l0eSk7XG5cbiAgICByZXR1cm4gYWRyZXNzO1xufVxuXG5mdW5jdGlvbiBob21lVGFiICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZS5ob21lKCkpO1xufVxuXG5leHBvcnQgeyBob21lVGFiLCBjcmVhdGVBZGRyZXNzIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVUYWIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVUYWIgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0VGFiIGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IHdlYnNpdGVTa2VsZXRvbiA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBhY3RpdmUgPSAoZSkgPT4ge1xuICAgICAgICByZXR1cm4gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25cIik7XG4gICAgICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIiwgXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1idXR0b25cIik7XG4gICAgICAgICAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZShlKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUYWIoKTtcbiAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgICAgICAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gICAgICAgICAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudVRhYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWFjdGl2ZShlKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgR2FyZGVuIEJpc3Ryb1wiO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZpZ2F0aW9uKCkpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIHByb2ZpbGVMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ob2ppbmNoYW5nXCI7XG4gICAgICAgIHByb2ZpbGVMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgcHJvZmlsZUxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcblxuICAgICAgICBwcm9maWxlTGluay50ZXh0Q29udGVudCA9IFwiaG9qaW5jaGFuZ1wiO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBcIjtcbiAgICAgICAgZm9vdGVyVGV4dC5hcHBlbmRDaGlsZChwcm9maWxlTGluayk7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGVIZWFkZXIsIGNyZWF0ZU1haW4sIGNyZWF0ZUZvb3Rlcn1cbn0pKCk7XG5cblxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlYnNpdGVTa2VsZXRvbi5jcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWJzaXRlU2tlbGV0b24uY3JlYXRlTWFpbigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlYnNpdGVTa2VsZXRvbi5jcmVhdGVGb290ZXIoKSk7XG5cbiAgICBob21lVGFiKCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiY29uc3QgY3JlYXRlTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKGNsYXNzTmFtZSwgaGVhZGVyVGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBzdGFydGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgc3RhcnRlckhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlclRleHQ7XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ZXJIZWFkZXI7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpXG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbVRleHQuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGV4dFwiKTtcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICAgICAgaXRlbVRleHQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtVGV4dC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTdGFydGVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXJ0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudC1jb250YWluZXJcIik7XG4gICBcbiAgICAgICAgc3RhcnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUhlYWRlcihcbiAgICAgICAgICAgICAgICBcIm1lbnUtaGVhZGVyXCIsIFxuICAgICAgICAgICAgICAgIFwiU3RhcnRlcnNcIlxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBzdGFydGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICAgICBcIkdhcmRlbiBTYWxhZCBEZWxpZ2h0XCIsIFxuICAgICAgICAgICAgICAgIFwiQSBjb2xvcmZ1bCBtZWRsZXkgb2YgbWl4ZWQgZ3JlZW5zLCBoZWlybG9vbSB0b21hdG9lcywgXFxcbiAgICAgICAgICAgICAgICByb2FzdGVkIGJlZXRzLCBhbmQgZ29hdCBjaGVlc2UgZHJpenpsZWQgd2l0aCBhIGJhbHNhbWljIHZpbmFpZ3JldHRlLlwiLFxuICAgICAgICAgICAgICAgIFwiJDEzXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJXaWxkIE11c2hyb29tIEJydXNjaGV0dGFcIiwgXG4gICAgICAgICAgICAgICAgXCJTYXV0w6llZCB3aWxkIG11c2hyb29tcyBvbiB0b2FzdGVkIGFydGlzYW5hbCBicmVhZCB3aXRoIGdhcmxpYywgXFxcbiAgICAgICAgICAgICAgICBmcmVzaCBoZXJicywgYW5kIGEgYmFsc2FtaWMgcmVkdWN0aW9uLlwiLFxuICAgICAgICAgICAgICAgIFwiJDE0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJIYXJ2ZXN0IFN0dWZmZWQgUGVwcGVyc1wiLCBcbiAgICAgICAgICAgICAgICBcIlN3ZWV0IGJlbGwgcGVwcGVycyBmaWxsZWQgd2l0aCBhIHF1aW5vYSBhbmQgcm9hc3RlZCB2ZWdldGFibGUgXFxcbiAgICAgICAgICAgICAgICBtZWRsZXksIGJha2VkIHRvIHBlcmZlY3Rpb24gYW5kIHRvcHBlZCB3aXRoIGEgemVzdHkgdG9tYXRvIHNhdWNlLlwiLFxuICAgICAgICAgICAgICAgIFwiJDE1XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3RhcnRlckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYWlucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUhlYWRlcihcbiAgICAgICAgICAgICAgICBcIm1lbnUtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJNYWluc1wiXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJIZXJiLUNydXN0ZWQgU2FsbW9uXCIsXG4gICAgICAgICAgICAgICAgXCJGcmVzaCBBdGxhbnRpYyBzYWxtb24gZmlsbGV0IGNvYXRlZCBpbiBhIGJsZW5kIG9mIGZyZXNoIGhlcmJzIFxcXG4gICAgICAgICAgICAgICAgYW5kIGJyZWFkY3J1bWJzLCBzZXJ2ZWQgd2l0aCBsZW1vbiBoZXJiIGJ1dHRlciBzYXVjZSwgYW5kIFxcXG4gICAgICAgICAgICAgICAgcm9hc3RlZCBzZWFzb25hbCB2ZWdldGFibGVzLlwiLFxuICAgICAgICAgICAgICAgIFwiJDI4XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICAgICBcIkZhcm1ob3VzZSBSYXRhdG91aWxsZVwiLFxuICAgICAgICAgICAgICAgIFwiQSBoZWFydHkgdmVnYW4gZGlzaCB3aXRoIHNsb3ctY29va2VkIHJhdGF0b3VpbGxlLCBzZXJ2ZWQgXFxcbiAgICAgICAgICAgICAgICB3aXRoIGdhcmxpYy1pbmZ1c2VkIGNvdXNjb3VzIGFuZCBhIGRyaXp6bGUgb2YgYmFzaWwgcGVzdG8uXCIsXG4gICAgICAgICAgICAgICAgXCIkMjZcIlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgICAgIFwiU2F2b3J5IFBvcnRvYmVsbG8gU3RhY2tcIixcbiAgICAgICAgICAgICAgICBcIkdyaWxsZWQgUG9ydG9iZWxsbyBtdXNocm9vbXMgbGF5ZXJlZCB3aXRoIHNwaW5hY2gsIFxcXG4gICAgICAgICAgICAgICAgcm9hc3RlZCByZWQgcGVwcGVyLCBhbmQgbW96emFyZWxsYSBjaGVlc2UsIHNlcnZlZCB3aXRoIGEgXFxcbiAgICAgICAgICAgICAgICBiYWxzYW1pYyByZWR1Y3Rpb24gYW5kIHF1aW5vYSBwaWxhZi5cIixcbiAgICAgICAgICAgICAgICBcIiQyNFwiXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZXNzZXJ0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzc2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc3NlcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudC1jb250YWluZXJcIik7XG4gICAgICAgIFxuICAgICAgICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSGVhZGVyKFxuICAgICAgICAgICAgICAgIFwibWVudS1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICBcIkRlc3NlcnRzXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICAgICBcIlN1bW1lciBCZXJyeSBUYXJ0XCIsXG4gICAgICAgICAgICAgICAgXCJBIGZsYWt5LCBidXR0ZXJ5IHBhc3RyeSBzaGVsbCBmaWxsZWQgd2l0aCBhIGx1c2Npb3VzIHZhbmlsbGEgXFxcbiAgICAgICAgICAgICAgICBjdXN0YXJkIGFuZCB0b3BwZWQgd2l0aCBhIG1lZGxleSBvZiBmcmVzaCBzdW1tZXIgYmVycmllcywgXFxcbiAgICAgICAgICAgICAgICBpbmNsdWRpbmcgc3RyYXdiZXJyaWVzLCBibHVlYmVycmllcywgYW5kIHJhc3BiZXJyaWVzLlwiLFxuICAgICAgICAgICAgICAgIFwiJDE0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICAgICBcIkNob2NvbGF0ZSBEZWNhZGVuY2UgQ2FrZVwiLFxuICAgICAgICAgICAgICAgIFwiQSBzaW5mdWxseSByaWNoIGFuZCBtb2lzdCBjaG9jb2xhdGUgY2FrZSwgbGF5ZXJlZCB3aXRoIHZlbHZldHkgXFxcbiAgICAgICAgICAgICAgICBkYXJrIGNob2NvbGF0ZSBnYW5hY2hlLCBhbmQgc2VydmVkIHdpdGggYSBzY29vcCBvZiBob3VzZS1tYWRlIFxcXG4gICAgICAgICAgICAgICAgdmFuaWxsYSBiZWFuIGljZSBjcmVhbS5cIixcbiAgICAgICAgICAgICAgICBcIiQxNlwiXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJMZW1vbiBMYXZlbmRlciBQYW5uYSBDb3R0YVwiLFxuICAgICAgICAgICAgICAgIFwiQ3JlYW15IGxlbW9uLWluZnVzZWQgcGFubmEgY290dGEgd2l0aCBhIGRlbGljYXRlIGhpbnQgb2YgbGF2ZW5kZXIsIFxcXG4gICAgICAgICAgICAgICAgc2VydmVkIGluIGEgZ2xhc3MgamFyIHdpdGggYSBsYXllciBvZiBsZW1vbiBjdXJkIGFuZCBnYXJuaXNoZWQgXFxcbiAgICAgICAgICAgICAgICB3aXRoIGNhbmRpZWQgbGVtb24gemVzdC5cIixcbiAgICAgICAgICAgICAgICBcIiQxM1wiXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gZGVzc2VydENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCZXZlcmFnZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJldmVyYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmV2ZXJhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgYmV2ZXJhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjcmVhdGVIZWFkZXIoXG4gICAgICAgICAgICAgICAgXCJtZW51LWhlYWRlclwiLFxuICAgICAgICAgICAgICAgIFwiQmV2ZXJhZ2VzXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBiZXZlcmFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJCbG9zc29tIEJyZWV6ZVwiLFxuICAgICAgICAgICAgICAgIFwiQSByZWZyZXNoaW5nIGJsZW5kIG9mIGhpYmlzY3VzIGFuZCBlbGRlcmZsb3dlciwgc2VydmVkIG92ZXIgaWNlLlwiLFxuICAgICAgICAgICAgICAgIFwiJDhcIlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICAgICBcIk9yY2hhcmQgRWxpeGlyXCIsXG4gICAgICAgICAgICAgICAgXCJBIG1peCBvZiBhcHBsZSwgcGVhciwgYW5kIGdpbmdlciBqdWljZXMsIHRvcHBlZCB3aXRoIHNwYXJrbGluZyB3YXRlci5cIixcbiAgICAgICAgICAgICAgICBcIiQ4XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBiZXZlcmFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAgICAgXCJIZXJiYWwgSW5mdXNpb25cIixcbiAgICAgICAgICAgICAgICBcIkEgc29vdGhpbmcgaGVyYmFsIHRlYSB3aXRoIGEgYmxlbmQgb2YgbGF2ZW5kZXIsIGNoYW1vbWlsZSwgYW5kIG1pbnQuXCIsXG4gICAgICAgICAgICAgICAgXCIkOFwiXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gYmV2ZXJhZ2VDb250YWluZXI7XG4gICAgfVxuXG5cbiAgICBjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudVRhYi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG5cbiAgICAgICAgbWVudVRhYi5hcHBlbmRDaGlsZChjcmVhdGVTdGFydGVycygpKTtcbiAgICAgICAgbWVudVRhYi5hcHBlbmRDaGlsZChjcmVhdGVNYWlucygpKTtcbiAgICAgICAgbWVudVRhYi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0cygpKTtcbiAgICAgICAgbWVudVRhYi5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZXMoKSk7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVUYWI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHttZW51fVxuICAgIFxufSkoKTtcblxuXG5mdW5jdGlvbiBtZW51VGFiICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudS5tZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51VGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRXZWJzaXRlXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9