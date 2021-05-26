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
    if (!isOnline) router.push('/login');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9zdG9yZS9yZWR1Y2Vycy9jaGF0UmVkdWNlci50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi90eXBlcy9jaGF0LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi90eXBlcy91c2VyLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsidXNlVHlwZWRTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT25saW5lIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwicHVzaCIsIndyYXBwZXIiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJkZWZhdWx0U3RhdGUiLCJjaGF0IiwiY2hhdFJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiQ2hhdEFjdGlvblR5cGVzIiwicGF5bG9hZCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwiY291bnQiLCJpc0FkbWluIiwiX2lkIiwibmFtZSIsInN1cm5hbWUiLCJuaWNrbmFtZSIsImZyaWVuZHMiLCJjaGF0cyIsIlVzZXJBY3Rpb25UeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sTUFBTUEsZ0JBQWlELEdBQUdDLG9EQUExRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsVUFBOEIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLHlFQUFnQixDQUFFUSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixRQUF2QixDQUFqQztBQUNBRyxrREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNILFFBQUwsRUFBZUYsTUFBTSxDQUFDTSxJQUFQLENBQVksUUFBWjtBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFBTyw4REFBQyxTQUFELG9CQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLENBUEQ7O0FBU0EsK0RBQWVRLHFEQUFBLENBQWtCVixVQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxTQUEr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Ozs7Ozs7O0FDYlosZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHlwZWRTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3InO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNhc3MnO1xyXG5cclxuY29uc3QgV3JhcHBlZEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGlzT25saW5lID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuaXNPbmxpbmUpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIWlzT25saW5lKSByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcblx0fSwgW10pO1xyXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcbiIsIi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5pbXBvcnQgeyBDb250ZXh0LCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIFJvb3RTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgdGh1bmssIHsgVGh1bmtBY3Rpb24sIFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG5jb25zdCBtYWtlU3RvcmU6IE1ha2VTdG9yZTxSb290U3RhdGU+ID0gKGNvbnRleHQ6IENvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxSb290U3RhdGU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCB0eXBlIE5leHRUaHVua0Rpc3BhdGNoID0gVGh1bmtEaXNwYXRjaDxSb290U3RhdGUsIHZvaWQsIEFueUFjdGlvbj47XHJcbiIsImltcG9ydCB7IENoYXRBY3Rpb24sIENoYXRBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXQnO1xyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG5cdGNoYXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgY2hhdFJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogQ2hhdEFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQ2hhdEFjdGlvblR5cGVzLkFERF9DSEFUX01FU1NBR0U6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjaGF0OiAnY2hhdCcgfTtcclxuXHRcdC8vIHJldHVybiB7IC4uLnN0YXRlLmNoYXQsIG1lc3NhZ2VzOiBbLi4uc3RhdGUuY2hhdC5tZXNzYWdlcywgJ3phbCddIH07XHJcblx0XHQvLyByZXR1cm4geyAuLi5zdGF0ZS5jaGF0LCBtZXNzYWdlczogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHRjYXNlIENoYXRBY3Rpb25UeXBlcy5GRVRDSF9DSEFUOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBjaGF0UmVkdWNlciBmcm9tICcuL2NoYXRSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlcixcclxuXHRjaGF0OiBjaGF0UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0aWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcblx0XHRjb25zdCBuZXh0U3RhdGUgPSB7XHJcblx0XHRcdC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcclxuXHRcdFx0Li4uYWN0aW9uLnBheWxvYWQsIC8vIGFwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXHJcblx0XHR9O1xyXG5cdFx0aWYgKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudDsgLy8gcHJlc2VydmUgY291bnQgdmFsdWUgb24gY2xpZW50IHNpZGUgbmF2aWdhdGlvblxyXG5cdFx0cmV0dXJuIG5leHRTdGF0ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIiwiaW1wb3J0IHsgQ2hhdEFjdGlvbiwgQ2hhdEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2hhdCc7XHJcbmltcG9ydCB7IFVzZXJBY3Rpb24sIFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3VzZXInO1xyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG5cdGlzT25saW5lOiBmYWxzZSxcclxuXHRpc0FkbWluOiB0cnVlLFxyXG5cdF9pZDogbnVsbCxcclxuXHRuYW1lOiBudWxsLFxyXG5cdHN1cm5hbWU6IG51bGwsXHJcblx0bmlja25hbWU6IG51bGwsXHJcblx0ZnJpZW5kczogW10sXHJcblx0Y2hhdHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbiB8IENoYXRBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUl9DSEFUUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGNoYXRzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlNFVF9VU0VSX09OTElORTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGlzT25saW5lOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdC8vIGNhc2UgQ2hhdEFjdGlvblR5cGVzLlNFVF9DSEFUX01FU1NBR0VTOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGNoYXRzOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdC8vIFx0fTtcclxuXHJcblx0XHQvLyBjYXNlIENoYXRBY3Rpb25UeXBlcy5BRERfQ0hBVF9NRVNTQUdFOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGNoYXRzOiBzdGF0ZS5jaGF0cy5tYXAoKGNoYXQpID0+IChjaGF0Ll9pZCA9PT0gYWN0aW9uLnBheWxvYWQuY2hhdElkID8geyAuLi5jaGF0LCBtZXNzYWdlczogWy4uLmNoYXQubWVzc2FnZXMsIGFjdGlvbi5wYXlsb2FkXSB9IDogJycpKSxcclxuXHRcdC8vIFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XHJcbiIsImltcG9ydCB7IElNZXNzYWdlLCBNZXNzYWdlUGF5bG9hZCB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXQge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRtZXNzYWdlczogSU1lc3NhZ2VbXTtcclxuXHRtZW1iZXJzPzogSVVzZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hhdEFjdGlvblR5cGVzIHtcclxuXHRGRVRDSF9DSEFUID0gJ0ZFVENIX0NIQVQnLFxyXG5cdEFERF9DSEFUX01FU1NBR0UgPSAnQUREX0NIQVRfTUVTU0FHRScsXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZXRDaGF0TWVzc2FnZXNBY3Rpb24ge1xyXG5cdHR5cGU6IENoYXRBY3Rpb25UeXBlcy5GRVRDSF9DSEFUO1xyXG5cdHBheWxvYWQ6IElDaGF0O1xyXG59XHJcbmludGVyZmFjZSBBZGRDaGF0TWVzc2FnZUFjdGlvbiB7XHJcblx0dHlwZTogQ2hhdEFjdGlvblR5cGVzLkFERF9DSEFUX01FU1NBR0U7XHJcblx0cGF5bG9hZDogTWVzc2FnZVBheWxvYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYXRBY3Rpb24gPSBTZXRDaGF0TWVzc2FnZXNBY3Rpb24gfCBBZGRDaGF0TWVzc2FnZUFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSUNoYXQgfSBmcm9tICcuL2NoYXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcblx0aXNPbmxpbmU6IGJvb2xlYW47XHJcblx0aXNBZG1pbj86IGJvb2xlYW47XHJcblx0X2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cdG5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0c3VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRuaWNrbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRjaGF0czogSUNoYXRbXSB8IFtdO1xyXG5cdGZyaWVuZHM6IElVc2VyW10gfCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRGRVRDSF9VU0VSID0gJ0ZFVENIX1VTRVInLFxyXG5cdEZFVENIX1VTRVJfRVJST1IgPSAnRkVUQ0hfVVNFUl9FUlJPUicsXHJcblx0RkVUQ0hfVVNFUl9DSEFUUyA9ICdGRVRDSF9VU0VSX0NIQVRTJyxcclxuXHRTRVRfVVNFUl9PTkxJTkUgPSAnU0VUX1VTRVJfT05MSU5FJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVXNlckFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVI7XHJcblx0cGF5bG9hZDogSVVzZXI7XHJcbn1cclxuaW50ZXJmYWNlIEZldGNoVXNlckVycm9yQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUl9FUlJPUjtcclxuXHRwYXlsb2FkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFVzZXJDaGF0c0FjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfQ0hBVFM7XHJcblx0cGF5bG9hZDogSUNoYXQ7XHJcbn1cclxuaW50ZXJmYWNlIFNldFVzZXJPbmxpbmVBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TRVRfVVNFUl9PTkxJTkU7XHJcblx0cGF5bG9hZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IEZldGNoVXNlckFjdGlvbiB8IEZldGNoVXNlckVycm9yQWN0aW9uIHwgRmV0Y2hVc2VyQ2hhdHNBY3Rpb24gfCBTZXRVc2VyT25saW5lQWN0aW9uO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9