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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class User extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preFillData", () => {
      console.log(this.state.filter);
      const userList = [...this.state.dummyList],
            data = [];

      if (this.state.userType) {
        userList.map(i => {
          if (i.type === this.state.userType.value) {
            data.push(i);
          }

          return i;
        });
      }

      this.setState({
        userList: data.length > 0 ? data : userList
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", el => {
      this.setState({
        userType: el
      }, () => {
        _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/user?userType=' + el.value);
      });
    });

    this.state = {
      userList: [{
        "login": "drit",
        "type": "superUser"
      }, {
        "login": "defunkt",
        "type": "User"
      }, {
        "login": "pjhyett",
        "type": "User"
      }, {
        "login": "wycats",
        "type": "superUser"
      }, {
        "login": "ezmobius",
        "type": "User"
      }, {
        "login": "ivey",
        "type": "superUser"
      }, {
        "login": "evanphx",
        "type": "User"
      }, {
        "login": "vanpelt",
        "type": "superUser"
      }, {
        "login": "wayneeseguin",
        "type": "User"
      }, {
        "login": "brynary",
        "type": "superUser"
      }, {
        "login": "kevinclark",
        "type": "User"
      }, {
        "login": "technoweenie",
        "type": "superUser"
      }, {
        "login": "macournoyer",
        "type": "User"
      }, {
        "login": "takeo",
        "type": "superUser"
      }, {
        "login": "caged",
        "type": "User"
      }, {
        "login": "topfunky",
        "type": "superUser"
      }, {
        "login": "anotherjesse",
        "type": "User"
      }, {
        "login": "roland",
        "type": "User"
      }, {
        "login": "lukas",
        "type": "superUser"
      }, {
        "login": "fanvsfan",
        "type": "User"
      }],
      dummyList: [{
        "login": "drit",
        "type": "superUser"
      }, {
        "login": "defunkt",
        "type": "User"
      }, {
        "login": "pjhyett",
        "type": "User"
      }, {
        "login": "wycats",
        "type": "superUser"
      }, {
        "login": "ezmobius",
        "type": "User"
      }, {
        "login": "ivey",
        "type": "superUser"
      }, {
        "login": "evanphx",
        "type": "User"
      }, {
        "login": "vanpelt",
        "type": "superUser"
      }, {
        "login": "wayneeseguin",
        "type": "User"
      }, {
        "login": "brynary",
        "type": "superUser"
      }, {
        "login": "kevinclark",
        "type": "User"
      }, {
        "login": "technoweenie",
        "type": "superUser"
      }, {
        "login": "macournoyer",
        "type": "User"
      }, {
        "login": "takeo",
        "type": "superUser"
      }, {
        "login": "caged",
        "type": "User"
      }, {
        "login": "topfunky",
        "type": "superUser"
      }, {
        "login": "anotherjesse",
        "type": "User"
      }, {
        "login": "roland",
        "type": "User"
      }, {
        "login": "lukas",
        "type": "superUser"
      }, {
        "login": "fanvsfan",
        "type": "User"
      }],
      userType: null,
      userTypeOption: [{
        "label": "user",
        "value": "user"
      }, {
        "label": "superUser",
        "value": "superUser"
      }]
    };
  }

  componentDidMount() {
    if (this.props.url.query) {
      this.setState({
        userType: this.props.url.query.userType ? {
          "label": this.props.url.query.userType,
          "value": this.props.url.query.userType
        } : null
      }, () => this.preFillData());
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.url.query.userType !== prevProps.url.query.userType) this.setState({
      userType: this.props.url.query.userType ? {
        "label": this.props.url.query.userType,
        "value": this.props.url.query.userType
      } : null
    }, () => this.preFillData());
  }

  render() {
    const divStyle = {
      padding: "10px",
      margin: "10px",
      border: "1px solid #f7f7f7",
      width: "20%",
      backgroundColor: "#d9d9d9"
    },
          divStyle1 = {
      padding: "10px",
      margin: "10px",
      width: "20%"
    };
    return __jsx("div", {
      style: {
        width: "100%"
      }
    }, __jsx("div", {
      style: divStyle1
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: "Apply filter",
      value: this.state.userType,
      onChange: this.handleChange,
      options: this.state.userTypeOption
    })), this.state.userList.map((i, index) => {
      return __jsx("div", {
        style: divStyle,
        key: index
      }, i.login);
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('home', '/', 'index') // description   routes  page
.add('About Us', '/about', 'aboutUs').add('Contact Us', '/contact', 'contactUs').add('User List', '/user', 'user');

/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** multi ./pages/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shahr\Desktop\Project\MyProject\NextJs\nextjs_hello_world\pages\user.js */"./pages/user.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=user.js.map