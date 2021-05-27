(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/useTypedSelector.ts":
/*!***********************************!*\
  !*** ./hooks/useTypedSelector.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTypedSelector": function() { return /* binding */ useTypedSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isOnline = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_4__.useTypedSelector)(state => state.user.isOnline);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('is online', isOnline);
    if (!isOnline) router.push('/login');
  }, [isOnline]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(WrappedApp));

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
// create a makeStore function





const makeStore = context => (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.reducer, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()))); // export an assembled wrapper


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/reducers/chatReducer.ts":
/*!***************************************!*\
  !*** ./store/reducers/chatReducer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/chat */ "./types/chat.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  chat: {}
};

const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case _types_chat__WEBPACK_IMPORTED_MODULE_0__.ChatActionTypes.ADD_CHAT_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        chat: 'chat'
      });
    // return { ...state.chat, messages: [...state.chat.messages, 'zal'] };
    // return { ...state.chat, messages: action.payload };

    case _types_chat__WEBPACK_IMPORTED_MODULE_0__.ChatActionTypes.FETCH_CHAT:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (chatReducer);

/***/ }),

/***/ "./store/reducers/index.ts":
/*!*********************************!*\
  !*** ./store/reducers/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./store/reducers/userReducer.ts");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chatReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatReducer */ "./store/reducers/chatReducer.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  user: _userReducer__WEBPACK_IMPORTED_MODULE_1__.default,
  chat: _chatReducer__WEBPACK_IMPORTED_MODULE_3__.default
});
const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/user */ "./types/user.ts");
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
    case _types_user__WEBPACK_IMPORTED_MODULE_0__.UserActionTypes.FETCH_USER:
      return action.payload;

    case _types_user__WEBPACK_IMPORTED_MODULE_0__.UserActionTypes.FETCH_USER_CHATS:
      return _objectSpread(_objectSpread({}, state), {}, {
        chats: action.payload
      });

    case _types_user__WEBPACK_IMPORTED_MODULE_0__.UserActionTypes.SET_USER_ONLINE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOnline: action.payload
      });
    // case ChatActionTypes.SET_CHAT_MESSAGES:
    // 	return {
    // 		...state,
    // 		chats: action.payload,
    // 	};
    // case ChatActionTypes.ADD_CHAT_MESSAGE:
    // 	return {
    // 		...state,
    // 		chats: state.chats.map((chat) => (chat._id === action.payload.chatId ? { ...chat, messages: [...chat.messages, action.payload] } : '')),
    // 	};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./types/chat.ts":
/*!***********************!*\
  !*** ./types/chat.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatActionTypes": function() { return /* binding */ ChatActionTypes; }
/* harmony export */ });
let ChatActionTypes;

(function (ChatActionTypes) {
  ChatActionTypes["FETCH_CHAT"] = "FETCH_CHAT";
  ChatActionTypes["ADD_CHAT_MESSAGE"] = "ADD_CHAT_MESSAGE";
})(ChatActionTypes || (ChatActionTypes = {}));

/***/ }),

/***/ "./types/user.ts":
/*!***********************!*\
  !*** ./types/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionTypes": function() { return /* binding */ UserActionTypes; }
/* harmony export */ });
let UserActionTypes;

