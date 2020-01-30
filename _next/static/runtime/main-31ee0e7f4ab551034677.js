(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "BMP1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var next = _interopRequireWildcard(__webpack_require__("IKlv"));

window.next = next;
(0, next["default"])()["catch"](function (err) {
  console.error(err.message + "\n" + err.stack);
});

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

exports.__esModule = true;
exports["default"] = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

var HeadManager =
/*#__PURE__*/
function () {
  function HeadManager() {
    var _this = this;

    _classCallCheck(this, HeadManager);

    this.updateHead = function (head) {
      var promise = _this.updatePromise = _Promise.resolve().then(function () {
        if (promise !== _this.updatePromise) return;
        _this.updatePromise = null;

        _this.doUpdateHead(head);
      });
    };

    this.updatePromise = null;
  }

  _createClass(HeadManager, [{
    key: "doUpdateHead",
    value: function doUpdateHead(head) {
      var _this2 = this;

      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      this.updateTitle(tags.title ? tags.title[0] : null);
      var types = ['meta', 'base', 'link', 'style', 'script'];
      types.forEach(function (type) {
        _this2.updateElements(type, tags[type] || []);
      });
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(component) {
      var title = '';

      if (component) {
        var children = component.props.children;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
    }
  }, {
    key: "updateElements",
    value: function updateElements(type, components) {
      var headEl = document.getElementsByTagName('head')[0];
      var headCountEl = headEl.querySelector('meta[name=next-head-count]');

      if (false) {}

      var headCount = Number(headCountEl.content);
      var oldTags = [];

      for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
        if (j.tagName.toLowerCase() === type) {
          oldTags.push(j);
        }
      }

      var newTags = components.map(reactElementToDOM).filter(function (newTag) {
        for (var k = 0, len = oldTags.length; k < len; k++) {
          var oldTag = oldTags[k];

          if (oldTag.isEqualNode(newTag)) {
            oldTags.splice(k, 1);
            return false;
          }
        }

        return true;
      });
      oldTags.forEach(function (t) {
        return t.parentNode.removeChild(t);
      });
      newTags.forEach(function (t) {
        return headEl.insertBefore(t, headCountEl);
      });
      headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    }
  }]);

  return HeadManager;
}();

exports["default"] = HeadManager;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

/***/ }),

/***/ "IKlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("ln6h");

var _Promise = __webpack_require__("eVuF");

var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

var _possibleConstructorReturn = __webpack_require__("ZDA2");

var _getPrototypeOf = __webpack_require__("/+P4");

var _inherits = __webpack_require__("N9n2");

var _slicedToArray = __webpack_require__("8+Nu");

