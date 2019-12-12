module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/aboutUs.js":
/*!**************************!*\
  !*** ./pages/aboutUs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const queryString = __webpack_require__(/*! query-string */ "query-string");

class AboutUs extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preFillData", () => {
      console.log(this.state.filter);
      const userList = [...this.state.userList],
            data = [];

      if (this.state.filter === "superUser") {
        userList.map(i => {
          if (i.type === "superUser") {
            data.push(i);
          }

          return i;
        });
      }

      this.setState({
        userList: data.length > 0 ? data : userList
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", type => {
      _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/about?site_admin=' + type);
    });

    this.state = {
      filter: "User",
      userList: [{
        "login": "mojombo",
        "id": 1,
        "type": "superUser",
        "site_admin": true
      }, {
        "login": "defunkt",
        "id": 2,
        "type": "User",
        "site_admin": true
      }, {
        "login": "pjhyett",
        "id": 3,
        "type": "User",
        "site_admin": false
      }, {
        "login": "wycats",
        "id": 4,
        "type": "superUser",
        "site_admin": true
      }, {
        "login": "ezmobius",
        "id": 5,
        "type": "User",
        "site_admin": false
      }, {
        "login": "ivey",
        "id": 6,
        "type": "superUser",
        "site_admin": true
      }, {
        "login": "evanphx",
        "id": 7,
        "type": "User",
        "site_admin": true
      }, {
        "login": "vanpelt",
        "id": 17,
        "type": "superUser",
        "site_admin": true
      }, {
        "login": "wayneeseguin",
        "id": 18,
        "type": "User",
        "site_admin": false
      }, {
        "login": "brynary",
        "id": 19,
        "type": "superUser",
        "site_admin": false
      }, {
        "login": "kevinclark",
        "id": 20,
        "type": "User",
        "site_admin": true
      }, {
        "login": "technoweenie",
        "id": 21,
        "type": "superUser",
        "site_admin": false
      }, {
        "login": "macournoyer",
        "id": 22,
        "type": "User",
        "site_admin": true
      }, {
        "login": "takeo",
        "id": 23,
        "type": "superUser",
        "site_admin": false
      }, {
        "login": "caged",
        "id": 25,
        "type": "User",
        "site_admin": false
      }, {
        "login": "topfunky",
        "id": 26,
        "type": "superUser",
        "site_admin": true
      }, {
        "login": "anotherjesse",
        "id": 27,
        "type": "User",
        "site_admin": false
      }, {
        "login": "roland",
        "id": 28,
        "type": "User",
        "site_admin": true
      }, {
        "login": "lukas",
        "id": 29,
        "type": "superUser",
        "site_admin": false
      }, {
        "login": "fanvsfan",
        "id": 30,
        "type": "User",
        "site_admin": false
      }]
    };
  }

  componentDidMount() {
    if (this.props.url.query) {
      this.setState({
        filter: this.props.url.query.site_admin ? this.props.url.query.site_admin : "User"
      }, () => this.preFillData());
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.url.query.site_admin !== prevProps.url.query.site_admin) this.setState({
      filter: this.props.url.query.site_admin ? this.props.url.query.site_admin : "User"
    }, () => this.preFillData());
  }

  render() {
    console.log("fillter", this.state.userList);
    return __jsx("div", {
      style: {
        textAlign: "center"
      }
    }, __jsx("button", {
      type: "button",
      onClick: () => this.handleClick("superUser")
    }, "Add Fillter"), __jsx("button", {
      type: "button",
      onClick: () => this.handleClick("User")
    }, "Remove Fillter"), this.state.userList.map(i => {
      return __jsx("div", {
        key: i.id
      }, i.login);
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('home', '/', 'index') // description   routes  page
.add('About Us', '/about', 'aboutUs').add('Contact Us', '/contact', 'contactUs');

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/aboutUs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/startxlabs/Desktop/Dummy Project/NextProject/nextjstraning/pages/aboutUs.js */"./pages/aboutUs.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=aboutUs.js.map