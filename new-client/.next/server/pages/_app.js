(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

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

var _jsxFileName = "F:\\Apps\\messenger\\new-client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const WrappedApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 70
}, undefined);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL25ldy1jbGllbnQvLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXctY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC8uL3R5cGVzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3LWNsaWVudC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ldy1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXctY2xpZW50L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJXcmFwcGVkQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJjb3VudCIsImRlZmF1bHRTdGF0ZSIsImlzT25saW5lIiwiaXNBZG1pbiIsIl9pZCIsIm5hbWUiLCJzdXJuYW1lIiwibmlja25hbWUiLCJmcmllbmRzIiwiY2hhdHMiLCJVc2VyQWN0aW9uVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLFVBQThCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxrQkFBOEIsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXJFOztBQUVBLCtEQUFlQyxxREFBQSxDQUFrQkgsVUFBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSSxTQUErQixHQUFJQyxPQUFELElBQXNCQyxrREFBVyxDQUFDQyw4Q0FBRCxFQUFVQyxzREFBZSxDQUFDQyxvREFBRCxDQUF6QixDQUF6RSxDLENBRUE7OztBQUNPLE1BQU1OLE9BQU8sR0FBR08saUVBQWEsQ0FBWU4sU0FBWixFQUF1QjtBQUFFTyxPQUFLLEVBQUU7QUFBVCxDQUF2QixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLFdBQVcsR0FBR0Msc0RBQWUsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFQyxpREFBV0E7QUFEa0IsQ0FBRCxDQUFuQztBQUlPLE1BQU1SLE9BQU8sR0FBRyxDQUFDUyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDekMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCQyx1REFBcEIsRUFBNkI7QUFDNUIsVUFBTUMsU0FBUyxtQ0FDWEosS0FEVyxHQUVYQyxNQUFNLENBQUNJLE9BRkksQ0FBZjs7QUFJQSxRQUFJTCxLQUFLLENBQUNNLEtBQVYsRUFBaUJGLFNBQVMsQ0FBQ0UsS0FBVixHQUFrQk4sS0FBSyxDQUFDTSxLQUF4QixDQUxXLENBS29COztBQUNoRCxXQUFPRixTQUFQO0FBQ0EsR0FQRCxNQU9PO0FBQ04sV0FBT1IsV0FBVyxDQUFDSSxLQUFELEVBQVFDLE1BQVIsQ0FBbEI7QUFDQTtBQUNELENBWE0sQzs7Ozs7Ozs7Ozs7OztBQ1JQO0FBRUEsTUFBTU0sWUFBWSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUUsS0FEVTtBQUVwQkMsU0FBTyxFQUFFLElBRlc7QUFHcEJDLEtBQUcsRUFBRSxJQUhlO0FBSXBCQyxNQUFJLEVBQUUsSUFKYztBQUtwQkMsU0FBTyxFQUFFLElBTFc7QUFNcEJDLFVBQVEsRUFBRSxJQU5VO0FBT3BCQyxTQUFPLEVBQUUsRUFQVztBQVFwQkMsT0FBSyxFQUFFO0FBUmEsQ0FBckI7O0FBV0EsTUFBTWhCLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUdPLFlBQVQsRUFBdUJOLE1BQXZCLEtBQThDO0FBQ2pFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtjLG1FQUFMO0FBQ0MsYUFBT2YsTUFBTSxDQUFDSSxPQUFkOztBQUNEO0FBQ0MsYUFBT0wsS0FBUDtBQUpGO0FBTUEsQ0FQRDs7QUFTQSwrREFBZUQsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUNUTyxJQUFLaUIsZUFBWjs7V0FBWUEsZTtBQUFBQSxpQjtBQUFBQSxpQjtHQUFBQSxlLEtBQUFBLGU7Ozs7Ozs7Ozs7O0FDYlosZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuY29uc3QgV3JhcHBlZEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iLCIvLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBSb290U3RhdGUgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0IHRodW5rLCB7IFRodW5rQWN0aW9uLCBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiA9IChjb250ZXh0OiBDb250ZXh0KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8Um9vdFN0YXRlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgdHlwZSBOZXh0VGh1bmtEaXNwYXRjaCA9IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB2b2lkLCBBbnlBY3Rpb24+O1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0dXNlcjogdXNlclJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0ge1xyXG5cdFx0XHQuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcblx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG5cdFx0fTtcclxuXHRcdGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQ7IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cclxuXHRcdHJldHVybiBuZXh0U3RhdGU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcbiIsImltcG9ydCB7IElVc2VyLCBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy91c2VyJztcclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuXHRpc09ubGluZTogZmFsc2UsXHJcblx0aXNBZG1pbjogdHJ1ZSxcclxuXHRfaWQ6IG51bGwsXHJcblx0bmFtZTogbnVsbCxcclxuXHRzdXJuYW1lOiBudWxsLFxyXG5cdG5pY2tuYW1lOiBudWxsLFxyXG5cdGZyaWVuZHM6IFtdLFxyXG5cdGNoYXRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5GRVRDSF9VU0VSOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXIiLCJpbXBvcnQgeyBJQ2hhdCB9IGZyb20gJy4vY2hhdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcclxuXHRpc09ubGluZTogYm9vbGVhbjtcclxuXHRpc0FkbWluPzogYm9vbGVhbjtcclxuXHRfaWQ6IHN0cmluZyB8IG51bGw7XHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRzdXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdG5pY2tuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdGNoYXRzOiBJQ2hhdFtdIHwgW107XHJcblx0ZnJpZW5kczogSVVzZXJbXSB8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdEZFVENIX1VTRVIgPSAnRkVUQ0hfVVNFUicsXHJcblx0RkVUQ0hfVVNFUl9FUlJPUiA9ICdGRVRDSF9VU0VSX0VSUk9SJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVXNlckFjdGlvbiB7XHJcblx0dHlwZTogVXNlckFjdGlvblR5cGVzLkZFVENIX1VTRVI7XHJcblx0cGF5bG9hZDogSVVzZXI7XHJcbn1cclxuaW50ZXJmYWNlIEZldGNoVXNlckVycm9yQWN0aW9uIHtcclxuXHR0eXBlOiBVc2VyQWN0aW9uVHlwZXMuRkVUQ0hfVVNFUl9FUlJPUjtcclxuXHRwYXlsb2FkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBGZXRjaFVzZXJBY3Rpb24gfCBGZXRjaFVzZXJFcnJvckFjdGlvbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=