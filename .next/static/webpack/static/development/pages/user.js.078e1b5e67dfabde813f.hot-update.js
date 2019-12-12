webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var User =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(User, _Component);

  function User(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, User);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(User).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (el) {
      _this.setState({
        userType: el
      }, function () {
        _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute('/user?userType=' + el.value);
      });
    });

    _this.state = {
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
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(User, [{
    key: "render",
    value: function render() {
      var divStyle = {
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
      }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        placeholder: "Apply filter",
        value: this.state.userType,
        onChange: this.handleChange,
        options: this.state.userTypeOption
      })), this.state.userList.map(function (i, index) {
        return __jsx("div", {
          style: divStyle,
          key: index
        }, i.login);
      }));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=user.js.078e1b5e67dfabde813f.hot-update.js.map