(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Modal/ModalContext.tsx":
/*!*******************************************!*\
  !*** ./components/Modal/ModalContext.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalContext": function() { return /* binding */ ModalContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

/***/ }),

/***/ "./components/Modal/ModalProvider.tsx":
/*!********************************************!*\
  !*** ./components/Modal/ModalProvider.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalContext */ "./components/Modal/ModalContext.tsx");

var _jsxFileName = "F:\\Apps\\messenger\\new-client\\components\\Modal\\ModalProvider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ModalProvider = ({
  children
}) => {
  const {
    0: modal,
    1: setModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    visible: false
  });

  const modalHandler = options => {
    setModal(state => _objectSpread(_objectSpread({}, state), {}, {
      visible: !state.visible
    }, options));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalContext.Provider, {
    value: {
      modalStatus: modal,
      isModalOpen: modal.visible,
      toggleModal: modalHandler
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalProvider);

/***/ }),

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
/* harmony import */ var _components_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/ModalProvider */ "./components/Modal/ModalProvider.tsx");

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
  }, [isOnline]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbENvbnRleHQudHN4Iiwid2VicGFjazovL25ldy1jbGllbnQvLi9jb21wb25lbnRzL01vZGFsL01vZGFsUHJvdmlkZXIudHN4Iiwid2VicGFjazovL25ldy1jbGllbnQvLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL3JlZHVjZXJzL2NoYXRSZWR1Y2VyLnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3R5cGVzL2NoYXQudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3R5cGVzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW9kYWxQcm92aWRlciIsImNoaWxkcmVuIiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwidmlzaWJsZSIsIm1vZGFsSGFuZGxlciIsIm9wdGlvbnMiLCJzdGF0ZSIsIm1vZGFsU3RhdHVzIiwiaXNNb2RhbE9wZW4iLCJ0b2dnbGVNb2RhbCIsInVzZVR5cGVkU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsIldyYXBwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc09ubGluZSIsInVzZXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwid3JhcHBlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImRlZmF1bHRTdGF0ZSIsImNoYXQiLCJjaGF0UmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJDaGF0QWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJjb3VudCIsImlzQWRtaW4iLCJfaWQiLCJuYW1lIiwic3VybmFtZSIsIm5pY2tuYW1lIiwiZnJpZW5kcyIsImNoYXRzIiwiVXNlckFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTTyxNQUFNQSxZQUFZLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUVBOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQWU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBZixDQUFsQzs7QUFDQSxRQUFNQyxZQUFZLEdBQUlDLE9BQUQsSUFBMkI7QUFDL0NKLFlBQVEsQ0FBRUssS0FBRCxvQ0FBaUJBLEtBQWpCO0FBQXdCSCxhQUFPLEVBQUUsQ0FBQ0csS0FBSyxDQUFDSDtBQUF4QyxPQUFvREUsT0FBcEQsQ0FBRCxDQUFSO0FBQ0EsR0FGRDs7QUFHQSxzQkFBTyw4REFBQyxnRUFBRDtBQUF1QixTQUFLLEVBQUU7QUFBRUUsaUJBQVcsRUFBRVAsS0FBZjtBQUFzQlEsaUJBQVcsRUFBRVIsS0FBSyxDQUFDRyxPQUF6QztBQUFrRE0saUJBQVcsRUFBRUw7QUFBL0QsS0FBOUI7QUFBQSxjQUE4R0w7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsQ0FORDs7QUFRQSwrREFBZUQsYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBR08sTUFBTVksZ0JBQWlELEdBQUdDLG9EQUExRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsVUFBOEIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLHlFQUFnQixDQUFFSixLQUFELElBQVdBLEtBQUssQ0FBQ1ksSUFBTixDQUFXRCxRQUF2QixDQUFqQztBQUNBRSxrREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNGLFFBQUwsRUFBZUYsTUFBTSxDQUFDSyxJQUFQLENBQVksUUFBWjtBQUNmLEdBRlEsRUFFTixDQUFDSCxRQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNDLDhEQUFDLG9FQUFEO0FBQUEsMkJBQ0MsOERBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBS0EsQ0FYRDs7QUFhQSwrREFBZU8scURBQUEsQ0FBa0JULFVBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1VLFNBQStCLEdBQUlDLE9BQUQsSUFBc0JDLGtEQUFXLENBQUNDLDhDQUFELEVBQVVDLHNEQUFlLENBQUNDLG9EQUFELENBQXpCLENBQXpFLEMsQ0FFQTs7O0FBQ08sTUFBTU4sT0FBTyxHQUFHTyxpRUFBYSxDQUFZTixTQUFaLEVBQXVCO0FBQUVPLE9BQUssRUFBRTtBQUFULENBQXZCLENBQTdCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNwQkMsTUFBSSxFQUFFO0FBRGMsQ0FBckI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUMxQixLQUFLLEdBQUd3QixZQUFULEVBQXVCRyxNQUF2QixLQUE4QztBQUNqRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLQyx5RUFBTDtBQUNDLDZDQUFZN0IsS0FBWjtBQUFtQnlCLFlBQUksRUFBRTtBQUF6QjtBQUNEO0FBQ0E7O0FBRUEsU0FBS0ksbUVBQUw7QUFDQyxhQUFPRixNQUFNLENBQUNHLE9BQWQ7O0FBRUQ7QUFDQyxhQUFPOUIsS0FBUDtBQVZGO0FBWUEsQ0FiRDs7QUFlQSwrREFBZTBCLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUssV0FBVyxHQUFHQyxzREFBZSxDQUFDO0FBQ25DcEIsTUFBSSxFQUFFcUIsaURBRDZCO0FBRW5DUixNQUFJLEVBQUVDLGlEQUFXQTtBQUZrQixDQUFELENBQW5DO0FBS08sTUFBTVAsT0FBTyxHQUFHLENBQUNuQixLQUFELEVBQVEyQixNQUFSLEtBQW1CO0FBQ3pDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQk0sdURBQXBCLEVBQTZCO0FBQzVCLFVBQU1DLFNBQVMsbUNBQ1huQyxLQURXLEdBRVgyQixNQUFNLENBQUNHLE9BRkksQ0FBZjs7QUFJQSxRQUFJOUIsS0FBSyxDQUFDb0MsS0FBVixFQUFpQkQsU0FBUyxDQUFDQyxLQUFWLEdBQWtCcEMsS0FBSyxDQUFDb0MsS0FBeEIsQ0FMVyxDQUtvQjs7QUFDaEQsV0FBT0QsU0FBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFdBQU9KLFdBQVcsQ0FBQy9CLEtBQUQsRUFBUTJCLE1BQVIsQ0FBbEI7QUFDQTtBQUNELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBRUEsTUFBTUgsWUFBWSxHQUFHO0FBQ3BCYixVQUFRLEVBQUUsS0FEVTtBQUVwQjBCLFNBQU8sRUFBRSxJQUZXO0FBR3BCQyxLQUFHLEVBQUUsSUFIZTtBQUlwQkMsTUFBSSxFQUFFLElBSmM7QUFLcEJDLFNBQU8sRUFBRSxJQUxXO0FBTXBCQyxVQUFRLEVBQUUsSUFOVTtBQU9wQkMsU0FBTyxFQUFFLEVBUFc7QUFRcEJDLE9BQUssRUFBRTtBQVJhLENBQXJCOztBQVdBLE1BQU1WLFdBQVcsR0FBRyxDQUFDakMsS0FBSyxHQUFHd0IsWUFBVCxFQUF1QkcsTUFBdkIsS0FBMkQ7QUFDOUUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBS2dCLG1FQUFMO0FBQ0MsYUFBT2pCLE1BQU0sQ0FBQ0csT0FBZDs7QUFFRCxTQUFLYyx5RUFBTDtBQUNDLDZDQUFZNUMsS0FBWjtBQUFtQjJDLGFBQUssRUFBRWhCLE1BQU0sQ0FBQ0c7QUFBakM7O0FBRUQsU0FBS2Msd0VBQUw7QUFDQyw2Q0FBWTVDLEtBQVo7QUFBbUJXLGdCQUFRLEVBQUVnQixNQUFNLENBQUNHO0FBQXBDO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQyxhQUFPOUIsS0FBUDtBQXZCRjtBQXlCQSxDQTFCRDs7QUE0QkEsK0RBQWVpQyxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTyxJQUFLSixlQUFaOztXQUFZQSxlO0FBQUFBLGlCO0FBQUFBLGlCO0dBQUFBLGUsS0FBQUEsZTs7Ozs7Ozs7Ozs7Ozs7O0FDR0wsSUFBS2UsZUFBWjs7V0FBWUEsZTtBQUFBQSxpQjtBQUFBQSxpQjtBQUFBQSxpQjtBQUFBQSxpQjtHQUFBQSxlLEtBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiWixnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNb2RhbCB7XHJcblx0bW9kYWxTdGF0dXM6IE1vZGFsT3B0aW9ucztcclxuXHRpc01vZGFsT3BlbjogYm9vbGVhbjtcclxuXHR0b2dnbGVNb2RhbChvcHRpb25zOiBNb2RhbE9wdGlvbnMpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBJTW9kYWwpO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IElNb2RhbCwgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi9Nb2RhbENvbnRleHQnO1xyXG5cclxuY29uc3QgTW9kYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlPE1vZGFsT3B0aW9ucz4oeyB2aXNpYmxlOiBmYWxzZSB9KTtcclxuXHRjb25zdCBtb2RhbEhhbmRsZXIgPSAob3B0aW9uczogTW9kYWxPcHRpb25zKSA9PiB7XHJcblx0XHRzZXRNb2RhbCgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCB2aXNpYmxlOiAhc3RhdGUudmlzaWJsZSwgLi4ub3B0aW9ucyB9KSk7XHJcblx0fTtcclxuXHRyZXR1cm4gPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb2RhbFN0YXR1czogbW9kYWwsIGlzTW9kYWxPcGVuOiBtb2RhbC52aXNpYmxlLCB0b2dnbGVNb2RhbDogbW9kYWxIYW5kbGVyIH19PntjaGlsZHJlbn08L01vZGFsQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVR5cGVkU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zYXNzJztcclxuaW1wb3J0IE1vZGFsUHJvdmlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyJztcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBpc09ubGluZSA9IHVzZVR5cGVkU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzT25saW5lKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFpc09ubGluZSkgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdH0sIFtpc09ubGluZV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWxQcm92aWRlcj5cclxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0PC9Nb2RhbFByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChXcmFwcGVkQXBwKTtcclxuIiwiLy8gY3JlYXRlIGEgbWFrZVN0b3JlIGZ1bmN0aW9uXHJcbmltcG9ydCB7IENvbnRleHQsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IEFueUFjdGlvbiwgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcmVkdWNlciwgUm9vdFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB0aHVuaywgeyBUaHVua0FjdGlvbiwgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcclxuXHJcbmNvbnN0IG1ha2VTdG9yZTogTWFrZVN0b3JlPFJvb3RTdGF0ZT4gPSAoY29udGV4dDogQ29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPFJvb3RTdGF0ZT4obWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG5cclxuZXhwb3J0IHR5cGUgTmV4dFRodW5rRGlzcGF0Y2ggPSBUaHVua0Rpc3BhdGNoPFJvb3RTdGF0ZSwgdm9pZCwgQW55QWN0aW9uPjtcclxuIiwiaW1wb3J0IHsgQ2hhdEFjdGlvbiwgQ2hhdEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2hhdCc7XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcblx0Y2hhdDoge30sXHJcbn07XHJcblxyXG5jb25zdCBjaGF0UmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBDaGF0QWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBDaGF0QWN0aW9uVHlwZXMuQUREX0NIQVRfTUVTU0FHRTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGNoYXQ6ICdjaGF0JyB9O1xyXG5cdFx0Ly8gcmV0dXJuIHsgLi4uc3RhdGUuY2hhdCwgbWVzc2FnZXM6IFsuLi5zdGF0ZS5jaGF0Lm1lc3NhZ2VzLCAnemFsJ10gfTtcclxuXHRcdC8vIHJldHVybiB7IC4uLnN0YXRlLmNoYXQsIG1lc3NhZ2VzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdGNhc2UgQ2hhdEFjdGlvblR5cGVzLkZFVENIX0NIQVQ6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IGNoYXRSZWR1Y2VyIGZyb20gJy4vY2hhdFJlZHVjZXInO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG5cdGNoYXQ6IGNoYXRSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuXHRcdGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuXHRcdFx0Li4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG5cdFx0XHQuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuXHRcdH07XHJcblx0XHRpZiAoc3RhdGUuY291bnQpIG5leHRTdGF0ZS5jb3VudCA9IHN0YXRlLmNvdW50OyAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcblx0XHRyZXR1cm4gbmV4dFN0YXRlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG4iLCJpbXBvcnQgeyBDaGF0QWN0aW9uLCBDaGF0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy9jaGF0JztcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdXNlcic7XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcblx0aXNPbmxpbmU6IGZhbHNlLFxyXG5cdGlzQWRtaW46IHRydWUsXHJcblx0X2lkOiBudWxsLFxyXG5cdG5hbWU6IG51bGwsXHJcblx0c3VybmFtZTogbnVsbCxcclxuXHRuaWNrbmFtZTogbnVsbCxcclxuXHRmcmllbmRzOiBbXSxcclxuXHRjaGF0czogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uIHwgQ2hhdEFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVI6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSX0NIQVRTOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY2hhdHM6IGFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuU0VUX1VTRVJfT05MSU5FOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaXNPbmxpbmU6IGFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG5cdFx0Ly8gY2FzZSBDaGF0QWN0aW9uVHlwZXMuU0VUX0NIQVRfTUVTU0FHRVM6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Y2hhdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0Ly8gXHR9O1xyXG5cclxuXHRcdC8vIGNhc2UgQ2hhdEFjdGlvblR5cGVzLkFERF9DSEFUX01FU1NBR0U6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Y2hhdHM6IHN0YXRlLmNoYXRzLm1hcCgoY2hhdCkgPT4gKGNoYXQuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5jaGF0SWQgPyB7IC4uLmNoYXQsIG1lc3NhZ2VzOiBbLi4uY2hhdC5tZXNzYWdlcywgYWN0aW9uLnBheWxvYWRdIH0gOiAnJykpLFxyXG5cdFx0Ly8gXHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2UsIE1lc3NhZ2VQYXlsb2FkIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhdCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdG1lc3NhZ2VzOiBJTWVzc2FnZVtdO1xyXG5cdG1lbWJlcnM/OiBJVXNlcltdO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGF0QWN0aW9uVHlwZXMge1xyXG5cdEZFVENIX0NIQVQgPSAnRkVUQ0hfQ0hBVCcsXHJcblx0QUREX0NIQVRfTUVTU0FHRSA9ICdBRERfQ0hBVF9NRVNTQUdFJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIFNldENoYXRNZXNzYWdlc0FjdGlvbiB7XHJcblx0dHlwZTogQ2hhdEFjdGlvblR5cGVzLkZFVENIX0NIQVQ7XHJcblx0cGF5bG9hZDogSUNoYXQ7XHJcbn1cclxuaW50ZXJmYWNlIEFkZENoYXRNZXNzYWdlQWN0aW9uIHtcclxuXHR0eXBlOiBDaGF0QWN0aW9uVHlwZXMuQUREX0NIQVRfTUVTU0FHRTtcclxuXHRwYXlsb2FkOiBNZXNzYWdlUGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2hhdEFjdGlvbiA9IFNldENoYXRNZXNzYWdlc0FjdGlvbiB8IEFkZENoYXRNZXNzYWdlQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJQ2hhdCB9IGZyb20gJy4vY2hhdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuXHRpc09ubGluZTogYm9vbGVhbjtcclxuXHRpc0FkbWluPzogYm9vbGVhbjtcclxuXHRfaWQ6IHN0cmluZyB8IG51bGw7XHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRzdXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdG5pY2tuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdGNoYXRzOiBJQ2hhdFtdIHwgW107XHJcblx0ZnJpZW5kczogSVVzZXJbXSB8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdEZFVENIX1VTRVIgPSAnRkVUQ0hfVVNFUicsXHJcblx0RkVUQ0hfVVNFUl9FUlJPUiA9ICdGRVRDSF9VU0VSX0VSUk9SJyxcclxuXHRGRVRDSF9VU0VSX0NIQVRTID0gJ0ZFVENIX1VTRVJfQ0hBVFMnLFxyXG5cdFNFVF9VU0VSX09OTElORSA9ICdTRVRfVVNFUl9PTkxJTkUnLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hVc2VyQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUjtcclxuXHRwYXlsb2FkOiBJVXNlcjtcclxufVxyXG5pbnRlcmZhY2UgRmV0Y2hVc2VyRXJyb3JBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSX0VSUk9SO1xyXG5cdHBheWxvYWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVXNlckNoYXRzQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUl9DSEFUUztcclxuXHRwYXlsb2FkOiBJQ2hhdDtcclxufVxyXG5pbnRlcmZhY2UgU2V0VXNlck9ubGluZUFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLlNFVF9VU0VSX09OTElORTtcclxuXHRwYXlsb2FkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gRmV0Y2hVc2VyQWN0aW9uIHwgRmV0Y2hVc2VyRXJyb3JBY3Rpb24gfCBGZXRjaFVzZXJDaGF0c0FjdGlvbiB8IFNldFVzZXJPbmxpbmVBY3Rpb247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=