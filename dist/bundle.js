/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_colors.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_colors.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --white: rgb(255,255,255);
  --orange: rgb(224, 139, 10);
  --gray-text: rgba(76, 75, 75, 0.775); }
`, "",{"version":3,"sources":["webpack://./src/_colors.scss"],"names":[],"mappings":"AAAA;EACI,yBAAQ;EACR,2BAAS;EACT,oCAAY,EAAA","sourcesContent":[":root {\r\n    --white: rgb(255,255,255);\r\n    --orange: rgb(224, 139, 10);\r\n    --gray-text: rgba(76, 75, 75, 0.775);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@use '_colors.scss';
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0; }

html {
  font-size: 62.5%; }

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: 1rem;
  font-family: sans-serif; }

.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; }

li {
  list-style: none; }

nav {
  padding: 1em; }
  nav .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center; }
    nav .mobile-nav__left {
      display: flex;
      align-items: center; }
      nav .mobile-nav__left .burger {
        padding: 1em;
        background: none;
        border: none;
        cursor: pointer; }
      nav .mobile-nav__left .title {
        min-height: 40px; }
      nav .mobile-nav__left .nav-title {
        font-size: 3rem;
        letter-spacing: -1px; }
        nav .mobile-nav__left .nav-title span {
          letter-spacing: 1px; }
    nav .mobile-nav__right {
      display: flex;
      align-items: center;
      gap: 1em; }
      nav .mobile-nav__right .cart,
      nav .mobile-nav__right .avatar {
        padding: 1em;
        cursor: pointer; }
      nav .mobile-nav__right .avatar-photo {
        width: 25px;
        height: 25px; }
    nav .mobile-nav .mobile-menu {
      position: absolute;
      top: 0;
      left: -100%;
      min-height: 100vh;
      width: 60vw;
      background-color: var(--white);
      z-index: 100;
      font-size: 1.5rem; }
      nav .mobile-nav .mobile-menu .close-menu {
        padding: 2em;
        background: none;
        border: none;
        cursor: pointer; }
      nav .mobile-nav .mobile-menu__text li {
        padding: 1em 2em;
        font-weight: bold;
        cursor: pointer; }
      nav .mobile-nav .mobile-menu--active {
        left: 0; }
  nav .desktop-nav {
    display: none;
    justify-content: space-between;
    align-items: center; }
    nav .desktop-nav__left {
      display: flex;
      gap: 1em; }

main {
  display: grid;
  grid-template-rows: 50% 80%;
  grid-template-columns: 5% 90% 5%;
  font-size: 1.2rem; }
  main .slider {
    grid-row: 1/2;
    grid-column: 1/4;
    min-height: 150px; }
  main .main-content {
    display: grid;
    grid-template-rows: 10% 25% 25% 15% 20% 40%;
    grid-row: 2/8;
    grid-column: 2/3; }
    main .main-content .company {
      grid-row: 1/2;
      color: #e08b0a;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px; }
    main .main-content .sneaker-name {
      grid-row: 2/3;
      font-size: 2.3em; }
    main .main-content .description {
      grid-row: 3/4;
      line-height: 25px;
      color: var(--gray-text); }
    main .main-content .price {
      grid-row: 4/5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem; }
      main .main-content .price .old-price {
        text-decoration: line-through;
        color: var(--gray-text); }
      main .main-content .price__left {
        display: flex;
        align-items: center;
        gap: 1em; }
        main .main-content .price__left .steal-amount {
          padding: 0.2em 0.5em;
          color: var(--orange);
          font-weight: bold;
          background-color: rgba(224, 138, 10, 0.254);
          border-radius: 5px; }
    main .main-content .buy-buttons {
      grid-row: 5/6;
      display: flex;
      flex-direction: column;
      gap: 1em; }
      main .main-content .buy-buttons .amount, main .main-content .buy-buttons .add {
        display: flex;
        align-items: center;
        border: none;
        font-size: 1.5rem;
        border-radius: 12px;
        min-height: 50px; }
      main .main-content .buy-buttons .amount {
        justify-content: space-between;
        font-weight: bold; }
        main .main-content .buy-buttons .amount .plus, main .main-content .buy-buttons .amount .minus {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50px;
          padding: 0 1em;
          height: 100%;
          color: darkorange;
          cursor: pointer; }
      main .main-content .buy-buttons .add {
        justify-content: center;
        gap: 1em;
        background-color: darkorange;
        color: white;
        font-weight: bold;
        cursor: pointer; }

@media (min-width: 768px) {
  .wrapper {
    width: 90%; }
  nav {
    padding: 2em 1em; }
    nav .mobile-nav__left {
      gap: 2em; }
      nav .mobile-nav__left .burger img {
        width: 30px;
        height: 30px; }
      nav .mobile-nav__left .nav-title {
        font-size: 4rem; }
    nav .mobile-nav .avatar-photo {
      width: 40px;
      height: 40px; }
    nav .mobile-nav .cart-icon {
      width: 40px;
      height: 40px; } }

@media (min-width: 992px) {
  nav .mobile-nav {
    display: none; }
  nav .desktop-nav {
    display: flex; } }
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@use '_colors.scss';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml {\r\n\tfont-size: 62.5%;\r\n}\r\n\r\nbody {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-height: 100vh;\r\n\tfont-size: 1rem;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.wrapper {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nnav {\r\n\tpadding: 1em;\r\n\r\n\t.mobile-nav {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\r\n\t\t&__left {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\r\n\t\t\t.burger {\r\n\t\t\t\tpadding: 1em;\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\r\n\t\t\t.title {\r\n\t\t\t\tmin-height: 40px;\r\n\t\t\t}\r\n\r\n\t\t\t.nav-title {\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tletter-spacing: -1px;\r\n\r\n\t\t\t\tspan {\r\n\t\t\t\t\tletter-spacing: 1px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__right {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 1em;\r\n\r\n\t\t\t.cart,\r\n\t\t\t.avatar {\r\n\t\t\t\tpadding: 1em;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\r\n\t\t\t.avatar-photo {\r\n\t\t\t\twidth: 25px;\r\n\t\t\t\theight: 25px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.mobile-menu {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: -100%;\r\n\t\t\tmin-height: 100vh;\r\n\t\t\twidth: 60vw;\r\n\t\t\tbackground-color: var(--white);\r\n\t\t\tz-index: 100;\r\n\t\t\tfont-size: 1.5rem;\r\n\r\n\t\t\t.close-menu {\r\n\t\t\t\tpadding: 2em;\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\r\n\t\t\t&__text {\r\n\t\t\t\t\r\n\t\t\t\tli {\r\n\t\t\t\t\tpadding: 1em 2em;\r\n\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&--active {\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.desktop-nav {\r\n\t\tdisplay: none;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\r\n\t\t&__left {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1em;\r\n\t\t}\r\n\t}\r\n\r\n}\r\nmain {\r\n    display: grid;\r\n    grid-template-rows: 50% 80%;\r\n    grid-template-columns: 5% 90% 5%;\r\n\tfont-size: 1.2rem;\r\n\r\n    .slider {\r\n        grid-row: 1/2;\r\n        grid-column: 1/4;\r\n        min-height: 150px;\r\n    }\r\n\r\n    .main-content {\r\n        display: grid;\r\n        grid-template-rows: 10% 25% 25% 15% 20% 40%;\r\n        grid-row: 2/8;\r\n        grid-column: 2/3;\r\n\r\n        .company {\r\n            grid-row: 1/2;\r\n            color: rgb(224, 139, 10);\r\n            text-transform: uppercase;\r\n            font-weight: bold;\r\n            letter-spacing: 1px;\r\n        }\r\n\r\n        .sneaker-name {\r\n            grid-row: 2/3;\r\n\t\t\tfont-size: 2.3em;\r\n        }\r\n\r\n        .description {\r\n            grid-row: 3/4;\r\n\t\t\tline-height: 25px;\r\n\t\t\tcolor: var(--gray-text);\r\n        }\r\n\r\n        .price {\r\n            grid-row: 4/5;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\t\t\tfont-size: 1.5rem;\r\n\r\n\t\t\t.old-price {\r\n\t\t\t\ttext-decoration: line-through;\r\n\t\t\t\tcolor: var(--gray-text);\r\n\t\t\t}\r\n\r\n            &__left {\r\n                display: flex;\r\n                align-items: center;\r\n\t\t\t\tgap: 1em;\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t.steal-amount {\r\n\t\t\t\t\tpadding: 0.2em 0.5em;\r\n\t\t\t\t\tcolor: var(--orange);\r\n\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\tbackground-color: rgba(224, 138, 10, 0.254);\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t}\r\n            }\r\n        }\r\n\r\n\t\t.buy-buttons {\r\n\t\t\tgrid-row: 5/6;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1em;\r\n\t\t\t\r\n\t\t\t.amount, .add {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\tborder-radius: 12px;\r\n\t\t\t\tmin-height: 50px;\r\n\t\t\t}\r\n\r\n\t\t\t.amount {\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\t.plus, .minus {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tmin-height: 50px;\r\n\t\t\t\t\tpadding: 0 1em;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tcolor: rgb(255, 140, 0);\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.add {\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tgap: 1em;\r\n\t\t\t\tbackground-color: rgb(255, 140, 0);\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\t\t}\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.wrapper {\r\n\t\twidth: 90%;\r\n\t}\r\n\tnav {\r\n\t\tpadding: 2em 1em;\r\n\r\n\t\t.mobile-nav {\r\n\t\t\t&__left {\r\n\t\t\t\tgap: 2em;\r\n\t\t\t\t\r\n\t\t\t\t.burger img {\r\n\t\t\t\t\twidth: 30px;\r\n\t\t\t\t\theight: 30px;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.nav-title {\r\n\t\t\t\t\tfont-size: 4rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.avatar-photo {\r\n\t\t\t\twidth: 40px;\r\n\t\t\t\theight: 40px;\r\n\t\t\t}\r\n\r\n\t\t\t.cart-icon {\r\n\t\t\t\twidth: 40px;\r\n\t\t\t\theight: 40px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\tnav .mobile-nav {\r\n\t\tdisplay: none;\r\n\t}\r\n\tnav .desktop-nav {\r\n\t\tdisplay: flex;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/_colors.scss":
/*!**************************!*\
  !*** ./src/_colors.scss ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./_colors.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_colors.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./_colors.scss */ "./src/_colors.scss");
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
console.log(mobileMenu);
// closeMenuBtn.addEventListener('click', () => {
//     mobileMenu.classList.remove('mobile-menu--active')
// })

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map