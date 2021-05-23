module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./hooks/useTypedSelector.ts":
/*!***********************************!*\
  !*** ./hooks/useTypedSelector.ts ***!
  \***********************************/
/*! exports provided: useTypedSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypedSelector", function() { return useTypedSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useTypedSelector */ "./hooks/useTypedSelector.ts");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_app_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/app.sass */ "./styles/app.sass");
/* harmony import */ var _styles_app_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_sass__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "F:\\Apps\\messenger\\new-client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const WrappedApp = ({
  Component,
  pageProps
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const isOnline = Object(_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_4__["useTypedSelector"])(state => state.user.isOnline);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!isOnline) router.push('/login');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_2__["wrapper"].withRedux(WrappedApp));

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
// create a makeStore function





const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["reducer"], Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)); // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/reducers/index.ts":
/*!*********************************!*\
  !*** ./store/reducers/index.ts ***!
  \*********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./store/reducers/userReducer.ts");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _userReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

/***/ }),

/***/ "./store/reducers/userReducer.ts":
/*!***************************************!*\
  !*** ./store/reducers/userReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/chat */ "./types/chat.ts");
/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/user */ "./types/user.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultState = {
  isOnline: false,
  isAdmin: true,
  _id: null,
  name: null,
  surname: null,
  nickname: null,
  friends: [],
  chats: []
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case _types_user__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].FETCH_USER:
      return action.payload;

    case _types_user__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].FETCH_USER_CHATS:
      return _objectSpread(_objectSpread({}, state), {}, {
        chats: action.payload
      });

    case _types_user__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].SET_USER_ONLINE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOnline: action.payload
      });

    case _types_chat__WEBPACK_IMPORTED_MODULE_0__["ChatActionTypes"].SET_CHAT_MESSAGES:
      return _objectSpread(_objectSpread({}, state), {}, {
        chats: action.payload
      });

    case _types_chat__WEBPACK_IMPORTED_MODULE_0__["ChatActionTypes"].ADD_CHAT_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        chats: state.chats.map(chat => chat._id === action.payload.chatId ? _objectSpread(_objectSpread({}, chat), {}, {
          messages: [...chat.messages, action.payload]
        }) : '')
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./styles/app.sass":
/*!*************************!*\
  !*** ./styles/app.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./types/chat.ts":
/*!***********************!*\
  !*** ./types/chat.ts ***!
  \***********************/
/*! exports provided: ChatActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatActionTypes", function() { return ChatActionTypes; });
let ChatActionTypes;

(function (ChatActionTypes) {
  ChatActionTypes["SET_CHAT_MESSAGES"] = "SET_CHAT_MESSAGES";
  ChatActionTypes["ADD_CHAT_MESSAGE"] = "ADD_CHAT_MESSAGE";
})(ChatActionTypes || (ChatActionTypes = {}));

/***/ }),

/***/ "./types/user.ts":
/*!***********************!*\
  !*** ./types/user.ts ***!
  \***********************/
