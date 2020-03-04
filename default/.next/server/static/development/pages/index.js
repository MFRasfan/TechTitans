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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layouts/DefaultStyle.js":
/*!********************************************!*\
  !*** ./components/Layouts/DefaultStyle.js ***!
  \********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/ActiveLink */ "./components/common/ActiveLink.js");










 // import * as Icon from 'react-feather';

var DefaultStyle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultStyle, _React$Component);

  function DefaultStyle() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DefaultStyle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DefaultStyle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DefaultStyle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      // let { products } = this.props;
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      var pathname = this.props.router.pathname;
      var layOutCls = '';

      if (pathname == '/home-three') {
        layOutCls = 'p-relative';
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "navbar",
        className: "startp-nav ".concat(layOutCls)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "navbar-brand",
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/logo.png */ "./static/images/logo.png"),
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        href: "/",
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Home")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Services")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, ">"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "others-option"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-light"
      }, "Support")))))));
    }
  }]);

  return DefaultStyle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(DefaultStyle)));

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);









var Footer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer-area bg-f7fafd"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/logo.png */ "./static/images/logo.png"),
        alt: "logo"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget pl-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Company"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "About Us"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/services"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Services"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/blog"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Contact Us")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Support"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/faq"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "FAQ's"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Privacy Policy"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Terms & Condition"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Community")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Address"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "footer-contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["MapPin"], null), "2761 Markham Rd #27,  ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), " Scarborough, ON M1X 1M4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["Mail"], null), "Email: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "info@techtitans.ca/"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["PhoneCall"], null), "Phone: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "+ 1 (416) 335-4777")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "facebook"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["Facebook"], null)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["Twitter"], null)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "instagram"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["Instagram"], null)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["Linkedin"], null))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "copyright-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Copyright @2020 APOSTROFFI. All rights reserved"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/map.png */ "./static/images/map.png"),
        className: "map",
        alt: "map"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/shape1.png */ "./static/images/shape1.png"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape8 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/shape2.svg */ "./static/images/shape2.svg"),
        alt: "shape"
      })));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Layouts/GoTop.js":
/*!*************************************!*\
  !*** ./components/Layouts/GoTop.js ***!
  \*************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_8__);










var GoTop = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GoTop, _React$Component);

  function GoTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoTop).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onScrollStep", function () {
      if (window.pageYOffset === 0) {
        clearInterval(_this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - _this.props.scrollStepInPx);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToTop", function () {
      var intervalId = setInterval(_this.onScrollStep, _this.props.delayInMs);

      _this.setState({
        intervalId: intervalId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderGoTopIcon", function () {
      if (_this.state.thePosition) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "go-top",
          onClick: _this.scrollToTop
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["ArrowUp"], null));
      }
    });

    _this.state = {
      intervalId: 0,
      thePosition: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          _this2.setState({
            thePosition: true
          });
        } else {
          _this2.setState({
            thePosition: false
          });
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.renderGoTopIcon());
    }
  }]);

  return GoTop;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/Layouts/Header.js":
/*!**************************************!*\
  !*** ./components/Layouts/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultStyle */ "./components/Layouts/DefaultStyle.js");



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/ActiveLink.js":
/*!*****************************************!*\
  !*** ./components/common/ActiveLink.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_3__["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, props, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/home-four/About.js":
/*!***************************************!*\
  !*** ./components/home-four/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var About = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "repair-about-area ptb-80"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repair-about-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "sub-title"
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "We have 35 years of experience in repair services"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Experienced Professionals")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Expert Technical Skills")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Excellent Reputation")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Friendly Service")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Trustworthy See Reviews")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Check"], null), " Affordable Diagnosis"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repair-about-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animation: "fadeInDown"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/about1.jpg */ "./static/images/about1.jpg"),
        className: "wow fadeInDown",
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animation: "zoomIn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/about2.jpg */ "./static/images/about2.jpg"),
        className: "wow zoomIn",
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/about3.jpg */ "./static/images/about3.jpg"),
        className: "wow fadeInUp",
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/about-shape1.png */ "./static/images/about-shape1.png"),
        alt: "image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/about-shape2.png */ "./static/images/about-shape2.png"),
        alt: "image"
      }))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/home-four/Cta.js":
