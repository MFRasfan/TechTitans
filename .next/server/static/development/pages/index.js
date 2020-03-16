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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ActiveLink */ "./components/common/ActiveLink.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/Layouts/DefaultStyle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import * as Icon from 'react-feather';


const ScrollLink = react_scroll__WEBPACK_IMPORTED_MODULE_4___default.a.ScrollLink;

class DefaultStyle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    // let { products } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let {
      pathname
    } = this.props.router;
    let layOutCls = '';

    if (pathname == '/home-three') {
      layOutCls = 'p-relative';
    }

    return __jsx("header", {
      id: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      id: "navbar",
      className: `startp-nav ${layOutCls}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      onClick: () => window.location.refresh(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/TT.png */ "./static/images/TT.png"),
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      onClick: e => e.preventDefault(),
      href: "/",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Home")))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "About Us")), __jsx(ScrollLink, {
      to: "example-destination",
      spy: true,
      smooth: true,
      duration: 500,
      className: "some-class",
      activeClass: "some-active-class",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Services"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Contact"))))), __jsx("div", {
      className: "others-option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("a", {
      className: "btn btn-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Support")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(DefaultStyle)));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/Layouts/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer-area bg-f7fafd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-3 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/TT.png */ "./static/images/TT.png"),
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget pl-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Company"), __jsx("ul", {
      className: "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Home"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "About Us"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Services"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Contact Us")))))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Support"), __jsx("ul", {
      className: "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "FAQ's"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Privacy Policy"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Terms & Condition"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Community")))))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Address"), __jsx("ul", {
      className: "footer-contact-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), "2761 Markham Rd #27,  ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), " Scarborough, ON M1X 1M4"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), "Email: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "info@techtitans.ca"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["PhoneCall"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), "Phone: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "+ 1 (416) 335-4777")))), __jsx("ul", {
      className: "social-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      className: "facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Facebook"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("a", {
      className: "twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Twitter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("a", {
      className: "instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Instagram"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("a", {
      className: "linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Linkedin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }))))))), __jsx("div", {
      className: "col-lg-12 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      className: "copyright-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Copyright @2020 APOSTROFFI. All rights reserved"))))), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/map.png */ "./static/images/map.png"),
      className: "map",
      alt: "map",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx("div", {
      className: "shape1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape1.png */ "./static/images/shape1.png"),
      alt: "shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })), __jsx("div", {
      className: "shape8 rotateme",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape2.svg */ "./static/images/shape2.svg"),
      alt: "shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/Layouts/GoTop.js":
/*!*************************************!*\
  !*** ./components/Layouts/GoTop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/Layouts/GoTop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GoTop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onScrollStep", () => {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    _defineProperty(this, "scrollToTop", () => {
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    _defineProperty(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return __jsx("div", {
          className: "go-top",
          onClick: this.scrollToTop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ArrowUp"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }));
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, this.renderGoTopIcon());
  }

}

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
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/Layouts/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx(_DefaultStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/common/ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/home-four/About.js":
/*!***************************************!*\
  !*** ./components/home-four/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/home-four/About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-about-area ptb-80",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "repair-about-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("span", {
      className: "sub-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "About Us"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "We have 15 years of experience in repair services"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), " Experienced Professionals")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), " Expert Technical Skills")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), " Excellent Reputation")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), " Friendly Service")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), " Trustworthy See Reviews")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), " Affordable Diagnosis"))))), __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "repair-about-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "fadeInDown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about1.jpg */ "./static/images/about1.jpg"),
      className: "wow fadeInDown",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "zoomIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about2.jpg */ "./static/images/about2.jpg"),
      className: "wow zoomIn",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "fadeInUp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about3.jpg */ "./static/images/about3.jpg"),
      className: "wow fadeInUp",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about-shape1.png */ "./static/images/about-shape1.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about-shape2.png */ "./static/images/about-shape2.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }))))));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/home-four/Cta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Cta extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-cta-area bg-0f054b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "cta-repair-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "We'll help you get back to work"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Contact Us")))), __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "cta-repair-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/man-and-women.png */ "./static/images/man-and-women.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))))), __jsx("div", {
      className: "circle-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/circle.png */ "./static/images/circle.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), __jsx("div", {
      className: "cta-shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/cta-shape.png */ "./static/images/cta-shape.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/home-four/MainBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MainBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "repair-main-banner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "repair-banner-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Your Local Computer Repair Experts!"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("a", {
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "repair-banner-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-banner-img.png */ "./static/images/repair-banner-image/repair-banner-img.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "zoomIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape1.png */ "./static/images/repair-banner-image/repair-shape1.png"),
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "fadeInLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape2.png */ "./static/images/repair-banner-image/repair-shape2.png"),
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "rotateme",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/repair-banner-image/repair-shape-circle.png */ "./static/images/repair-banner-image/repair-shape-circle.png"),
      className: "rotateme",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })))))));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/home-four/Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Services extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-services-area ptb-80 bg-f7fafd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Our Featured Services that We Provide"), __jsx("div", {
      className: "bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-monitor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Laptop Repair"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-idea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Computer Repair"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Apple Products Repair"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-update-arrows",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Software Update"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-smartphone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Smartphone Repair"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-services bg6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-hard-disk",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Data Backup & Recovery"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))))));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/components/home-four/WhyChoose.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class WhyChoose extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-why-choose-us ptb-80 pb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Why We Are Best From Others"), __jsx("div", {
      className: "bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-handshake",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Quick Repair Process"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx("div", {
      className: "back-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-handshake",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-repair",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Free Diagnostics"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx("div", {
      className: "back-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-repair",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "single-repair-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-delivery-truck",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Fast Delivery"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx("div", {
      className: "back-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-delivery-truck",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WhyChoose);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

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
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Preloader"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "preloader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: "spinner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx(_components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx(_components_home_four_MainBanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_components_home_four_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx(_components_home_four_Services__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx(_components_home_four_Cta__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx(_components_home_four_WhyChoose__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
  scrollStepInPx: "50",
  delayInMs: "16.66",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}))));

/***/ }),

/***/ "./static/images/TT.png":
/*!******************************!*\
  !*** ./static/images/TT.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAGLBAMAAAC4qL9hAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHGklEQVR4nO3az1PbRhTA8ZUs2Tp6TTE9WiFNOeI0mfYokx/0iJk206OdMiVHQzOc7SSd9s/uvrcrS2AghdZGk34/M5FlS2L26e2udlcxBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFiToQ07F/mTn8Luq7f9Z7de9Optb3ce9g/f9k7XVLb/TmZDmAfWmeluKrtHt1zUkhN6c93vyP6e7kbWm62xvPcUhzAzLeC27g9ld+vma5KpnryjX8a6P5fdUXPDHIcwR1UJU797czpbIZy5Ccm09rH8vmhsmIkNYU7tdnFo7cBIaXvvD3P71Y0XyQnJuT/Z3Z6f3L7m/qyxYbZCmB3NzYFWxKnk5uCWWju0E93u6NbdjiS3hdsf935WxdqLfVeLEGZby9yxfU1wUW6v5w/FeiN87hZaxYf99Rf4fvItH+ZCE2TkS+rzOLyxcWb+hI7thY2EPHDb6fa6i3tPqX3swxz7vnLq8tS2X8tuCPzai7SPTeTKlu+cU23J+c66y3tPIzvzYU41KeYP165Gmhn3EOyGk3L/w9h/SGi+d5Irwz3JNPL86w0V+66GPS2sy0zV4YQ0hgCMdKA7ekrZg7b8DUikvsb+rESTekvn/KAyV0gNM7NVfRv7RpnasqW1tf21fCt0Oj9rvNpfRWVmtyTWrmmk2O77MNNaIoY2RFEmONOhwsheqZJtuQ9Rmdm+nDfYRKHvbux6HA1T6qEbur+XH6e+N9JkeUMp//RqlzSWWxP7+5P4XnfyKu99v5mi34G2KA2zbQfLoXvuw8yWldQlcltSWly69lzPjssuqCdV4nk1jG+QlmRJw4ztSV6O1/2Iph6mG+QW7cujonEYuvthhZxRDXWbNtZbSN5CmL8ux+shzKQK043l9hd+dF4aL4f5Gn3bP1xsbebSHLm0vhBmbn8oPlqpgmEsn5QTUSOPlK/yy0mSMLcKU9blhZzs5nTfFofTW0aJD8J3rxpNpAG60vaXYZpamLHtVblVOsucGMn9RNPdkz+ypX/Vdd9NMtIHZBmmJKtjtest5Gg9mzLnvvI4ST76lnzmJ2V5T/7eRI4MGzZKGGqCQpg+WbmLfLVtytNkdYR7oPcj9Dvyt7I/9cK4WY0zjHxC2/RDnrGrcKs9rU6ei9XrtTbogsnOtJqDpbetr2xeu5p7lY8/1zgH1zw3rw8zzK41nbO8Ci270owfWGyXZmEwo7OT1VGQLoKt9isLP7j7mPefGVtNNZPmhtkOo24Zoq6Maf2KUdWv/PhXoZ+jaqheH/rXu+gGqIeZhhJLNldmKP7BX+X2LKwrVDNSd09qHXFzs9kJyZJ6uDLflJ93wlKs/+Yr8KiakaS1OVjDKm0Q5ps+pjMXYnR19UCfM9MqpvB81DDbv72T3dj9lDza1Z8vNerG8C0p9JRSYVfXgmTUsKhaX7gP7p7slw9JHWmELLZsE1e+fJjDcngwv2ZlT56q1eLBsjrLMDdMXGTiWnbRK/PvRigXMKW9pRLL6jqtLHYl1duGTrmA6c5I/ck6CRiXg73B5kr/j/kw/TDoLCykX1519xFWQ9Ww+HXm13/k/vhZ50j/Rnr7y7SHsny58E4mYhMjxb38DsXX11EV99BufUou/Puhqe1/yqbleEgnYk3saMuHub7ss73CrL4RG2mu0qoWH9SWCcKbNDmUhJ+b2DTLMA9qJRyW6yVeeJbky643q60SdGrXhRd/880U/G7KoZnE1i909/Lb6iys7pxVadJ70p/r/ge7fHGd6XrSySZKfW/ZU7v87wQvpp/5vwe/59X/PbjInyz74Kf2yS/rKR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Oei8O8L90WFaXvPbjhyJcyu+xZZa03PmLgrX50X+akxr+2JiQbG5Ost6b/STb674cg1Yeq2PzcXIczkm+Kj27w8LqJ3pjNdf2nvrWsOzNNdExcdt5M+2jfRcVc+Wo/G7mh0vGvaM3ekFubOxJyGMFtHfpPuRxemffaQcXyGCzM9eX3Umo3M7+bNy+cmOtGPNy8lOZE7lA3Mc1MLs7uXDUKYceE3ySCK5x+a3JBdpY2LZJDtH89+MI9d3qJCPx6bkTsauUPm1P1zjVjapYZ50Z6FMKNy0406k9Mmh+m6IE3SYG8ykFCk1PLRLdtm13xozUw9m/G5Wc2m+XbQ5DC7Uk5J2eTdxKVQY5GPWjbj43BiCDPdNqtt04yPGh6mtE1zPDs/MhfFC4lFPqq2aTo74cQQpn7Rba2nNc1+yEpxXU9rFsWoMJ18TworH1VPazqDcGI9TF+xX9jyuWmaHeY/0J49dAk24vyhC7AR0d5DlwAA8L/0N7yq8GMz7BppAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/repair-banner-image/repair-shape-circle.png":
/*!*******************************************************************!*\
  !*** ./static/images/repair-banner-image/repair-shape-circle.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe4AAAG+CAYAAABVmeehAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ0RjRFQTRBM0IxMTFFOTg1RTRDQ0FERTNCNUVDN0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ0RjRFQTNBM0IxMTFFOTg1RTRDQ0FERTNCNUVDN0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTQ2ZjA5YmUtY2RmYy02NjQ1LWJmM2ItMDVlZjY3N2Q3ZjM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

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

module.exports = __webpack_require__(/*! /Users/mfrasfan/Documents/Coding/TechTitans/pages/index.js */"./pages/index.js");


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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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