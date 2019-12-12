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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var User =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(User, _Component);

  function User(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, User);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(User).call(this, props));
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
      };
      return __jsx("div", {
        style: {
          width: "100%",
          marginLeft: "200px"
        }
      }, this.state.userList.map(function (i, index) {
        return __jsx("div", {
          style: divStyle,
          key: index
        }, i.login);
      }));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=user.js.a68a4882b9dad5418062.hot-update.js.map