var _interopRequireWildcard3 = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__("5Uuq"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _headManager = _interopRequireDefault(__webpack_require__("DqTX"));

var _router = __webpack_require__("nOHt");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _pageLoader = _interopRequireDefault(__webpack_require__("zmvN"));

var envConfig = _interopRequireWildcard3(__webpack_require__("yLiY"));

var _headManagerContext = __webpack_require__("FYa8");

var _routerContext = __webpack_require__("qOIg");

var _querystring = __webpack_require__("s4NR");

var _isDynamic = __webpack_require__("/jkW");
/* global location */


if (!window.Promise) {
  window.Promise = __webpack_require__("eVuF");
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.2.1";
exports.version = version;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = prefix + "/_next/"; //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = new _headManager["default"]();
var appElement = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var router;
exports.router = router;
var ErrorComponent;
var Component;
var App, onPerfEntry;

var Container =
/*#__PURE__*/
function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();

      if (false) {} // If page was exported and has a querystring
      // If it's a dynamic route or has a querystring


      if (data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || Component && Component.__N_SSG && location.search) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2["default"])({}, router.query, {}, (0, _querystring.parse)(location.search.substr(1)))), asPath, {
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          shallow: true
        });
      }

      if (undefined) {
        window.__NEXT_HYDRATED = true;

        if (window.__NEXT_HYDRATED_CB) {
          window.__NEXT_HYDRATED_CB();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = function _default(_temp) {
  var _ref, passedWebpackHMR, _ref3, app, mod, initialErr, _require, isValidElementType, renderCtx;

  return _regeneratorRuntime.async(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _temp === void 0 ? {} : _temp, passedWebpackHMR = _ref.webpackHMR; // This makes sure this specific lines are removed in production

          if (false) {}

          _context.next = 4;
          return _regeneratorRuntime.awrap(pageLoader.loadPageScript('/_app'));

        case 4:
          _ref3 = _context.sent;
          app = _ref3.page;
          mod = _ref3.mod;
          App = app;

          if (mod && mod.unstable_onPerformanceData) {
            onPerfEntry = function onPerfEntry(_ref2) {
              var name = _ref2.name,
                  startTime = _ref2.startTime,
                  value = _ref2.value,
                  duration = _ref2.duration;
              mod.unstable_onPerformanceData({
                name: name,
                startTime: startTime,
                value: value,
                duration: duration
              });
            };
          }

          initialErr = err;
          _context.prev = 10;
          _context.next = 13;
          return _regeneratorRuntime.awrap(pageLoader.loadPage(page));

        case 13:
          Component = _context.sent;

          if (true) {
            _context.next = 18;
            break;
          }

          _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require.isValidElementType;

          if (isValidElementType(Component)) {
            _context.next = 18;
            break;
          }

          throw new Error("The default export is not a React Component in page: \"" + page + "\"");

        case 18:
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](10);
          // This catches errors like throwing in the top level of a module
          initialErr = _context.t0;

        case 23:
          if (!window.__NEXT_PRELOADREADY) {
            _context.next = 26;
            break;
          }

          _context.next = 26;
          return _regeneratorRuntime.awrap(window.__NEXT_PRELOADREADY(dynamicIds));

        case 26:
          exports.router = router = (0, _router.createRouter)(page, query, asPath, {
            initialProps: props,
            pageLoader: pageLoader,
            App: App,
            Component: Component,
            wrapApp: wrapApp,
            err: initialErr,
            subscription: function subscription(_ref3, App) {
              var Component = _ref3.Component,
                  props = _ref3.props,
                  err = _ref3.err;
              render({
                App: App,
                Component: Component,
                props: props,
                err: err
              });
            }
          }); // call init-client middleware

          if (false) {}

          renderCtx = {
            App: App,
            Component: Component,
            props: props,
            err: initialErr
          };

          if (false) {}

          render(renderCtx);
          return _context.abrupt("return", emitter);

        case 32:
          if (true) {
            _context.next = 34;
            break;
          }

          return _context.abrupt("return", {
            emitter: emitter,
            render: render,
            renderCtx: renderCtx
          });

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 20]]);
};

exports["default"] = _default;

function render(props) {
  return _regeneratorRuntime.async(function render$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!props.err) {
            _context2.next = 4;
            break;
          }

          _context2.next = 3;
          return _regeneratorRuntime.awrap(renderError(props));

        case 3:
          return _context2.abrupt("return");

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return _regeneratorRuntime.awrap(doRender(props));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 13;
          return _regeneratorRuntime.awrap(renderError((0, _extends2["default"])({}, props, {
            err: _context2.t0
          })));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 9]]);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function renderError(props) {
  var App, err, AppTree, appCtx, initProps;
  return _regeneratorRuntime.async(function renderError$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          App = props.App, err = props.err; // In development runtime errors are caught by react-error-overlay
          // In production we catch runtime errors using componentDidCatch which will trigger renderError

          if (true) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", webpackHMR.reportRuntimeError(webpackHMR.prepareError(err)));

        case 3:
          if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


          console.error(err);
          _context3.next = 7;
          return _regeneratorRuntime.awrap(pageLoader.loadPage('/_error'));

        case 7:
          ErrorComponent = _context3.sent;
          // In production we do a normal render with the `ErrorComponent` as component.
          // If we've gotten here upon initial render, we can use the props from the server.
          // Otherwise, we need to call `getInitialProps` on `App` before mounting.
          AppTree = wrapApp(App);
          appCtx = {
            Component: ErrorComponent,
            AppTree: AppTree,
            router: router,
            ctx: {
              err: err,
              pathname: page,
              query: query,
              asPath: asPath,
              AppTree: AppTree
            }
          };

          if (!props.props) {
            _context3.next = 14;
            break;
          }

          _context3.t0 = props.props;
          _context3.next = 17;
          break;

        case 14:
          _context3.next = 16;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(App, appCtx));

        case 16:
          _context3.t0 = _context3.sent;

        case 17:
          initProps = _context3.t0;
          _context3.next = 20;
          return _regeneratorRuntime.awrap(doRender((0, _extends2["default"])({}, props, {
            err: err,
            Component: ErrorComponent,
            props: initProps
          })));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  });
} // If hydrate does not exist, eg in preact.