/*!*************************************!*\
  !*** ./components/home-four/Cta.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Cta = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cta, _Component);

  function Cta() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cta);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cta).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cta, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "repair-cta-area bg-0f054b"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cta-repair-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "We'll help you get back to work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Contact Us")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cta-repair-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/man-and-women.png */ "./static/images/man-and-women.png"),
        alt: "image"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "circle-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/circle.png */ "./static/images/circle.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cta-shape"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/cta-shape.png */ "./static/images/cta-shape.png"),
        alt: "image"
      })));
    }
  }]);

  return Cta;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./components/home-four/MainBanner.js":
/*!********************************************!*\
  !*** ./components/home-four/MainBanner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var MainBanner = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainBanner, _Component);

  function MainBanner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainBanner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainBanner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainBanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repair-main-banner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repair-banner-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Your Local Computer Repair Experts!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repair-banner-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-banner-img.png */ "./static/images/repair-banner-image/repair-banner-img.png"),
        alt: "image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.6s",
        animation: "zoomIn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape1.png */ "./static/images/repair-banner-image/repair-shape1.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.6s",
        animation: "fadeInLeft"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape2.png */ "./static/images/repair-banner-image/repair-shape2.png"),
        className: "wow fadeInLeft",
        "data-wow-delay": "0.6s",
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animation: "rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape-circle.png */ "./static/images/repair-banner-image/repair-shape-circle.png"),
        className: "rotateme",
        alt: "image"
      })))))));
    }
  }]);

  return MainBanner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/home-four/Services.js":
/*!******************************************!*\
  !*** ./components/home-four/Services.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);









var Services = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Services, _Component);

  function Services() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Services);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Services).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Services, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "repair-services-area ptb-80 bg-f7fafd"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Our Featured Services that We Provide"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-monitor"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Laptop Repair"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-idea"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Computer Repair"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-layout"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Apple Products Repair"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-update-arrows"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Software Update"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-smartphone"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Smartphone Repair"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-services bg6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-hard-disk"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Data Backup & Recovery"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))))));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/home-four/WhyChoose.js":
/*!*******************************************!*\
  !*** ./components/home-four/WhyChoose.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);









var WhyChoose = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WhyChoose, _Component);

  function WhyChoose() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WhyChoose);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WhyChoose).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WhyChoose, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "repair-why-choose-us ptb-80 pb-0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Why We Are Best From Others"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-handshake"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Quick Repair Process"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "back-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-handshake"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-repair"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Free Diagnostics"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "back-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-repair"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-repair-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-delivery-truck"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Fast Delivery"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "back-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "flaticon-delivery-truck"
      })))))));
    }
  }]);

  return WhyChoose;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WhyChoose);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-preloading-screen */ "react-preloading-screen");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/Header */ "./components/Layouts/Header.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layouts/GoTop */ "./components/Layouts/GoTop.js");
/* harmony import */ var _components_home_four_MainBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home-four/MainBanner */ "./components/home-four/MainBanner.js");
/* harmony import */ var _components_home_four_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home-four/About */ "./components/home-four/About.js");
/* harmony import */ var _components_home_four_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-four/Services */ "./components/home-four/Services.js");
/* harmony import */ var _components_home_four_Cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home-four/Cta */ "./components/home-four/Cta.js");
/* harmony import */ var _components_home_four_WhyChoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home-four/WhyChoose */ "./components/home-four/WhyChoose.js");











/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Preloader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_four_MainBanner__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_four_About__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_four_Services__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_four_Cta__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_four_WhyChoose__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    scrollStepInPx: "50",
    delayInMs: "16.66"
  })));
});

/***/ }),

/***/ "./static/images/about-shape1.png":
/*!****************************************!*\
  !*** ./static/images/about-shape1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-shape1-e71b41368bb41ac764696421e06fa98a.png";

/***/ }),

/***/ "./static/images/about-shape2.png":
/*!****************************************!*\
  !*** ./static/images/about-shape2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-shape2-724fe494707877d149a155b9f554dd0b.png";

/***/ }),