/*! exports provided: UserActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
let UserActionTypes;

(function (UserActionTypes) {
  UserActionTypes["FETCH_USER"] = "FETCH_USER";
  UserActionTypes["FETCH_USER_ERROR"] = "FETCH_USER_ERROR";
  UserActionTypes["FETCH_USER_CHATS"] = "FETCH_USER_CHATS";
  UserActionTypes["SET_USER_ONLINE"] = "SET_USER_ONLINE";
})(UserActionTypes || (UserActionTypes = {}));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9jaGF0LnRzIiwid2VicGFjazovLy8uL3R5cGVzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInVzZVR5cGVkU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsIldyYXBwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc09ubGluZSIsInN0YXRlIiwidXNlciIsInVzZUVmZmVjdCIsInB1c2giLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImNvdW50IiwiZGVmYXVsdFN0YXRlIiwiaXNBZG1pbiIsIl9pZCIsIm5hbWUiLCJzdXJuYW1lIiwibmlja25hbWUiLCJmcmllbmRzIiwiY2hhdHMiLCJVc2VyQWN0aW9uVHlwZXMiLCJGRVRDSF9VU0VSIiwiRkVUQ0hfVVNFUl9DSEFUUyIsIlNFVF9VU0VSX09OTElORSIsIkNoYXRBY3Rpb25UeXBlcyIsIlNFVF9DSEFUX01FU1NBR0VTIiwiQUREX0NIQVRfTUVTU0FHRSIsIm1hcCIsImNoYXQiLCJjaGF0SWQiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sTUFBTUEsZ0JBQWlELEdBQUdDLHVEQUExRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZSxDQUFDRSxnQkFBckI7QUFDQyw2Q0FDSXJDLEtBREo7QUFFQzhCLGFBQUssRUFBRTlCLEtBQUssQ0FBQzhCLEtBQU4sQ0FBWVEsR0FBWixDQUFpQkMsSUFBRCxJQUFXQSxJQUFJLENBQUNkLEdBQUwsS0FBYVIsTUFBTSxDQUFDSSxPQUFQLENBQWVtQixNQUE1QixtQ0FBMENELElBQTFDO0FBQWdERSxrQkFBUSxFQUFFLENBQUMsR0FBR0YsSUFBSSxDQUFDRSxRQUFULEVBQW1CeEIsTUFBTSxDQUFDSSxPQUExQjtBQUExRCxhQUFpRyxFQUE1SDtBQUZSOztBQUtEO0FBQ0MsYUFBT3JCLEtBQVA7QUF2QkY7QUF5QkEsQ0ExQkQ7O0FBNEJlZ0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFPLElBQUttQixlQUFaOztXQUFZQSxlO0FBQUFBLGlCO0FBQUFBLGlCO0dBQUFBLGUsS0FBQUEsZTs7Ozs7Ozs7Ozs7O0FDR1o7QUFBQTtBQUFPLElBQUtKLGVBQVo7O1dBQVlBLGU7QUFBQUEsaUI7QUFBQUEsaUI7QUFBQUEsaUI7QUFBQUEsaUI7R0FBQUEsZSxLQUFBQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JaLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVR5cGVkU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zYXNzJztcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBpc09ubGluZSA9IHVzZVR5cGVkU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzT25saW5lKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFpc09ubGluZSkgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iLCIvLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBSb290U3RhdGUgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0IHRodW5rLCB7IFRodW5rQWN0aW9uLCBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiA9IChjb250ZXh0OiBDb250ZXh0KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8Um9vdFN0YXRlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgdHlwZSBOZXh0VGh1bmtEaXNwYXRjaCA9IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB2b2lkLCBBbnlBY3Rpb24+O1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0dXNlcjogdXNlclJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0ge1xyXG5cdFx0XHQuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcblx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG5cdFx0fTtcclxuXHRcdGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQ7IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cclxuXHRcdHJldHVybiBuZXh0U3RhdGU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcbiIsImltcG9ydCB7IENoYXRBY3Rpb24sIENoYXRBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXQnO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy91c2VyJztcclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuXHRpc09ubGluZTogZmFsc2UsXHJcblx0aXNBZG1pbjogdHJ1ZSxcclxuXHRfaWQ6IG51bGwsXHJcblx0bmFtZTogbnVsbCxcclxuXHRzdXJuYW1lOiBudWxsLFxyXG5cdG5pY2tuYW1lOiBudWxsLFxyXG5cdGZyaWVuZHM6IFtdLFxyXG5cdGNoYXRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24gfCBDaGF0QWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUjpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfQ0hBVFM6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjaGF0czogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5TRVRfVVNFUl9PTkxJTkU6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpc09ubGluZTogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHRjYXNlIENoYXRBY3Rpb25UeXBlcy5TRVRfQ0hBVF9NRVNTQUdFUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGF0czogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBDaGF0QWN0aW9uVHlwZXMuQUREX0NIQVRfTUVTU0FHRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGF0czogc3RhdGUuY2hhdHMubWFwKChjaGF0KSA9PiAoY2hhdC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLmNoYXRJZCA/IHsgLi4uY2hhdCwgbWVzc2FnZXM6IFsuLi5jaGF0Lm1lc3NhZ2VzLCBhY3Rpb24ucGF5bG9hZF0gfSA6ICcnKSksXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZSwgTWVzc2FnZVBheWxvYWQgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGF0IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0bWVzc2FnZXM6IElNZXNzYWdlW107XHJcblx0bWVtYmVyczogSVVzZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hhdEFjdGlvblR5cGVzIHtcclxuXHRTRVRfQ0hBVF9NRVNTQUdFUyA9ICdTRVRfQ0hBVF9NRVNTQUdFUycsXHJcblx0QUREX0NIQVRfTUVTU0FHRSA9ICdBRERfQ0hBVF9NRVNTQUdFJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIFNldENoYXRNZXNzYWdlc0FjdGlvbiB7XHJcblx0dHlwZTogQ2hhdEFjdGlvblR5cGVzLlNFVF9DSEFUX01FU1NBR0VTO1xyXG5cdHBheWxvYWQ6IE1lc3NhZ2VQYXlsb2FkO1xyXG59XHJcbmludGVyZmFjZSBBZGRDaGF0TWVzc2FnZUFjdGlvbiB7XHJcblx0dHlwZTogQ2hhdEFjdGlvblR5cGVzLkFERF9DSEFUX01FU1NBR0U7XHJcblx0cGF5bG9hZDogTWVzc2FnZVBheWxvYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYXRBY3Rpb24gPSBTZXRDaGF0TWVzc2FnZXNBY3Rpb24gfCBBZGRDaGF0TWVzc2FnZUFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSUNoYXQgfSBmcm9tICcuL2NoYXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcblx0aXNPbmxpbmU6IGJvb2xlYW47XHJcblx0aXNBZG1pbj86IGJvb2xlYW47XHJcblx0X2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cdG5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0c3VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRuaWNrbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRjaGF0czogSUNoYXRbXSB8IFtdO1xyXG5cdGZyaWVuZHM6IElVc2VyW10gfCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRGRVRDSF9VU0VSID0gJ0ZFVENIX1VTRVInLFxyXG5cdEZFVENIX1VTRVJfRVJST1IgPSAnRkVUQ0hfVVNFUl9FUlJPUicsXHJcblx0RkVUQ0hfVVNFUl9DSEFUUyA9ICdGRVRDSF9VU0VSX0NIQVRTJyxcclxuXHRTRVRfVVNFUl9PTkxJTkUgPSAnU0VUX1VTRVJfT05MSU5FJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVXNlckFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVI7XHJcblx0cGF5bG9hZDogSVVzZXI7XHJcbn1cclxuaW50ZXJmYWNlIEZldGNoVXNlckVycm9yQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUl9FUlJPUjtcclxuXHRwYXlsb2FkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFVzZXJDaGF0c0FjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfQ0hBVFM7XHJcblx0cGF5bG9hZDogSUNoYXQ7XHJcbn1cclxuaW50ZXJmYWNlIFNldFVzZXJPbmxpbmVBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TRVRfVVNFUl9PTkxJTkU7XHJcblx0cGF5bG9hZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IEZldGNoVXNlckFjdGlvbiB8IEZldGNoVXNlckVycm9yQWN0aW9uIHwgRmV0Y2hVc2VyQ2hhdHNBY3Rpb24gfCBTZXRVc2VyT25saW5lQWN0aW9uO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=