(function (UserActionTypes) {
  UserActionTypes["FETCH_USER"] = "FETCH_USER";
  UserActionTypes["FETCH_USER_ERROR"] = "FETCH_USER_ERROR";
  UserActionTypes["FETCH_USER_CHATS"] = "FETCH_USER_CHATS";
  UserActionTypes["SET_USER_ONLINE"] = "SET_USER_ONLINE";
})(UserActionTypes || (UserActionTypes = {}));

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/app.sass":
/*!*************************!*\
  !*** ./styles/app.sass ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9zdG9yZS9yZWR1Y2Vycy9jaGF0UmVkdWNlci50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi90eXBlcy9jaGF0LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi90eXBlcy91c2VyLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsidXNlVHlwZWRTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT25saW5lIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ3cmFwcGVyIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiZGVmYXVsdFN0YXRlIiwiY2hhdCIsImNoYXRSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsIkNoYXRBY3Rpb25UeXBlcyIsInBheWxvYWQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXJSZWR1Y2VyIiwiSFlEUkFURSIsIm5leHRTdGF0ZSIsImNvdW50IiwiaXNBZG1pbiIsIl9pZCIsIm5hbWUiLCJzdXJuYW1lIiwibmlja25hbWUiLCJmcmllbmRzIiwiY2hhdHMiLCJVc2VyQWN0aW9uVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLE1BQU1BLGdCQUFpRCxHQUFHQyxvREFBMUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFVBQThCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUNwRSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUCx5RUFBZ0IsQ0FBRVEsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0YsUUFBdkIsQ0FBakM7QUFDQUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJMLFFBQXpCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQWVGLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFFBQVo7QUFDZixHQUhRLEVBR04sQ0FBQ04sUUFBRCxDQUhNLENBQVQ7QUFJQSxzQkFBTyw4REFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLENBUkQ7O0FBVUEsK0RBQWVVLHFEQUFBLENBQWtCWixVQUFs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O0FBQUFBLGlCO0FBQUFBLGlCO0FBQUFBLGlCO0FBQUFBLGlCO0dBQUFBLGUsS0FBQUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JaLGdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVR5cGVkU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zYXNzJztcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBpc09ubGluZSA9IHVzZVR5cGVkU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzT25saW5lKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2lzIG9ubGluZScsIGlzT25saW5lKTtcclxuXHRcdGlmICghaXNPbmxpbmUpIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHR9LCBbaXNPbmxpbmVdKTtcclxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iLCIvLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBSb290U3RhdGUgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0IHRodW5rLCB7IFRodW5rQWN0aW9uLCBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiA9IChjb250ZXh0OiBDb250ZXh0KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8Um9vdFN0YXRlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgdHlwZSBOZXh0VGh1bmtEaXNwYXRjaCA9IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB2b2lkLCBBbnlBY3Rpb24+O1xyXG4iLCJpbXBvcnQgeyBDaGF0QWN0aW9uLCBDaGF0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy9jaGF0JztcclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuXHRjaGF0OiB7fSxcclxufTtcclxuXHJcbmNvbnN0IGNoYXRSZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IENoYXRBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYXRBY3Rpb25UeXBlcy5BRERfQ0hBVF9NRVNTQUdFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY2hhdDogJ2NoYXQnIH07XHJcblx0XHQvLyByZXR1cm4geyAuLi5zdGF0ZS5jaGF0LCBtZXNzYWdlczogWy4uLnN0YXRlLmNoYXQubWVzc2FnZXMsICd6YWwnXSB9O1xyXG5cdFx0Ly8gcmV0dXJuIHsgLi4uc3RhdGUuY2hhdCwgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG5cdFx0Y2FzZSBDaGF0QWN0aW9uVHlwZXMuRkVUQ0hfQ0hBVDpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyUmVkdWNlcic7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgY2hhdFJlZHVjZXIgZnJvbSAnLi9jaGF0UmVkdWNlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0dXNlcjogdXNlclJlZHVjZXIsXHJcblx0Y2hhdDogY2hhdFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0ge1xyXG5cdFx0XHQuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcblx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG5cdFx0fTtcclxuXHRcdGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQ7IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cclxuXHRcdHJldHVybiBuZXh0U3RhdGU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcbiIsImltcG9ydCB7IENoYXRBY3Rpb24sIENoYXRBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXQnO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy91c2VyJztcclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuXHRpc09ubGluZTogZmFsc2UsXHJcblx0aXNBZG1pbjogdHJ1ZSxcclxuXHRfaWQ6IG51bGwsXHJcblx0bmFtZTogbnVsbCxcclxuXHRzdXJuYW1lOiBudWxsLFxyXG5cdG5pY2tuYW1lOiBudWxsLFxyXG5cdGZyaWVuZHM6IFtdLFxyXG5cdGNoYXRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24gfCBDaGF0QWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUjpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfQ0hBVFM6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjaGF0czogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5TRVRfVVNFUl9PTkxJTkU6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpc09ubGluZTogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHQvLyBjYXNlIENoYXRBY3Rpb25UeXBlcy5TRVRfQ0hBVF9NRVNTQUdFUzpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRjaGF0czogYWN0aW9uLnBheWxvYWQsXHJcblx0XHQvLyBcdH07XHJcblxyXG5cdFx0Ly8gY2FzZSBDaGF0QWN0aW9uVHlwZXMuQUREX0NIQVRfTUVTU0FHRTpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRjaGF0czogc3RhdGUuY2hhdHMubWFwKChjaGF0KSA9PiAoY2hhdC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLmNoYXRJZCA/IHsgLi4uY2hhdCwgbWVzc2FnZXM6IFsuLi5jaGF0Lm1lc3NhZ2VzLCBhY3Rpb24ucGF5bG9hZF0gfSA6ICcnKSksXHJcblx0XHQvLyBcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZSwgTWVzc2FnZVBheWxvYWQgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGF0IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0bWVzc2FnZXM6IElNZXNzYWdlW107XHJcblx0bWVtYmVycz86IElVc2VyW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoYXRBY3Rpb25UeXBlcyB7XHJcblx0RkVUQ0hfQ0hBVCA9ICdGRVRDSF9DSEFUJyxcclxuXHRBRERfQ0hBVF9NRVNTQUdFID0gJ0FERF9DSEFUX01FU1NBR0UnLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2V0Q2hhdE1lc3NhZ2VzQWN0aW9uIHtcclxuXHR0eXBlOiBDaGF0QWN0aW9uVHlwZXMuRkVUQ0hfQ0hBVDtcclxuXHRwYXlsb2FkOiBJQ2hhdDtcclxufVxyXG5pbnRlcmZhY2UgQWRkQ2hhdE1lc3NhZ2VBY3Rpb24ge1xyXG5cdHR5cGU6IENoYXRBY3Rpb25UeXBlcy5BRERfQ0hBVF9NRVNTQUdFO1xyXG5cdHBheWxvYWQ6IE1lc3NhZ2VQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGF0QWN0aW9uID0gU2V0Q2hhdE1lc3NhZ2VzQWN0aW9uIHwgQWRkQ2hhdE1lc3NhZ2VBY3Rpb247XHJcbiIsImltcG9ydCB7IElDaGF0IH0gZnJvbSAnLi9jaGF0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG5cdGlzT25saW5lOiBib29sZWFuO1xyXG5cdGlzQWRtaW4/OiBib29sZWFuO1xyXG5cdF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHRuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdHN1cm5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0bmlja25hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0Y2hhdHM6IElDaGF0W10gfCBbXTtcclxuXHRmcmllbmRzOiBJVXNlcltdIHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJBY3Rpb25UeXBlcyB7XHJcblx0RkVUQ0hfVVNFUiA9ICdGRVRDSF9VU0VSJyxcclxuXHRGRVRDSF9VU0VSX0VSUk9SID0gJ0ZFVENIX1VTRVJfRVJST1InLFxyXG5cdEZFVENIX1VTRVJfQ0hBVFMgPSAnRkVUQ0hfVVNFUl9DSEFUUycsXHJcblx0U0VUX1VTRVJfT05MSU5FID0gJ1NFVF9VU0VSX09OTElORScsXHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFVzZXJBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSO1xyXG5cdHBheWxvYWQ6IElVc2VyO1xyXG59XHJcbmludGVyZmFjZSBGZXRjaFVzZXJFcnJvckFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfRVJST1I7XHJcblx0cGF5bG9hZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hVc2VyQ2hhdHNBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSX0NIQVRTO1xyXG5cdHBheWxvYWQ6IElDaGF0O1xyXG59XHJcbmludGVyZmFjZSBTZXRVc2VyT25saW5lQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0VUX1VTRVJfT05MSU5FO1xyXG5cdHBheWxvYWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBGZXRjaFVzZXJBY3Rpb24gfCBGZXRjaFVzZXJFcnJvckFjdGlvbiB8IEZldGNoVXNlckNoYXRzQWN0aW9uIHwgU2V0VXNlck9ubGluZUFjdGlvbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==