/***/ "./static/images/about1.jpg":
/*!**********************************!*\
  !*** ./static/images/about1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgApQEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqG7uBa27Sldx6Ko7mgCais77ZeQMjXUEYiYgZQ8rn1qW6upUmW3tow8xG47jwo96ALlFVbW4mkkeG4iCSpg/L0Ye1VY7rU508yGGAxknaTn1x60AalFMiLmJDIAHwNwHTNPoAKKKRmCqWY4AGST2oAWiqUOoJcX5giKtGE3FvfNTXdz9miDBS7sQqKO5NAE9FUYrm7SeOO6hRVk4VkPQ+hps1zem7kitY4mWMDJfOefxoA0KKgtWuWjJukRXzwE6YqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqOWFJwokGQrBhz3FSVT1NpBabYkdi7BW2DJx3oAgupv7Qb7Hbjcu4eZJ2UA/wA6jeO4n1W6SGXygAm5+4GOg/z2p8V80EYjj024VR0AQ1LP51peNcRQtNHIoDqvUEdDQA20kuYpprSZ/MdU3xv6jpVeOy1GG1VludjIOIh0qzBFPcSzXMimFmj8uMHqo9T+NRi7vRB5BtJDPjbv/hPvmgC9aT/abSObGCw5+veoNSgZ4RPFxNCd6n1HcVPaQfZrWOHOSo5+tQah5sqJbRK3704dwOFXvzQBFYlr65N664VRsiX09TWiQGBBAIPBBrPt4nsb5oURzbSjcpAJCN71o0AZ6xpHrgCIqj7PnCjH8VN1PzTdWaw43ktgnoDgc/hUpR/7ZEm1tnkY3Y4zu6Zp19FKfKngXdJC2Qv94HgigCsv2uwuoRLcGeKVthz1BPSh7K8ku7h0n8hGYEEclsDFODT39xDut3hhibed/BLDpinNPdWk8qvBLPGzbkZOcD0oAfp80ziWC4IaWFsFh3HartU7CKVfOnnXbJM2dvoB0FXKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAr3cnliH995Ss+GfjptJ78dQKjiuZD8iYmYsdrE7QVGOenqcVZeMO0bHOUbcPyI/rSSwiQq25kZejL1/WgCMXQ2o7LtU7gxJ+6V6j9D+VC3asm/aQoj8xvVfb9D+VK1rG0CxHdtU568k98/Xn86ctvGpl4JEv3gen0/n+dAEdveLPJs+Tdt3DZIG49/TrTBesLZJpI0QSY2BpPUZ5OOKsRxGM8yyOMYAYjj9P5037OggjiBYCMAKwPIwMZoAjS8EkQKKrOX2AK+RnGevpiltCzPcl12t5vIzn+FaebfdGFaSQsG3B8jIP5Y/SlhhEIfDMxdtxLHnOAP6UAVxM8M103l7o1cFm3YIGxc4Hep3uBG8iuMbV3D/aH/6/5imtaK8kjGSTEhBdARg4AH9KJIjNdRlkwkXIYkfMf8/yFADp5HSylkHyyLGW9cHFRy3Y2qEEoYugy0TAYLAHkj0qeWMSxPG2QHUqce9EkYkUKc4DBuPYg/0oAgRZftbIbmUqqq2CF5yT7e1RpdyIJvM+Ylm8oY64Yrt/l+dWxGBK0nOWUKfwz/jSLBGoA2hsMWBYZIJJPH50AV4ZZfLtw77mMzoxwOQN3+Aq5UDWwKKFkdCrlwwxnJznqPc09YmG3dNI5Vs5OBnjGDgDigCKDzZkSYzEBsMECjGPT1zQfNmmkVJTGsZC8KCScA9+3NPW2CN8ssipnOwEY/ln9aJLcO5dZJI2Iw2wjn8xQBWa6lBhfI2qHMoA67WCk/qTUkc8kl9gN+5KsFGOpBXJ/Uj8KmW3jUpgcIpQDtg4zn8qUQoroyjbsUqFHAwcf4UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z"

/***/ }),

