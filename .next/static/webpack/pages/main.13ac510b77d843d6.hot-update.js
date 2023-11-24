/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/main.tsx":
/*!************************!*\
  !*** ./pages/main.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _src_components_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Search/Search */ \"./src/components/Search/Search.tsx\");\n/* harmony import */ var _src_components_API_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/API/API */ \"./src/components/API/API.tsx\");\n/* harmony import */ var _src_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Modal/Modal */ \"./src/components/Modal/Modal.tsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./pages/index.tsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MainPage = (param)=>{\n    let { results, count } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_index__WEBPACK_IMPORTED_MODULE_4___default()), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Search_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        \"data-testid\": \"main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_API_API__WEBPACK_IMPORTED_MODULE_2__.API, {\n                                results: results,\n                                count: count\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                results: results,\n                                count: count\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\main.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = MainPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxRDtBQUNMO0FBQ0U7QUFFdEI7QUFHNUIsTUFBTUksV0FBVztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFVO0lBQzFDLHFCQUNFO2tCQUNFLDRFQUFDSCwrQ0FBS0E7c0JBQ0osNEVBQUNJOztrQ0FDQyw4REFBQ1AscUVBQU1BOzs7OztrQ0FDUCw4REFBQ1E7d0JBQUlDLFdBQVU7d0JBQVlDLGVBQVk7OzBDQUNyQyw4REFBQ1Qsd0RBQUdBO2dDQUFDSSxTQUFTQTtnQ0FBU0MsT0FBT0E7Ozs7OzswQ0FDOUIsOERBQUNKLG1FQUFLQTtnQ0FBQ0csU0FBU0E7Z0NBQVNDLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7S0FkTUY7O0FBZ0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4udHN4PzcxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQVBJL0FQSSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IElQYXJhbSB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1R5cGVzL2luZGV4JztcclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKHsgcmVzdWx0cywgY291bnQgfTogSVBhcmFtKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbmRleD5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS10ZXN0aWQ9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxBUEkgcmVzdWx0cz17cmVzdWx0c30gY291bnQ9e2NvdW50fSAvPlxyXG4gICAgICAgICAgICA8TW9kYWwgcmVzdWx0cz17cmVzdWx0c30gY291bnQ9e2NvdW50fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L0luZGV4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPElQYXJhbT4gPSBhc3luYyAoe1xyXG4gIHF1ZXJ5OiB7IHBhZ2UgPSAxLCBrZXl3b3JkID0gJycgfSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS9zdGFyc2hpcHMnO1xyXG4gIGNvbnN0IHVybEhhc0xTOiBzdHJpbmcgPSBgJHt1cmx9Lz9zZWFyY2g9JHtrZXl3b3JkfSZwYWdlPSR7cGFnZX1gO1xyXG4gIGNvbnN0IFVSTDogc3RyaW5nID0gdXJsSGFzTFM7XHJcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczogcmVxdWVzdCxcclxuICB9KTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY291bnQ6IHVzZXIuY291bnQsXHJcbiAgICAgIHJlc3VsdHM6IHVzZXIucmVzdWx0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlNlYXJjaCIsIkFQSSIsIk1vZGFsIiwiSW5kZXgiLCJNYWluUGFnZSIsInJlc3VsdHMiLCJjb3VudCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXRlc3RpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main.tsx\n"));

/***/ })

});