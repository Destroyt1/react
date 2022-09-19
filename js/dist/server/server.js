"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    /******/ "use strict";
    /******/ var __webpack_modules__ = ({
        /***/ "./src/shared/header.css": 
        /*!*******************************!*\
          !*** ./src/shared/header.css ***!
          \*******************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"example\": \"header__example--Duzw6\"\n});\n\n\n//# sourceURL=webpack://untitled/./src/shared/header.css?");
            /***/ 
        }),
        /***/ "./src/server/indexTemplate.js": 
        /*!*************************************!*\
          !*** ./src/server/indexTemplate.js ***!
          \*************************************/
        /***/ ((__unused_webpack_module, exports) => {
            eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nconst indexTemplate = (content) => `\n<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Reddit</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n</head>\n<body>\n    <div id=\"react_rot\">${content}</div>\n</body>\n</html>\n`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://untitled/./src/server/indexTemplate.js?");
            /***/ 
        }),
        /***/ "./src/server/server.js": 
        /*!******************************!*\
          !*** ./src/server/server.js ***!
          \******************************/
        /***/ (function (__unused_webpack_module, exports, __webpack_require__) {
            eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nconst Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.tsx\");\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nconst app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', (req, res) => {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));\n});\napp.listen(3000, () => {\n    console.log('Server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack://untitled/./src/server/server.js?");
            /***/ 
        }),
        /***/ "./src/shared/Header.jsx": 
        /*!*******************************!*\
          !*** ./src/shared/Header.tsx ***!
          \*******************************/
        /***/ (function (__unused_webpack_module, exports, __webpack_require__) {
            eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/header.css\"));\nfunction HeaderComponent() {\n    console.log(header_css_1.default, header_css_1.default.example);\n    return (React.createElement(\"header\", null,\n        React.createElement(\"h1\", { className: header_css_1.default.example }, \"Reddit for four owneff\")));\n}\nexports.Header = (0, root_1.hot)(HeaderComponent);\n\n\n//# sourceURL=webpack://untitled/./src/shared/Header.tsx?");
            /***/ 
        }),
        /***/ "express": 
        /*!**************************!*\
          !*** external "express" ***!
          \**************************/
        /***/ ((module) => {
            module.exports = require("express");
            /***/ 
        }),
        /***/ "react": 
        /*!************************!*\
          !*** external "react" ***!
          \************************/
        /***/ ((module) => {
            module.exports = require("react");
            /***/ 
        }),
        /***/ "react-dom/server": 
        /*!***********************************!*\
          !*** external "react-dom/server" ***!
          \***********************************/
        /***/ ((module) => {
            module.exports = require("react-dom/server");
            /***/ 
        }),
        /***/ "react-hot-loader/root": 
        /*!****************************************!*\
          !*** external "react-hot-loader/root" ***!
          \****************************************/
        /***/ ((module) => {
            module.exports = require("react-hot-loader/root");
            /***/ 
        })
        /******/ 
    });
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ }
                /******/ }
            /******/ 
        };
        /******/ 
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
        /******/ 
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 
        };
        /******/ 
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module is referenced by other modules so it can't be inlined
    /******/ var __webpack_exports__ = __webpack_require__("./src/server/server.js");
    /******/
    /******/ 
})();
//# sourceMappingURL=server.js.map