/***/ "./static/images/about2.jpg":
/*!**********************************!*\
  !*** ./static/images/about2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBVAH5AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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KKKACiiigBGVXXayhgexGaYlvBG25IY1PqqgVJRQAUUUUAFFFFABUbwQyNueKNm9WUE1JRQAAYGB0ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikDAkgEEg4PtQAtFIGBJAIJBwfaloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooArXjAeQGMgUyYby92T8rf3efSo45JgREmRuLMplBJCjH49TVtkVipIyVOR7HBH9TSSQpKBvB4OQQSCPxFAEH2srGkjgBfmVseoz0/I/pSLdsUZymPLiLOvcNzx+h/SpzBEYljKDYpBA9MUqxIpchRlzlvegCC3uJJJNrqcFd2RGyge3PWoxdTi1ilcJum27QqMduQT25NWo4I4jlAemOWJwPbPSjyI/JWLb8igADPTHTmgCBbmVo1G0CRpNgLIVB4znB56frTrTfvufM27vN529PurUn2eLy/LIJGc5LEnPrnrSxQxwhhGuNx3HknJ/GgCqZJYpLuRdnlo4ZgQcn5Fzj0qaW5MMjKwByuY8fxHpj8yPzpzWsLSGQp8zEE/McHHTI/ChomkuUdwuyPlOckk9z+tACXJdbCZicOIicrxzjtUc08mxR5EseZEG4lf7w9DVl0WSNkYZVgQR7UOiuMMMjIP4g5FAFZIVF4675cKiMAZWPOW9/YVCk8kXmAsWMruIsnOGDEY+nQ/nV8IokLgfMQAT7DOP5mhEVBhRgZJ/EnJoApwl1jtlMjN+/dSSeSBv6/kKvVE1vEyBSGADFxtYggnOeR9TSrAi7fvHa24FnLYOMdz6GgCG3QyxRztJJvbDEBjge2OntS7DcTyhpJFEZAUIxXsDnjr1/SpPs0Qk3hSDnOAxxn1x0okt4pW3OpzjGVYjI98daAKbSykwyB2OxZCwHRwrAZx9MmpIZGlvhIHPlOjhFzwQCvP6n8KtCJFZSFAKqVXHYHH+ApSimQOR8wBAPscZ/kKAHUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q=="

/***/ }),

/***/ "./static/images/about3.jpg":
/*!**********************************!*\
  !*** ./static/images/about3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgApQEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqG7uBa27Sldx6Ko7mgCais77ZeQMjXUEYiYgZQ8rn1qW6upUmW3tow8xG47jwo96ALlFVbW4mkkeG4iCSpg/L0Ye1VY7rU508yGGAxknaTn1x60AalFMiLmJDIAHwNwHTNPoAKKKRmCqWY4AGST2oAWiqUOoJcX5giKtGE3FvfNTXdz9miDBS7sQqKO5NAE9FUYrm7SeOO6hRVk4VkPQ+hps1zem7kitY4mWMDJfOefxoA0KKgtWuWjJukRXzwE6YqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqOWFJwokGQrBhz3FSVT1NpBabYkdi7BW2DJx3oAgupv7Qb7Hbjcu4eZJ2UA/wA6jeO4n1W6SGXygAm5+4GOg/z2p8V80EYjj024VR0AQ1LP51peNcRQtNHIoDqvUEdDQA20kuYpprSZ/MdU3xv6jpVeOy1GG1VludjIOIh0qzBFPcSzXMimFmj8uMHqo9T+NRi7vRB5BtJDPjbv/hPvmgC9aT/abSObGCw5+veoNSgZ4RPFxNCd6n1HcVPaQfZrWOHOSo5+tQah5sqJbRK3704dwOFXvzQBFYlr65N664VRsiX09TWiQGBBAIPBBrPt4nsb5oURzbSjcpAJCN71o0AZ6xpHrgCIqj7PnCjH8VN1PzTdWaw43ktgnoDgc/hUpR/7ZEm1tnkY3Y4zu6Zp19FKfKngXdJC2Qv94HgigCsv2uwuoRLcGeKVthz1BPSh7K8ku7h0n8hGYEEclsDFODT39xDut3hhibed/BLDpinNPdWk8qvBLPGzbkZOcD0oAfp80ziWC4IaWFsFh3HartU7CKVfOnnXbJM2dvoB0FXKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAr3cnliH995Ss+GfjptJ78dQKjiuZD8iYmYsdrE7QVGOenqcVZeMO0bHOUbcPyI/rSSwiQq25kZejL1/WgCMXQ2o7LtU7gxJ+6V6j9D+VC3asm/aQoj8xvVfb9D+VK1rG0CxHdtU568k98/Xn86ctvGpl4JEv3gen0/n+dAEdveLPJs+Tdt3DZIG49/TrTBesLZJpI0QSY2BpPUZ5OOKsRxGM8yyOMYAYjj9P5037OggjiBYCMAKwPIwMZoAjS8EkQKKrOX2AK+RnGevpiltCzPcl12t5vIzn+FaebfdGFaSQsG3B8jIP5Y/SlhhEIfDMxdtxLHnOAP6UAVxM8M103l7o1cFm3YIGxc4Hep3uBG8iuMbV3D/aH/6/5imtaK8kjGSTEhBdARg4AH9KJIjNdRlkwkXIYkfMf8/yFADp5HSylkHyyLGW9cHFRy3Y2qEEoYugy0TAYLAHkj0qeWMSxPG2QHUqce9EkYkUKc4DBuPYg/0oAgRZftbIbmUqqq2CF5yT7e1RpdyIJvM+Ylm8oY64Yrt/l+dWxGBK0nOWUKfwz/jSLBGoA2hsMWBYZIJJPH50AV4ZZfLtw77mMzoxwOQN3+Aq5UDWwKKFkdCrlwwxnJznqPc09YmG3dNI5Vs5OBnjGDgDigCKDzZkSYzEBsMECjGPT1zQfNmmkVJTGsZC8KCScA9+3NPW2CN8ssipnOwEY/ln9aJLcO5dZJI2Iw2wjn8xQBWa6lBhfI2qHMoA67WCk/qTUkc8kl9gN+5KsFGOpBXJ/Uj8KmW3jUpgcIpQDtg4zn8qUQoroyjbsUqFHAwcf4UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z"

/***/ }),