var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }

  if (onPerfEntry && _utils.ST) {
    try {
      var observer = new PerformanceObserver(function (list) {
        list.getEntries().forEach(onPerfEntry);
      }); // Start observing paint entry types.

      observer.observe({
        type: 'paint',
        buffered: true
      });
    } catch (e) {
      window.addEventListener('load', function () {
        performance.getEntriesByType('paint').forEach(onPerfEntry);
      });
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
    performance.getEntriesByName('beforeRender').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
  ['Next.js-before-hydration', 'Next.js-hydration', 'Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function AppContainer(_ref4) {
  var children = _ref4.children;
  return _react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: App,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, _react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, _react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager.updateHead
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (props) {
    var appProps = (0, _extends2["default"])({}, props, {
      Component: Component,
      err: err,
      router: router
    });
    return _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps));
  };
};

function doRender(_ref5) {
  var App, Component, props, err, _router2, pathname, _query, _asPath, AppTree, appCtx, appProps, elem;

  return _regeneratorRuntime.async(function doRender$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          App = _ref5.App, Component = _ref5.Component, props = _ref5.props, err = _ref5.err; // Usual getInitialProps fetching is handled in next/router
          // this is for when ErrorComponent gets replaced by Component by HMR

          if (!(!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent)) {
            _context4.next = 8;
            break;
          }

          _router2 = router, pathname = _router2.pathname, _query = _router2.query, _asPath = _router2.asPath;
          AppTree = wrapApp(App);
          appCtx = {
            router: router,
            AppTree: AppTree,
            Component: ErrorComponent,
            ctx: {
              err: err,
              pathname: pathname,
              query: _query,
              asPath: _asPath,
              AppTree: AppTree
            }
          };
          _context4.next = 7;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(App, appCtx));

        case 7:
          props = _context4.sent;

        case 8:
          Component = Component || lastAppProps.Component;
          props = props || lastAppProps.props;
          appProps = (0, _extends2["default"])({}, props, {
            Component: Component,
            err: err,
            router: router
          }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

          lastAppProps = appProps;
          emitter.emit('before-reactdom-render', {
            Component: Component,
            ErrorComponent: ErrorComponent,
            appProps: appProps
          });
          elem = _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps)); // We catch runtime errors using componentDidCatch which will trigger renderError

          renderReactElement( false ? undefined : elem, appElement);
          emitter.emit('after-reactdom-render', {
            Component: Component,
            ErrorComponent: ErrorComponent,
            appProps: appProps
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  });
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UbbE");

/***/ }),

/***/ "UbbE":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("o8NH");
module.exports = __webpack_require__("WEpk").Object.assign;


/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "o8NH":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("Y7ZC");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("kwZ1") });


/***/ }),

/***/ "yLiY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var runtimeConfig;

exports["default"] = function () {
  return runtimeConfig;
};

function setConfig(configValue) {
  runtimeConfig = configValue;
}

exports.setConfig = setConfig;

/***/ }),

/***/ "zmvN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("/HRN");

var _createClass = __webpack_require__("WaGi");

var _Promise = __webpack_require__("eVuF");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var hasNoModule = 'noModule' in document.createElement('script');

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"" + route + "\"");
  }

  route = route.replace(/\/index$/, '/');
  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as) {
  return new _Promise(function (res, rej, link) {
    link = document.createElement('link');
    link.crossOrigin = undefined;
    link.href = href;
    link.rel = rel;
    if (as) link.as = as;
    link.onload = res;
    link.onerror = rej;
    document.head.appendChild(link);
  });
}

