webpackHotUpdate("static\\development\\pages\\aboutUs.js",{

/***/ "./pages/aboutUs.js":
/*!**************************!*\
  !*** ./pages/aboutUs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var AboutUs =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AboutUs, _Component);

  function AboutUs(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AboutUs);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutUs).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "preFillData", function () {
      console.log(_this.state.filter);

      var userList = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.userList),
          data = [];

      if (_this.state.filter === "superUser") {
        userList.map(function (i) {
          if (i.type === "superUser") {
            data.push(i);
          }

          return i;
        });
      }

      _this.setState({
        userList: data.length > 0 ? data : userList
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClick", function (user) {
      _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute('/about?userType=' + user);
    });

    _this.state = {
      filter: "User",
      userList: [{
        "id": 1,
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
        "id": 1,
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
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.url.query) {
        this.setState({
          filter: this.props.url.query.userType ? this.props.url.query.userType : "User"
        }, function () {
          return _this2.preFillData();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.url.query.userType !== prevProps.url.query.userType) this.setState({
        filter: this.props.url.query.userType ? this.props.url.query.userType : "User"
      }, function () {
        return _this3.preFillData();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          textAlign: "center"
        }
      }, "This is about page");
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ })

})
//# sourceMappingURL=aboutUs.js.01e67ef04caaadbf331e.hot-update.js.map