/***/ "./static/images/circle.png":
/*!**********************************!*\
  !*** ./static/images/circle.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/circle-1c6521092255ec036985980094fb56b8.png";

/***/ }),

/***/ "./static/images/cta-shape.png":
/*!*************************************!*\
  !*** ./static/images/cta-shape.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cta-shape-1db2a22eef1c435539f1f87747b128c4.png";

/***/ }),

/***/ "./static/images/logo.png":
/*!********************************!*\
  !*** ./static/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAeCAYAAACliqkCAAAEd0lEQVRoge1aMWzbRhR9MoSMpJA5QJUhU4aK3DrFBtqNRG2gCDIksDN0re2hRVGgkd0CHdrBbecCVuCp7WAD0tZB8tRNVKcOGaICWeOYWgq4g4ovvFO/GYo6yrKtNHwAwdPx7vP47u7/90mVhsMhsvD7Fy/k6g0A3wF4CKAE4ADApwDO3vvmVmb/AukoW/LyLYBP1G8p/w3g84LX2bBk2etRSt3H1z34Nxm2xN+0rCtgCVviC8wZ5Q+irYkWf/O+t7pblo08dt4mLFGx/ADgJYATlm/MwMG87LwVKM9RsRTKJwfKGYolL2FzseP6YQXAHoBVABVWnwI4ArAdd5unqm2NbQXbg6jVyznm3HC8YAPAuvQbRK0VnQe5frgMoJ1is8fjadxtdkBXMy/FcmE7JF0GvkHSZZB9lqWuzTYGUl7mUcm2PjdU1T1tUVPjl/PCqZo6Bylk3467zZW427wN4DGv17gTcsPxgqrjBcuOF+SeIMcLann7xN1mSR8AGry07/ph1TZzvSqYB5Qt2VcP0XD9cJ0/R8S5frjDiTJoO14gxY64AEXaKt1RVdV1OJn7XLm7g6i1w2vGrrTZBnDIviXHC9p6pTteMHT9UIq7cbe5M2UiHpvVLotn0Yg3eCdZIas/UdWn3zST1WMsGPt5+uN91aej3FNEG5Ng3J7eIT1OQlXZwxQ7yTFL38qiEX9MUjZcP/xLtqde+RrcBX0VzCS4GiJGrkUFXiFsbRC1+vjPdbTVpKWhxn67nFAJptuOF8RmpyWDaxYoBMYTtmjES6Z1j+TLw9VdP+xxZR3H3eZRDltGFQlpK4OoNVZDon4cL1iboEA0zvXLA7pCA5fBVdATZbNQxFMqrlCWrXMCajy2XD+UCVjTkjIDH/JSJ4082R2OF/QyVn1qvxyopzQdjR85XgtfKah1R25DFABXS50TsadUjg3+yGhzEWKn4bWYpN2mLfEnKZr85BIHPQYHu+P6oWzXLa1OpsCQ+m5Gs0vT/iZRmgRbHX+QUvfT3EZJuH645/qhJBl7KZdjnm3JOuZ5lYH2HETTTwmulwpb4j8D8COAVzyk/OUlDKyiVM2YFGarRsfr1wK9RF+Nhlr1h5p8kn444xi1XJ15x9gSfwZgk+7mJstns940A0a6yQNFXP2iPJ7TxfSZ1IzAIGv8ppA7ZJIDBkbTVibxueMFkRxUM/3ExNlC93nl+uEwoWCsMNXHX+XHbPHnrh96DKQbifchjeRLMmKN7V97lTCIWg3HC/oMyDXlWo4YoHOveskFKEXrF3FVpfe7m5MygJJ8wJj2kUMh084soKLBpCRqZLxUsrJMtzBKii4oE8/BNoFKopxDsdwH8ATAHQDPAHwF4JdEn7kqnyzCDXI8+KlK8a8dS5aK5SMAPwO4y69Kd/n7vmpzJcrn/4IyFUtJfcg4SFEsk4LHE7XqbewUIMpKsWxmkHLHot7GTgFDvGXge0b3klZf/ItgBtjq+N0J9V9f28jfcNgS/yuABwD+BPAPzw8YYAvkBYB/ATEKjF1ZBIw2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/man-and-women.png":
/*!*****************************************!*\
  !*** ./static/images/man-and-women.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/map.png":
/*!*******************************!*\
  !*** ./static/images/map.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-caeeab2fb5d346ea94236e9df14bfff0.png";

/***/ }),

