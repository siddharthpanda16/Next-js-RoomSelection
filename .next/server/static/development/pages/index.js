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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
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
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "d:\\test2-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 //https://reactjs.org/docs/forms.html

class Assessment extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      room1: {
        checked: true,
        adult: 1,
        children: 0
      },
      room2: {
        checked: false,
        adult: 1,
        children: 0
      },
      room3: {
        checked: false,
        adult: 1,
        children: 0
      },
      room4: {
        checked: false,
        adult: 1,
        children: 0
      }
    };
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.DDChanged = this.DDChanged.bind(this);
    this.setSelectedOption = this.setSelectedOption.bind(this);
    this.loaded = this.loaded.bind(this);
  }

  componentDidMount() {
    console.log("setting in componentDidMount");
    this.setState(JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_7___default.a.get('allStates')) || {
      room1: {
        checked: true,
        adult: 1,
        children: 0
      },
      room2: {
        checked: false,
        adult: 1,
        children: 0
      },
      room3: {
        checked: false,
        adult: 1,
        children: 0
      },
      room4: {
        checked: false,
        adult: 1,
        children: 0
      }
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(`checkbox changed : ${name} `, value);
    if (name === "room2" && value) this.setState({
      room2: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room3" && value) this.setState({
      room2: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room3: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room4" && value) this.setState({
      room2: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room3: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room4: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room1" && value) {
      this.setState({
        room1: {
          checked: value,
          "adult": 1,
          "children": 0
        }
      });
    } else if (name === "room4" && !value) this.setState({
      room4: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room3" && !value) this.setState({
      room4: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room3: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room2" && !value) this.setState({
      room2: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room3: {
        checked: value,
        "adult": 1,
        "children": 0
      },
      room4: {
        checked: value,
        "adult": 1,
        "children": 0
      }
    });else if (name === "room1" && !value) {
      this.setState({
        room1: {
          checked: value,
          "adult": 1,
          "children": 0
        }
      });
    }
  }

  loaded() {
    console.log({
      "loaded": this.state
    });
  }

  async DDChanged(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name.split('-');
    var index = name[0];
    var DDType = name[1]; //console.log(value,name);

    if (DDType === "DD1") await this.setState({
      [index]: {
        checked: this.state[index].checked,
        "adult": _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()([value]),
        "children": this.state[index].children
      }
    });else await this.setState({
      [index]: {
        checked: this.state[index].checked,
        "adult": this.state[index].adult,
        "children": _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()([value])
      }
    });
    console.log(this.state);
  }

  setSelectedOption() {
    local_storage__WEBPACK_IMPORTED_MODULE_7___default.a.set('allStates', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state));
    console.log(local_storage__WEBPACK_IMPORTED_MODULE_7___default.a.get('allStates'));
  }

  unSetSelectedOption() {
    local_storage__WEBPACK_IMPORTED_MODULE_7___default.a.clear();
    console.log(local_storage__WEBPACK_IMPORTED_MODULE_7___default.a.get('allStates'));
  }

  render() {
    return __jsx("div", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Home")), __jsx("div", {
      className: "jsx-1663443362" + " " + 'hero',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1663443362" + " " + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Assessment 2!"), __jsx("div", {
      className: "jsx-1663443362" + " " + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1663443362" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "ROOM 1"), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Adults"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Children")), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "(18+)"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "(0-17)")), __jsx("select", {
      name: "room1-DD1",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "first-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room1.adult === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room1.adult === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "2")), __jsx("select", {
      name: "room1-DD2",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "second-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room1.children === 0 ? true : null,
      value: "0",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "0"), __jsx("option", {
      selected: this.state.room1.children === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room1.children === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "2"))), __jsx("a", {
      className: "jsx-1663443362" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "ROOM 2 ", __jsx("input", {
      name: "room2",
      type: "checkbox",
      onChange: this.handleInputChange,
      checked: this.state.room2.checked,
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Adults"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Children ")), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "(18+)"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "(0-17)")), __jsx("select", {
      disabled: this.state.room2.checked != true ? true : null,
      name: "room2-DD1",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "first-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room2.adult === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room2.adult === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "2")), __jsx("select", {
      disabled: this.state.room2.checked != true ? true : null,
      name: "room2-DD2",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "second-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room2.children === 0 ? true : null,
      value: "0",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "0"), __jsx("option", {
      selected: this.state.room2.children === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room2.children === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "2"))), __jsx("a", {
      className: "jsx-1663443362" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "ROOM 3 ", __jsx("input", {
      name: "room3",
      type: "checkbox",
      onChange: this.handleInputChange,
      checked: this.state.room3.checked,
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Adults"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Children")), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "(18+)"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "(0-17)")), __jsx("select", {
      disabled: this.state.room3.checked !== true ? true : null,
      onLoad: this.loaded,
      name: "room3-DD1",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "first-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room3.adult === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room3.adult === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "2")), __jsx("select", {
      disabled: this.state.room3.checked !== true ? true : null,
      name: "room3-DD2",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "second-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room3.children === 0 ? true : null,
      value: "0",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "0"), __jsx("option", {
      selected: this.state.room3.children === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room3.children === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "2"))), __jsx("a", {
      className: "jsx-1663443362" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "ROOM 4 ", __jsx("input", {
      name: "room4",
      type: "checkbox",
      onChange: this.handleInputChange,
      checked: this.state.room4.checked,
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Adults"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Children")), __jsx("div", {
      className: "jsx-1663443362" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, "(18+)"), __jsx("span", {
      className: "jsx-1663443362" + " " + "spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "(0-17)")), __jsx("select", {
      disabled: this.state.room4.checked !== true ? true : null,
      name: "room4-DD1",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "first-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room4.adult === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room4.adult === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "2")), __jsx("select", {
      disabled: this.state.room4.checked !== true ? true : null,
      name: "room4-DD2",
      onChange: this.DDChanged,
      className: "jsx-1663443362" + " " + "second-DD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx("option", {
      selected: this.state.room4.children === 0 ? true : null,
      value: "0",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "0"), __jsx("option", {
      selected: this.state.room4.children === 1 ? true : null,
      value: "1",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "1"), __jsx("option", {
      selected: this.state.room4.children === 2 ? true : null,
      value: "2",
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "2")))), __jsx("div", {
      className: "jsx-1663443362" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      onClick: this.setSelectedOption,
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Submit"), __jsx("button", {
      type: "button",
      onClick: this.unSetSelectedOption,
      className: "jsx-1663443362",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "Reset"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1663443362",
      __self: this
    }, ".hero.jsx-1663443362{width:100%;color:#333;}.title.jsx-1663443362{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1663443362,.description.jsx-1663443362{text-align:center;}.row.jsx-1663443362{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.flex.jsx-1663443362{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:20px;}.spacing.jsx-1663443362{margin-left:20px;}.first-DD.jsx-1663443362{margin-top:7px;margin-left:25px;}.second-DD.jsx-1663443362{margin-top:7px;margin-left:45px;}.card.jsx-1663443362{padding:18px 18px 24px;margin-left:7px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1663443362:hover{border-color:#067df7;}.card.jsx-1663443362 h3.jsx-1663443362{margin:0;color:#067df7;font-size:18px;}.card.jsx-1663443362 p.jsx-1663443362{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImQ6XFx0ZXN0Mi1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtT2dCLEFBR29CLEFBSUYsQUFRUyxBQUdGLEFBT0gsQUFLRyxBQUlGLEFBS0EsQUFJUyxBQVNGLEFBR1osQUFLQSxTQXBERSxBQWdERyxBQUtHLEVBekROLElBK0JNLEFBS0EsQ0FyQkssQ0FZeEIsQ0FmQSxFQVBtQixDQTRDbkIsQ0FoREEsQ0F1Q2lCLEFBYUEsR0FLQSxNQTFCakIsQUFLQSxLQS9CbUIsQ0FVSixBQXNDZixDQWJjLEVBa0JELFVBakJLLENBa0JsQixFQXJEaUIsYUFvQ00sRUFuQ3ZCLEtBY3FCLHNDQUxBLEtBMkJMLGNBQ1csWUF0QlQsYUF1QmxCLElBdEJBLHFCQU4rQiwySEFDL0IiLCJmaWxlIjoiZDpcXHRlc3QyLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgaXNSZWdFeHAgfSBmcm9tICd1dGlsJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG4vL2h0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9mb3Jtcy5odG1sXG5jbGFzcyBBc3Nlc3NtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgcm9vbTE6IHtjaGVja2VkOnRydWUsXG4gICAgICAgIGFkdWx0OjEsXG4gICAgICAgIGNoaWxkcmVuOjB9LFxuICAgICAgcm9vbTI6IHtjaGVja2VkOmZhbHNlLFxuICAgICAgICBhZHVsdDoxLFxuICAgICAgICBjaGlsZHJlbjowfSxcbiAgICAgIHJvb20zOiB7Y2hlY2tlZDpmYWxzZSxcbiAgICAgICAgYWR1bHQ6MSxcbiAgICAgICAgY2hpbGRyZW46MH0sXG4gICAgICByb29tNDoge2NoZWNrZWQ6ZmFsc2UsXG4gICAgICAgIGFkdWx0OjEsXG4gICAgICAgIGNoaWxkcmVuOjB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuRERDaGFuZ2VkID0gdGhpcy5ERENoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZXRTZWxlY3RlZE9wdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZGVkID0gdGhpcy5sb2FkZWQuYmluZCh0aGlzKTtcbiAgICBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBpbiBjb21wb25lbnREaWRNb3VudFwiKTtcbiAgICB0aGlzLnNldFN0YXRlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldCgnYWxsU3RhdGVzJykpIHx8IHtcbiAgICAgIHJvb20xOiB7Y2hlY2tlZDp0cnVlLFxuICAgICAgICBhZHVsdDoxLFxuICAgICAgICBjaGlsZHJlbjowfSxcbiAgICAgIHJvb20yOiB7Y2hlY2tlZDpmYWxzZSxcbiAgICAgICAgYWR1bHQ6MSxcbiAgICAgICAgY2hpbGRyZW46MH0sXG4gICAgICByb29tMzoge2NoZWNrZWQ6ZmFsc2UsXG4gICAgICAgIGFkdWx0OjEsXG4gICAgICAgIGNoaWxkcmVuOjB9LFxuICAgICAgcm9vbTQ6IHtjaGVja2VkOmZhbHNlLFxuICAgICAgICBhZHVsdDoxLFxuICAgICAgICBjaGlsZHJlbjowfVxuICAgIH0pXG4gIH1cbiAgXG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICBjb25zb2xlLmxvZyhgY2hlY2tib3ggY2hhbmdlZCA6ICR7bmFtZX0gYCwgIHZhbHVlKVxuICAgIGlmKG5hbWU9PT1cInJvb20yXCIgJiYgdmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcm9vbTI6IHtjaGVja2VkOnZhbHVlLFwiYWR1bHRcIjogMSxcImNoaWxkcmVuXCI6MH1cbiAgICAgIH0pO1xuICAgIGVsc2UgaWYobmFtZT09PVwicm9vbTNcIiAmJiB2YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByb29tMjoge2NoZWNrZWQ6dmFsdWUsXCJhZHVsdFwiOiAxLFwiY2hpbGRyZW5cIjowfSxcbiAgICAgICAgcm9vbTM6IHtjaGVja2VkOnZhbHVlLFwiYWR1bHRcIjogMSxcImNoaWxkcmVuXCI6MH1cbiAgICAgIH0pO1xuICAgIGVsc2UgaWYobmFtZT09PVwicm9vbTRcIiAmJiB2YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByb29tMjoge2NoZWNrZWQ6dmFsdWUsXCJhZHVsdFwiOiAxLFwiY2hpbGRyZW5cIjowfSxcbiAgICAgICAgcm9vbTM6IHtjaGVja2VkOnZhbHVlLFwiYWR1bHRcIjogMSxcImNoaWxkcmVuXCI6MH0sXG4gICAgICAgIHJvb200OiB7Y2hlY2tlZDp2YWx1ZSxcImFkdWx0XCI6IDEsXCJjaGlsZHJlblwiOjB9XG4gICAgICB9KTtcbiAgICBlbHNlIGlmKG5hbWU9PT1cInJvb20xXCIgJiYgdmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJvb20xOiB7Y2hlY2tlZDp2YWx1ZSxcImFkdWx0XCI6IDEsXCJjaGlsZHJlblwiOjB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlbHNlIGlmKG5hbWU9PT1cInJvb200XCIgJiYgIXZhbHVlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJvb200OiB7Y2hlY2tlZDp2YWx1ZSxcImFkdWx0XCI6IDEsXCJjaGlsZHJlblwiOjB9XG4gICAgICB9KTtcbiAgICBlbHNlIGlmKG5hbWU9PT1cInJvb20zXCIgJiYgIXZhbHVlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJvb200OiB7Y2hlY2tlZDp2YWx1ZSxcImFkdWx0XCI6IDEsXCJjaGlsZHJlblwiOjB9LFxuICAgICAgICByb29tMzoge2NoZWNrZWQ6dmFsdWUsXCJhZHVsdFwiOiAxLFwiY2hpbGRyZW5cIjowfVxuICAgICAgfSk7XG4gICAgZWxzZSBpZihuYW1lPT09XCJyb29tMlwiICYmICF2YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByb29tMjoge2NoZWNrZWQ6dmFsdWUsXCJhZHVsdFwiOiAxLFwiY2hpbGRyZW5cIjowfSxcbiAgICAgICAgcm9vbTM6IHtjaGVja2VkOnZhbHVlLFwiYWR1bHRcIjogMSxcImNoaWxkcmVuXCI6MH0sXG4gICAgICAgIHJvb200OiB7Y2hlY2tlZDp2YWx1ZSxcImFkdWx0XCI6IDEsXCJjaGlsZHJlblwiOjB9XG4gICAgICB9KTtcbiAgICBlbHNlIGlmKG5hbWU9PT1cInJvb20xXCIgJiYgIXZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcm9vbTE6IHtjaGVja2VkOnZhbHVlLFwiYWR1bHRcIjogMSxcImNoaWxkcmVuXCI6MH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRlZCgpe1xuICAgIGNvbnNvbGUubG9nKHtcImxvYWRlZFwiOnRoaXMuc3RhdGV9KVxuICB9XG5cbiAgYXN5bmMgRERDaGFuZ2VkKGV2ZW50KXtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSAgdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZS5zcGxpdCgnLScpO1xuICAgIHZhciBpbmRleD1uYW1lWzBdO1xuICAgIHZhciBERFR5cGU9bmFtZVsxXTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlLG5hbWUpO1xuICAgIGlmKEREVHlwZT09PVwiREQxXCIpXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2luZGV4XToge2NoZWNrZWQ6dGhpcy5zdGF0ZVtpbmRleF0uY2hlY2tlZCxcImFkdWx0XCI6cGFyc2VJbnQoW3ZhbHVlXSksXCJjaGlsZHJlblwiOnRoaXMuc3RhdGVbaW5kZXhdLmNoaWxkcmVufVxuICAgICAgfSk7XG4gICAgZWxzZVxuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtpbmRleF06IHtjaGVja2VkOnRoaXMuc3RhdGVbaW5kZXhdLmNoZWNrZWQsXCJhZHVsdFwiOnRoaXMuc3RhdGVbaW5kZXhdLmFkdWx0LFwiY2hpbGRyZW5cIjpwYXJzZUludChbdmFsdWVdKX1cbiAgICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cbiAgc2V0U2VsZWN0ZWRPcHRpb24oKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0KCdhbGxTdGF0ZXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSlcbiAgICBjb25zb2xlLmxvZyggbG9jYWxTdG9yYWdlLmdldCgnYWxsU3RhdGVzJykpO1xuICB9XG5cbiAgdW5TZXRTZWxlY3RlZE9wdGlvbigpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgY29uc29sZS5sb2coIGxvY2FsU3RvcmFnZS5nZXQoJ2FsbFN0YXRlcycpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+QXNzZXNzbWVudCAyITwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICA8aDM+Uk9PTSAxPC9oMz5cbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPHNwYW4+QWR1bHRzPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2luZ1wiPkNoaWxkcmVuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICA8c3Bhbj4oMTgrKTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNpbmdcIj4oMC0xNyk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicm9vbTEtREQxXCIgY2xhc3NOYW1lPVwiZmlyc3QtRERcIiBvbkNoYW5nZT17dGhpcy5ERENoYW5nZWR9PlxuICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMS5hZHVsdD09PTEgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJvb20xLmFkdWx0PT09MiA/ICB0cnVlOm51bGx9IHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyb29tMS1ERDJcIiBjbGFzc05hbWU9XCJzZWNvbmQtRERcIiBvbkNoYW5nZT17dGhpcy5ERENoYW5nZWR9PlxuICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMS5jaGlsZHJlbj09PTAgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJvb20xLmNoaWxkcmVuPT09MSA/ICB0cnVlOm51bGx9IHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTEuY2hpbGRyZW49PT0yID8gIHRydWU6bnVsbH0gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2E+ICAgICAgXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgPGgzPlJPT00gMiA8aW5wdXQgbmFtZT1cInJvb20yXCIgdHlwZT1cImNoZWNrYm94XCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBjaGVja2VkPSB7dGhpcy5zdGF0ZS5yb29tMi5jaGVja2VkfS8+PC9oMz5cbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgIDxzcGFuPkFkdWx0czwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2luZ1wiPkNoaWxkcmVuIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgPHNwYW4+KDE4Kyk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNpbmdcIj4oMC0xNyk8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucm9vbTIuY2hlY2tlZCAhPXRydWUgPyB0cnVlOiBudWxsfSBuYW1lPVwicm9vbTItREQxXCIgIGNsYXNzTmFtZT1cImZpcnN0LUREXCIgb25DaGFuZ2U9e3RoaXMuRERDaGFuZ2VkfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMi5hZHVsdD09PTEgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTIuYWR1bHQ9PT0yID8gIHRydWU6bnVsbH0gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c2VsZWN0IGRpc2FibGVkPXt0aGlzLnN0YXRlLnJvb20yLmNoZWNrZWQgIT10cnVlID8gdHJ1ZTogbnVsbH0gbmFtZT1cInJvb20yLUREMlwiIGNsYXNzTmFtZT1cInNlY29uZC1ERFwiIG9uQ2hhbmdlPXt0aGlzLkREQ2hhbmdlZH0+XG4gICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTIuY2hpbGRyZW49PT0wID8gIHRydWU6bnVsbH0gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJvb20yLmNoaWxkcmVuPT09MSA/ICB0cnVlOm51bGx9IHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMi5jaGlsZHJlbj09PTIgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgIDxoMz5ST09NIDMgPGlucHV0IG5hbWU9XCJyb29tM1wiIHR5cGU9XCJjaGVja2JveFwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gY2hlY2tlZD0ge3RoaXMuc3RhdGUucm9vbTMuY2hlY2tlZH0vPjwvaDM+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICA8c3Bhbj5BZHVsdHM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNpbmdcIj5DaGlsZHJlbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgPHNwYW4+KDE4Kyk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNpbmdcIj4oMC0xNyk8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucm9vbTMuY2hlY2tlZCAhPT10cnVlICAgPyAgdHJ1ZTogbnVsbH0gb25Mb2FkPXt0aGlzLmxvYWRlZH0gbmFtZT1cInJvb20zLUREMVwiIGNsYXNzTmFtZT1cImZpcnN0LUREXCIgb25DaGFuZ2U9e3RoaXMuRERDaGFuZ2VkfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMy5hZHVsdD09PTEgPyB0cnVlOm51bGx9IHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMy5hZHVsdD09PTIgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucm9vbTMuY2hlY2tlZCAhPT10cnVlICA/IHRydWU6IG51bGx9ICBuYW1lPVwicm9vbTMtREQyXCIgY2xhc3NOYW1lPVwic2Vjb25kLUREXCIgb25DaGFuZ2U9e3RoaXMuRERDaGFuZ2VkfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tMy5jaGlsZHJlbj09PTAgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTMuY2hpbGRyZW49PT0xID8gIHRydWU6bnVsbH0gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJvb20zLmNoaWxkcmVuPT09MiA/ICB0cnVlOm51bGx9IHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgPGgzPlJPT00gNCA8aW5wdXQgbmFtZT1cInJvb200XCIgdHlwZT1cImNoZWNrYm94XCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBjaGVja2VkPSB7dGhpcy5zdGF0ZS5yb29tNC5jaGVja2VkfS8+PC9oMz5cbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgIDxzcGFuPkFkdWx0czwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2luZ1wiPkNoaWxkcmVuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICA8c3Bhbj4oMTgrKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2luZ1wiPigwLTE3KTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZD17dGhpcy5zdGF0ZS5yb29tNC5jaGVja2VkICE9PXRydWUgPyB0cnVlOiBudWxsfSAgbmFtZT1cInJvb200LUREMVwiIGNsYXNzTmFtZT1cImZpcnN0LUREXCIgb25DaGFuZ2U9e3RoaXMuRERDaGFuZ2VkfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tNC5hZHVsdD09PTEgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTQuYWR1bHQ9PT0yID8gIHRydWU6bnVsbH0gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c2VsZWN0IGRpc2FibGVkPXt0aGlzLnN0YXRlLnJvb200LmNoZWNrZWQgIT09dHJ1ZSA/IHRydWU6IG51bGx9ICBuYW1lPVwicm9vbTQtREQyXCIgY2xhc3NOYW1lPVwic2Vjb25kLUREXCIgb25DaGFuZ2U9e3RoaXMuRERDaGFuZ2VkfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yb29tNC5jaGlsZHJlbj09PTAgPyAgdHJ1ZTpudWxsfSB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucm9vbTQuY2hpbGRyZW49PT0xID8gIHRydWU6bnVsbH0gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJvb200LmNoaWxkcmVuPT09MiA/ICB0cnVlOm51bGx9IHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2V0U2VsZWN0ZWRPcHRpb259PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnVuU2V0U2VsZWN0ZWRPcHRpb259PlJlc2V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgIH1cbiAgICAgIC5zcGFjaW5ne1xuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgICAgfVxuXG4gICAgICAuZmlyc3QtRER7XG4gICAgICAgIG1hcmdpbi10b3A6N3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZC1ERHtcbiAgICAgICAgbWFyZ2luLXRvcDo3cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6N3B4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICBcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXNzbWVudDtcbiJdfQ== */\n/*@ sourceURL=d:\\test2-app\\pages\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Assessment);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\test2-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map