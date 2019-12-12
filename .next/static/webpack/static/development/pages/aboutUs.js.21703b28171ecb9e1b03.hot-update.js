webpackHotUpdate("static/development/pages/aboutUs.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./pages/aboutUs.js":
/*!**************************!*\
  !*** ./pages/aboutUs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var AboutUs =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AboutUs, _Component);

  function AboutUs(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutUs);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutUs).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (filter) {
      _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute('/about?site_admin=' + filter);
    });

    _this.state = {
      filter: false,
      userList: [{
        "login": "mojombo",
        "id": 1,
        "type": "User",
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
        "type": "User",
        "site_admin": true
      }, {
        "login": "ezmobius",
        "id": 5,
        "type": "User",
        "site_admin": false
      }, {
        "login": "ivey",
        "id": 6,
        "type": "User",
        "site_admin": true
      }, {
        "login": "evanphx",
        "id": 7,
        "type": "User",
        "site_admin": true
      }, {
        "login": "vanpelt",
        "id": 17,
        "type": "User",
        "site_admin": true
      }, {
        "login": "wayneeseguin",
        "id": 18,
        "type": "User",
        "site_admin": false
      }, {
        "login": "brynary",
        "id": 19,
        "type": "User",
        "site_admin": false
      }, {
        "login": "kevinclark",
        "id": 20,
        "type": "User",
        "site_admin": true
      }, {
        "login": "technoweenie",
        "id": 21,
        "type": "User",
        "site_admin": false
      }, {
        "login": "macournoyer",
        "id": 22,
        "type": "User",
        "site_admin": true
      }, {
        "login": "takeo",
        "id": 23,
        "type": "User",
        "site_admin": false
      }, {
        "login": "caged",
        "id": 25,
        "type": "User",
        "site_admin": false
      }, {
        "login": "topfunky",
        "id": 26,
        "type": "User",
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
        "type": "User",
        "site_admin": false
      }, {
        "login": "fanvsfan",
        "id": 30,
        "type": "User",
        "site_admin": false
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var parased = queryString.parse(location.search);

      if (parased.site_admin) {
        this.setState({
          filter: parased.site_admin ? parased.site_admin : false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var parased = queryString.parse(location.search); // if (JSON.stringify(queryString.parse(prevProps.location.search)) !== JSON.stringify(parased)) {
      //     this.setState({
      //         filter: parased.site_admin ? parased.site_admin : false
      //     })
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("fillter", this.state.filter);
      return __jsx("div", {
        style: {
          textAlign: "center"
        }
      }, __jsx("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.handleClick(true);
        }
      }, "Add Fillter"), __jsx("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.handleClick(false);
        }
      }, "Remove Fillter"), this.state.userList.map(function (i) {
        return __jsx("div", {
          key: i.id
        }, i.login);
      }));
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ })

})
//# sourceMappingURL=aboutUs.js.21703b28171ecb9e1b03.hot-update.js.map