/***/ "./static/images/repair-banner-image/repair-banner-img.png":
/*!*****************************************************************!*\
  !*** ./static/images/repair-banner-image/repair-banner-img.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/repair-banner-image/repair-shape-circle.png":
/*!*******************************************************************!*\
  !*** ./static/images/repair-banner-image/repair-shape-circle.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe4AAAG+CAYAAABVmeehAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ0RjRFQTRBM0IxMTFFOTg1RTRDQ0FERTNCNUVDN0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ0RjRFQTNBM0IxMTFFOTg1RTRDQ0FERTNCNUVDN0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTQ2ZjA5YmUtY2RmYy02NjQ1LWJmM2ItMDVlZjY3N2Q3ZjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrCMJ1YAAA2eSURBVHja7N19sOVzHcDx37a7siuxNtqSh7WUhytPlTBiTNmhJYxG+idZU4NEqkmpaRg9/oFBSJbIRGWmGMMupvxhxzQpZTc9YhOb1mPCYuX0+fb73vbnOM/37jnn3n29Zj5+59xzztr9nrv3vb/z8DtTTvj1ymKtWuW/1RON1eqvVGt1vQbnaq2uV/fV9v+btZfW2v7Wy2vWOvrVKidq7f98tbZ/6uT18YV7YrthzK5x6XNNf/Vai/VuuUy1Fn/m5v+T1kvS2fdHrc2dVWtx3za+Sa3V1bu+72u1Du7zTu7vWtM/UdMrt7+Px3D/1lp/19Xa/Ab6e79OnPu0H/drJ3+/a+3+lozx7+1rfped3Mc9/P3t5P7uID/l77eDH/S19j/YevtZ3/yHf7sfof8/s2zh/KIXrysYhLfE7BQzN2Z7ywGAcE8cUywBAMINAJPQNEvQF5vG7FbZu55Tuexd+fIkPQNyb8xTlgwA4R6c22P2anLZ9+rO3xeziyUDoBEPlffH/V1c9wHLBYBwD9YxRfkw+ejMrVy2R91lh1kuAIQbAIQbABDuye8/ldMvWw4AOuVV5YPxSMzVRXnI0z9aDgCEe7i9EvMxywBAtzxUDgD2uCelt8d8qPjfp3kVmxfl0c2Wx9yYt9CrfWNOijk75s+WAxDusdkq5tyYo5tc/rWYm2NOj/mT5aIHn405KubRmM9ZDkC4e7d3zC0xs/L5x2J+nn/Apr3uA2K2jDk0nz6iKA9vCt2Y6u8jINxjl45utrgoPwDk2bxHfWXx6rdvpSOdHRtzQczsonzYPD3s+VvLB8C64MVpzV2Yo/1MzH5F+WEg9e+5Tp/m9cO8Z74qZkbMpYXP2AZAuPsqfZLXB/PpU4ryozZbSR8iclw+nSJ+sCWkiffE/CFmRWVGv1+Or/t6euRmriUDqjxU3thReftgzDUd3iY9F353UX6+dnoh2xLLSAPpH3Y7Nrls4zyjtonZOX8fAgh3C3vk7a1FebCUTi3O4d7NEtJEeiolvbhxo8rXPp2/524ryqdeRj1RlO9YABDuNrbI25Vd3u6RuttDvTUxP6n72hE53PfFfN8SAa14jruxJ/N20y5vt1nePm0JARDu/vlL3h7Q5e3el7eOfgWAcPfRjXm7Z8z+Hd5mJOYDdbeHbv6h6Mh7gHD3KL1I6Hf5dDroyuw2158Z84O8nitifmwJ6cIXivIV5JdYCkC4e5NeSf6pvJ0XszTvfTfyjpg7Y3bP50+LeckS0uX320OWAeiEV5U3l2KcDohxRY5zeo/24rw3virvhR8Us6BYe6zp9AERN1g6AIR7MK4qyreEXRyzfcwheeo9XJTvxf2pJQNAuAcr7WGno1cdU5Tvt00vQkvv0368KA9dmfawr41ZbakAEO7hkA6acU3R+eFPAWCd8OI0ABBuAEC4AUC4AQDhBgCEGwCEGwAQbgBAuAFAuAEA4QYAhBsAhBsAEG4AQLgBQLgBAOEGAIQbAIQbABBuAEC4AUC4AQDhBgCEGwCEGwAQbgBAuAFAuAEA4QYAhBsAhBsAEG4AQLgBQLgBAOEGAIQbAIQbABBuAEC4AUC4AQDhBgCEGwCEGwAQbgBAuAFAuAEA4QYAhBsAhBsAEG4AQLgBQLgBAOEGAIQbAIQbABBuAEC4AUC4AWCMpsScE/N5S9G5aZYAgAHZOebMfPrqmH9aEnvcAAyv6ZXTMyyHcAOAcAMAg+M5bgD65aKYBZXzG1RO3xnzcj5dK8rnvL9qyYQbgMH5cMwWTS7bsu78kcIt3AAM1vtj9qqc3zrmrHw6vSXs8cplSy2XcAMwWMvyjNq9Eu7rY1ZYova8OA0AhBsAWBc8VA7AoKyMeS5mdcw/LIdwAzDcVsVsF7Mm5kXLIdwATIx40wXPcQOAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcVYfH7GN5AGC4NPp0sF1jboh5IWaTmJcsEwAM7x737LzdMGamJQKA4Q43ACDcAMBYpee4PxGzb+VrcyqnLy5e/Rz3dTGLLRsADC7cF8VMb3L5sXXnR4QbAAYb7hNj9q/b456fT19b2eOu5fMAwADDvSjPqAMr4T4p5mnLBADDwYvTAEC4AYB+hfuJvE1HTnveEgHA8Gh0yNNlMYfFPFY43CkADH24k5ssDQAMH89xA4BwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcAIBwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcAIBwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcAIBwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcAIBwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAMINAMINAAg3AAg3ACDcAIBwA4BwAwDCDQAINwAINwAg3ACAcAOAcAMAwg0ACDcACDcAINwAgHADgHADAMINAAg3AAg3ACDcAIBwA4BwAwDCDQAINwAINwAg3ACAcAOAcAMAwg0ACDcACDcAINwAgHADgHADAMINAAg3AAg3ACDcAIBwA4BwAwDCDQAINwAINwAg3ACAcAOAcAMAwg0ACDcACDcAINwAgHADgHADAMINAAg3AAg3ACDcAIBwA4BwAwDCDQAINwAINwAg3ACAcAOAcAMAwg0ACDcACDcAINwAgHADgHADAMINAAg3AAg3ACDcAIBwA4BwAwDCDQAINwAINwAg3ACAcAOAcAMAwg0ACDcACDcAINwAINwAgHADAMINAMINAAg3ACDcACDcAIBwAwDCDQDCDQAINwAg3AAg3ACAcAMAwg0Awg0ACDcAINwAINwAgHADAB0YWbRk9sjlS94m3AAw/NGeGpvlMQ9EvLcVbgAYbhvHzImZHiPcADCRCTcATCDTLAEADM7IoiU7xOaQys70jMrFR+9y+ZLdy5O19J+7hBsABuuqmH2aXHZy3fnnhRsABuv6mJmV8+lV5SP59P0xz1Yu+6VwA8AALV84/9zYnDt6fmTRkk1j81Q+e8LvT5h/R/X6XpwGABOIcAOAcAMAPXqxyC8hD6uFGwCG2PKF81OsT4w5O+bu+su9OA0Ahi/e3212mT1uAJhAhBsAhBsAEG4AEG4AQLgBAOEGAOEGAIQbABBuABBuAEC4AQDhBgDhBgCEGwAQbgAQbgBAuAEA4QaA9c00SwAwMd31kf0tgj1uAEC4AQDhBgDhBgCEGwAQbgAQbgBAuAEA4QYA4QYAhBsAEG4AEG4AQLgBAOEGAOEGAIQbABBuABBuAEC4AQDhBgDhBgCEGwAQbgAQbgBAuAEA4QYA4QYAhBsAEG4AEG4AQLgBAOEGAOEGAIQbABBuABBuAEC4AQDhBgDhBgCEGwAQbgAQbgBAuAEA4QYA4QYAhBsAEG4AEG4AQLgBAOEGAOEGAIQbABBuABBuAEC4AQDhBgDhBgCEGwAQbgAQbgBgXZtmCYAJam7M0TF7x7w15t8xD8bckuclS4RwAwzerJhvx3w8ZmqDyz8Z80DM6TE3WC6EG1qbEnN4zL157wfGey/7tph5+fzjMYtj/hYzI+997xuzXczPYs6J+YplQ7ihucPzD8wU7t0sB+PoDTE352i/nIN8fswLddd7Z8xlOeJfjlkZc4nlY7Lw4jTG26y83cRSMM7OiNkx5pWYI2O+2SDaRf5H44Exv8jn08PqW1g+hBugv3vbn8mnz4u5qc31U9CPiXkm3/Y0S4hwA/TPwTEz8972tzq8zWMxi/LpIywhk4XnuBmrU4vyBUOjds7bzYry+cdR6QfuFTHLLRk9GMnbe3KQO3Vr3lPfKWZ6zBpLiXCzPptXF+eqjXPUq+bEfNSy0YM35e2jXd6uev3ZPdwehJtJJb1X9huVvexk65g9YlbnvZ1RaU/nAktGj57O2827vN3syumnLCPCzfquFvOluq8dF3NlzKrC84qMn/vyds+ifMfCvzq83UF5e3/Mi5aRycCL04CJIB3CdE3e2Ti1w9u8sSiPopbcaAkRboD+SXvYowdROTNmvzbXT4dCvaooHypPbw073xIi3NDYs3n7vKVgnJ0V83DMBkV52NPjm/wM26oo3+c9+lRNOuzpQ5aPycJz3Iy3dLjThTG/sRSMsydjDo25vSiPhJbeo31GjvRfi/KdDOkwp4fEbJhvc2nM1y0dwg3NpWNIX2EZWEeWxewVc3HMYTE7FGuPqFb1RFG+cPIyS4ZwAwxWerg8fZjNu4vysKbvjXlzUT49kz6RLn0QyY+Kzl953ql02NT08PtxMSvcDQg3QHd+ladfTinKjwtdEHOR5WdQvDgNoDNT7fAg3ACAcAOAcAOsP04uyk+0q1Vmm3zZeXVf/3vMLEuGcAMMzrYxUzq8bnpF+0aWjH7xIguA1/piUR5MaHrla9flSH8n5vrK11cU5VvUQLgBBiQdSGhp3ddeyNt0lLY7LBGD4qFyABBugEmrZgkQboDhlz6RLB1WdamlYJD+K8AAIRDswxljJxQAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/repair-banner-image/repair-shape1.png":
/*!*************************************************************!*\
  !*** ./static/images/repair-banner-image/repair-shape1.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/repair-shape1-92a06fa38b0dd3379d45c2901fe9176d.png";

/***/ }),

/***/ "./static/images/repair-banner-image/repair-shape2.png":
/*!*************************************************************!*\
  !*** ./static/images/repair-banner-image/repair-shape2.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/repair-shape2-0853cd9e1a22bbe1288268bffe9b6ffa.png";

/***/ }),

/***/ "./static/images/shape1.png":
/*!**********************************!*\
  !*** ./static/images/shape1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/shape2.svg":
/*!**********************************!*\
  !*** ./static/images/shape2.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mfrasfan/Documents/Coding/TechTitans/default/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map