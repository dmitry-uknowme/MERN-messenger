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
    lineNumber: 13,
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  user: _userReducer__WEBPACK_IMPORTED_MODULE_1__.default
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

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

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
})(UserActionTypes || (UserActionTypes = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3R5cGVzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJ1c2VUeXBlZFNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJXcmFwcGVkQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNPbmxpbmUiLCJzdGF0ZSIsInVzZXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwid3JhcHBlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJjb3VudCIsImRlZmF1bHRTdGF0ZSIsImlzQWRtaW4iLCJfaWQiLCJuYW1lIiwic3VybmFtZSIsIm5pY2tuYW1lIiwiZnJpZW5kcyIsImNoYXRzIiwiVXNlckFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxNQUFNQSxnQkFBaUQsR0FBR0Msb0RBQTFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsVUFBOEIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLHlFQUFnQixDQUFFUSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixRQUF2QixDQUFqQztBQUNBRyxrREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNILFFBQUwsRUFBZUYsTUFBTSxDQUFDTSxJQUFQLENBQVksUUFBWjtBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFBTyw4REFBQyxTQUFELG9CQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLENBUEQ7O0FBU0EsK0RBQWVRLHFEQUFBLENBQWtCVixVQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1XLFNBQStCLEdBQUlDLE9BQUQsSUFBc0JDLGtEQUFXLENBQUNDLDhDQUFELEVBQVVDLHNEQUFlLENBQUNDLG9EQUFELENBQXpCLENBQXpFLEMsQ0FFQTs7O0FBQ08sTUFBTU4sT0FBTyxHQUFHTyxpRUFBYSxDQUFZTixTQUFaLEVBQXVCO0FBQUVPLE9BQUssRUFBRTtBQUFULENBQXZCLENBQTdCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7QUFDQTtBQUNBO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyxzREFBZSxDQUFDO0FBQ25DYixNQUFJLEVBQUVjLGlEQUFXQTtBQURrQixDQUFELENBQW5DO0FBSU8sTUFBTVAsT0FBTyxHQUFHLENBQUNSLEtBQUQsRUFBUWdCLE1BQVIsS0FBbUI7QUFDekMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCQyx1REFBcEIsRUFBNkI7QUFDNUIsVUFBTUMsU0FBUyxtQ0FDWG5CLEtBRFcsR0FFWGdCLE1BQU0sQ0FBQ0ksT0FGSSxDQUFmOztBQUlBLFFBQUlwQixLQUFLLENBQUNxQixLQUFWLEVBQWlCRixTQUFTLENBQUNFLEtBQVYsR0FBa0JyQixLQUFLLENBQUNxQixLQUF4QixDQUxXLENBS29COztBQUNoRCxXQUFPRixTQUFQO0FBQ0EsR0FQRCxNQU9PO0FBQ04sV0FBT04sV0FBVyxDQUFDYixLQUFELEVBQVFnQixNQUFSLENBQWxCO0FBQ0E7QUFDRCxDQVhNLEM7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUVBLE1BQU1NLFlBQVksR0FBRztBQUNwQnZCLFVBQVEsRUFBRSxLQURVO0FBRXBCd0IsU0FBTyxFQUFFLElBRlc7QUFHcEJDLEtBQUcsRUFBRSxJQUhlO0FBSXBCQyxNQUFJLEVBQUUsSUFKYztBQUtwQkMsU0FBTyxFQUFFLElBTFc7QUFNcEJDLFVBQVEsRUFBRSxJQU5VO0FBT3BCQyxTQUFPLEVBQUUsRUFQVztBQVFwQkMsT0FBSyxFQUFFO0FBUmEsQ0FBckI7O0FBV0EsTUFBTWQsV0FBVyxHQUFHLENBQUNmLEtBQUssR0FBR3NCLFlBQVQsRUFBdUJOLE1BQXZCLEtBQThDO0FBQ2pFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUthLG1FQUFMO0FBQ0MsYUFBT2QsTUFBTSxDQUFDSSxPQUFkOztBQUNEO0FBQ0MsYUFBT3BCLEtBQVA7QUFKRjtBQU1BLENBUEQ7O0FBU0EsK0RBQWVlLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDVE8sSUFBS2UsZUFBWjs7V0FBWUEsZTtBQUFBQSxpQjtBQUFBQSxpQjtHQUFBQSxlLEtBQUFBLGU7Ozs7Ozs7Ozs7O0FDYlosZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHlwZWRTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3InO1xyXG5cclxuY29uc3QgV3JhcHBlZEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGlzT25saW5lID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuaXNPbmxpbmUpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIWlzT25saW5lKSByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcblx0fSwgW10pO1xyXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcbiIsIi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5pbXBvcnQgeyBDb250ZXh0LCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIFJvb3RTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgdGh1bmssIHsgVGh1bmtBY3Rpb24sIFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG5jb25zdCBtYWtlU3RvcmU6IE1ha2VTdG9yZTxSb290U3RhdGU+ID0gKGNvbnRleHQ6IENvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxSb290U3RhdGU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCB0eXBlIE5leHRUaHVua0Rpc3BhdGNoID0gVGh1bmtEaXNwYXRjaDxSb290U3RhdGUsIHZvaWQsIEFueUFjdGlvbj47XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0aWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcblx0XHRjb25zdCBuZXh0U3RhdGUgPSB7XHJcblx0XHRcdC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcclxuXHRcdFx0Li4uYWN0aW9uLnBheWxvYWQsIC8vIGFwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXHJcblx0XHR9O1xyXG5cdFx0aWYgKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudDsgLy8gcHJlc2VydmUgY291bnQgdmFsdWUgb24gY2xpZW50IHNpZGUgbmF2aWdhdGlvblxyXG5cdFx0cmV0dXJuIG5leHRTdGF0ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIiwiaW1wb3J0IHsgSVVzZXIsIFVzZXJBY3Rpb24sIFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3VzZXInO1xyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG5cdGlzT25saW5lOiBmYWxzZSxcclxuXHRpc0FkbWluOiB0cnVlLFxyXG5cdF9pZDogbnVsbCxcclxuXHRuYW1lOiBudWxsLFxyXG5cdHN1cm5hbWU6IG51bGwsXHJcblx0bmlja25hbWU6IG51bGwsXHJcblx0ZnJpZW5kczogW10sXHJcblx0Y2hhdHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVI6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSUNoYXQgfSBmcm9tICcuL2NoYXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcblx0aXNPbmxpbmU6IGJvb2xlYW47XHJcblx0aXNBZG1pbj86IGJvb2xlYW47XHJcblx0X2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cdG5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0c3VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRuaWNrbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRjaGF0czogSUNoYXRbXSB8IFtdO1xyXG5cdGZyaWVuZHM6IElVc2VyW10gfCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRGRVRDSF9VU0VSID0gJ0ZFVENIX1VTRVInLFxyXG5cdEZFVENIX1VTRVJfRVJST1IgPSAnRkVUQ0hfVVNFUl9FUlJPUicsXHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFVzZXJBY3Rpb24ge1xyXG5cdHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSO1xyXG5cdHBheWxvYWQ6IElVc2VyO1xyXG59XHJcbmludGVyZmFjZSBGZXRjaFVzZXJFcnJvckFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVJfRVJST1I7XHJcblx0cGF5bG9hZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gRmV0Y2hVc2VyQWN0aW9uIHwgRmV0Y2hVc2VyRXJyb3JBY3Rpb247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=