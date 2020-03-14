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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/mfrasfan/Documents/Coding/TechTitans/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["initStore"])(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    let {
      query
    } = this.props.router;
    let style = '';

    if (query.style == 'brink-pink') {
      style = 'brink-pink-style.css';
    } else if (query.style == 'pink') {
      style = 'pink-style.css';
    } else if (query.style == 'purple') {
      style = 'purple-style.css';
    }

    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["DefaultSeo"], {
      title: "StartP - React Next IT Startups & Digital Services Template",
      description: "StartP is a React and Bootstrap 4 based Professional website template. This has been built with React, ES6+ and as framework Next.js and Express.js.",
      openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://startp-react.envytheme.com/",
        site_name: "StartP - React Next IT Startups & Digital Services Template"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: `/static/styles/style.css`,
      key: "color1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: `/static/styles/${style}`,
      key: "color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: `/static/css/responsive.css`,
      key: "res",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))));
  }

}));

/***/ }),

/***/ "./static/images/shop-image/shop-image1.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image1.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image2.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image2.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image3.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image3.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image4.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image4.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image5.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image5.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image6.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image6.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image7.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image7.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./static/images/shop-image/shop-image8.jpg":
/*!**************************************************!*\
  !*** ./static/images/shop-image/shop-image8.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBQAEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKq6g0otgkO4PIwTco5UHvQBaorIubNNOiFzBJIGRhuBbO8Z70+9eOa7aKeYx28SgsAcbmPQflQBqUVRsESPzGgn8y2P3QTkqe9ZtvBp0saNcTbZnySN2AOf0oA6CimRRrFEka/dUADPpUc90lu8SyBsSNtDdgfegCeioTcoLtbYBmcruOOij3p05kWBzEMybTtHv2oAkorGmsEt7I3DzSLchd24v/F6VZuDNcQ2kQ3p52DKy9hjJHtQBoUVlvbLp1zbvA7hJJBG6E5Bz3pfIGo3c5mZvKibYig457mgDToqlp7OvnW0jFzC2Ax6lT0q7QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMlvC0shwqipKr3ts11CqLL5ZDBs7c9KAKyQT3sizXQ2RKdyQ/1ampbRTaxdGZQ+AhVW6dOuP8APWnfYLz/AKCT/wDfH/16nurLz5FljlaGZRjevOR6EUAVY44rbUriNPkhaDe4HRTn/CpBp1l9iIVFKlciQ9frmp7ayWBZN7tK8n32bv7fSq39lOF8oXkot/8Annjt6ZoAn0xmfToC3Xbj8jxS6kIjp8vm/dxx9e1WERY41RBhVGAKgubX7VJFvf8Ado24pj7x+tAFTRsMkzSFjcFgH3dcdq0ZpVgiaR87VGTgVCbT/ThdJJtJXa64zuqeRFljaNxlWGCKAM3UrKOeJr1XYOqbh6HHNWjeCKxincFndVwq9WYjpVcaW+0RNeSNbj/lnjt6Zqe7s2uDCYpvJ8rOMLmgBkFtNLOtzdkbl+5EOif/AF6NO4lvEP3hOzfgelJHZXaSKzag7KCCV2dR6dafcWJknM0E7QSMMMQMhqAG2fzahfOOm5V/EDmr1Q2tslrCI0yecsx6k+tTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUc03lbPkZy7bQFx6E9yPSkW5jKFnPl4O0hyBg0AS0UgdSQAw+YZHPUUblJA3DJGQM9RQAtFNSWOTOx1bHXac4ponhZWYSxkKASQw4oAkopnmx+X5m9dn97PH502GbzmlwVKq+FK9xtB/rQBLRUCXCmaSN3RWVwqjOCflB/rUwZSSARkdRnpQAtFMeVUgabO5FUt8vORjPFEkgjUMc4LBePcgf1oAfRVdblml8v7NKCACcleAc89fY06O5jkEpGV8piG3e3f6cGgCaioIrpJY4nCsPMYqARyCM9fyNT0AFFQrcB2+WORkzjeAMfzzRJcBHKLHJIwGW2AcfmaAJqKgN3EHhXk+bnaccDGOv504XCG6NuAdwXcT27cfXkUAS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQXETytDsZl2vksuMgbSO/1qNoDFIkiK02N27JGSTjnsO2Pxq3RQBSa3mFrGIwBIGPAP3Q2ePwyPypUtZAk0ZO0bPLibPQc/4gfhVyigCpawuku5xINqbfmKY7dNo/nTfsziwt0UFXj2llXGScc9eOtXaKAKSwSCMNsdiJfMKOVyeMduPepbVHUzM0fl75NwXIPGAO30qxRQBRkhlZ7pRBnziNsmRx8oGfXg065QtdIiHHmqVk/wB0d/1I/GrlNCIrs4VQzdSByaAGXMZe0ljQcmMqo6dqiltBtUoZSwdDhpWIwGBPBPpVqigCJUYXcjkfKUUA+4LZ/mKgFmXGWbbl33jGd6lyQP8APqauUUAU/LlRIiI2YrO7lVIzg7sdT7irCyO239yy5bB3EcDHXgnvxUlFAFaDzYUSAwkhcKHDDGPX1zQfNhmkZIjIshDcMAQcAd+3FWaKAKX2Rm2K/dJNzD+FmYMMf57VJFbtHOjE7vlfe/TJJXt+H6VZooAKKKKAP//Z"

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initState = {
  products: [{
    id: 1,
    title: "Wood Pencil",
    price: 350,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image1.jpg */ "./static/images/shop-image/shop-image1.jpg")
  }, {
    id: 2,
    title: "T-Shirt",
    price: 120,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image2.jpg */ "./static/images/shop-image/shop-image2.jpg")
  }, {
    id: 3,
    title: "Casual Shoe",
    price: 160,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image3.jpg */ "./static/images/shop-image/shop-image3.jpg")
  }, {
    id: 4,
    title: "Coffee Bag",
    price: 130,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image4.jpg */ "./static/images/shop-image/shop-image4.jpg")
  }, {
    id: 5,
    title: "Single Chair",
    price: 90,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image5.jpg */ "./static/images/shop-image/shop-image5.jpg")
  }, {
    id: 6,
    title: "Business Card",
    price: 180,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image6.jpg */ "./static/images/shop-image/shop-image6.jpg")
  }, {
    id: 7,
    title: "Book Cover",
    price: 330,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image7.jpg */ "./static/images/shop-image/shop-image7.jpg")
  }, {
    id: 8,
    title: "Wall Watch",
    price: 140,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image8.jpg */ "./static/images/shop-image/shop-image8.jpg")
  }, {
    id: 9,
    title: "Wood Pencil",
    price: 430,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image1.jpg */ "./static/images/shop-image/shop-image1.jpg")
  }, {
    id: 10,
    title: "T-Shirt",
    price: 650,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image2.jpg */ "./static/images/shop-image/shop-image2.jpg")
  }, {
    id: 11,
    title: "Casual Shoe",
    price: 230,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image3.jpg */ "./static/images/shop-image/shop-image3.jpg")
  }, {
    id: 12,
    title: "Coffee Bag",
    price: 670,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image4.jpg */ "./static/images/shop-image/shop-image4.jpg")
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread({}, state, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread({}, state, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread({}, state, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread({}, state, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread({}, state, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread({}, state, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_SHIPPING"]) {
    return _objectSpread({}, state, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread({}, state, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["RESET_CART"]) {
    return _objectSpread({}, state, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=_app.js.map