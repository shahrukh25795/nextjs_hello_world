webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Home = function Home() {
  var divStyle = {
    textAlign: "center"
  },
      buttonStyle = {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#c1c2dd",
    border: "1px solid #f7f7f7",
    borderRadius: "5px",
    cursor: "pointer"
  };
  return __jsx("div", {
    style: divStyle
  }, __jsx("button", {
    style: buttonStyle,
    type: "button",
    onClick: function onClick() {
      return _routes__WEBPACK_IMPORTED_MODULE_1__["Router"].pushRoute("/about");
    }
  }, "Go to about page"), __jsx("button", {
    style: buttonStyle,
    type: "button",
    onClick: function onClick() {
      return _routes__WEBPACK_IMPORTED_MODULE_1__["Router"].pushRoute("/contact");
    }
  }, "Go to contact page"), __jsx("button", {
    style: buttonStyle,
    type: "button",
    onClick: function onClick() {
      return _routes__WEBPACK_IMPORTED_MODULE_1__["Router"].pushRoute("/user");
    }
  }, "Go to user List"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a3cde370b2dbbb9aa86a.hot-update.js.map