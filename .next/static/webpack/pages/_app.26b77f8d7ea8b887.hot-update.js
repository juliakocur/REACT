"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    React.useEffect(()=>{\n        const start = ()=>{\n            console.log(\"start\");\n            setLoading(true);\n        };\n        const end = ()=>{\n            console.log(\"finished\");\n            setLoading(false);\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", start);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", end);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", end);\n        return ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off(\"routeChangeStart\", start);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off(\"routeChangeComplete\", end);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off(\"routeChangeError\", end);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\projects\\\\REACT_COURSE\\\\REACT\\\\pages\\\\_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"bp7W7BLZaxNmS0ceaCBH82+KoGQ=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBR0c7QUFDQTtBQUVqQyxTQUFTRSxNQUFNLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2Q00sTUFBTUMsU0FBUyxDQUFDO1FBQ2QsTUFBTUMsUUFBUTtZQUNaQyxRQUFRQyxHQUFHLENBQUM7WUFDWkwsV0FBVztRQUNiO1FBQ0EsTUFBTU0sTUFBTTtZQUNWRixRQUFRQyxHQUFHLENBQUM7WUFDWkwsV0FBVztRQUNiO1FBQ0FOLHlEQUFhLENBQUNjLEVBQUUsQ0FBQyxvQkFBb0JMO1FBQ3JDVCx5REFBYSxDQUFDYyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4Q1oseURBQWEsQ0FBQ2MsRUFBRSxDQUFDLG9CQUFvQkY7UUFDckMsT0FBTztZQUNMWix5REFBYSxDQUFDZSxHQUFHLENBQUMsb0JBQW9CTjtZQUN0Q1QseURBQWEsQ0FBQ2UsR0FBRyxDQUFDLHVCQUF1Qkg7WUFDekNaLHlEQUFhLENBQUNlLEdBQUcsQ0FBQyxvQkFBb0JIO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNFLDhEQUFDVDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFBSTs7O0FBR2xDO0dBekJTRjtLQUFBQTtBQTJCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQnKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBlbmQpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGVuZCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0KTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBlbmQpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGVuZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUm91dGVyIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJlbmQiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});