var PageLoader =
/*#__PURE__*/
function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt["default"])();
    this.loadingRoutes = {};

    if (true) {
      this.promisedBuildManifest = new _Promise(function (resolve) {
        if (window.__BUILD_MANIFEST) {
          resolve(window.__BUILD_MANIFEST);
        } else {
          window.__BUILD_MANIFEST_CB = function () {
            resolve(window.__BUILD_MANIFEST);
          };
        }
      });
    }
  } // Returns a promise for the dependencies for a particular route


  _createClass(PageLoader, [{
    key: "getDependencies",
    value: function getDependencies(route) {
      var _this = this;

      return this.promisedBuildManifest.then(function (man) {
        return man[route] && man[route].map(function (url) {
          return _this.assetPrefix + "/_next/" + encodeURI(url);
        }) || [];
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.loadPageScript(route).then(function (v) {
        return v.page;
      });
    }
  }, {
    key: "loadPageScript",
    value: function loadPageScript(route) {
      var _this2 = this;

      route = normalizeRoute(route);
      return new _Promise(function (resolve, reject) {
        var fire = function fire(_ref) {
          var error = _ref.error,
              page = _ref.page,
              mod = _ref.mod;

          _this2.pageRegisterEvents.off(route, fire);

          delete _this2.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve({
              page: page,
              mod: mod
            });
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this2.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page,
              mod = cachedPage.mod;
          error ? reject(error) : resolve({
            page: page,
            mod: mod
          });
          return;
        } // Register a listener to get the page


        _this2.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.querySelector("script[data-next-page=\"" + route + "\"]")) {
          return;
        }

        if (!_this2.loadingRoutes[route]) {
          _this2.loadingRoutes[route] = true;

          if (true) {
            _this2.getDependencies(route).then(function (deps) {
              deps.forEach(function (d) {
                if (/\.js$/.test(d) && !document.querySelector("script[src^=\"" + d + "\"]")) {
                  _this2.loadScript(d, route, false);
                }

                if (/\.css$/.test(d) && !document.querySelector("link[rel=stylesheet][href^=\"" + d + "\"]")) {
                  appendLink(d, 'stylesheet')["catch"](function () {// FIXME: handle failure
                    // Right now, this is needed to prevent an unhandled rejection.
                  });
                }
              });

              _this2.loadRoute(route);
            });
          } else {}
        }
      });
    }
  }, {
    key: "loadRoute",
    value: function loadRoute(route) {
      route = normalizeRoute(route);
      var scriptRoute = route === '/' ? '/index.js' : route + ".js";
      var url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
      this.loadScript(url, route, true);
    }
  }, {
    key: "loadScript",
    value: function loadScript(url, route, isPage) {
      var _this3 = this;

      var script = document.createElement('script');

      if (false) {}

      script.crossOrigin = undefined;
      script.src = url;

      script.onerror = function () {
        var error = new Error("Error loading script " + url);
        error.code = 'PAGE_LOAD_ERROR';

        _this3.pageRegisterEvents.emit(route, {
          error: error
        });
      };

      document.body.appendChild(script);
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this4 = this;

      var register = function register() {
        try {
          var mod = regFn();
          var pageData = {
            page: mod["default"] || mod,
            mod: mod
          };
          _this4.pageCache[route] = pageData;

          _this4.pageRegisterEvents.emit(route, pageData);
        } catch (error) {
          _this4.pageCache[route] = {
            error: error
          };

          _this4.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      };

      if (false) { var check; }

      register();
    }
  }, {
    key: "prefetch",
    value: function prefetch(route, isDependency) {
      var _this5 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return _Promise.resolve();
      }

      var url;

      if (isDependency) {
        url = route;
      } else {
        route = normalizeRoute(route);
        var scriptRoute = (route === '/' ? '/index' : route) + ".js";

        if (false) {}

        url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
      }

      return _Promise.all(document.querySelector("link[rel=\"" + relPrefetch + "\"][href^=\"" + url + "\"], script[data-next-page=\"" + route + "\"]") ? [] : [appendLink(url, relPrefetch, url.match(/\.css$/) ? 'style' : 'script'),  true && !isDependency && this.getDependencies(route).then(function (urls) {
        return _Promise.all(urls.map(function (url) {
          return _this5.prefetch(url, true);
        }));
      })]).then( // do not return any data
      function () {}, // swallow prefetch errors
      function () {});
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

/***/ })

},[["BMP1",1,2,0,3]]]);