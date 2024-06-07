"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/watch/[movieId]";
exports.ids = ["pages/watch/[movieId]"];
exports.modules = {

/***/ "./hooks/useMovie.ts":
/*!***************************!*\
  !*** ./hooks/useMovie.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/fetcher */ \"./libs/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useMovie = (id)=>{\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id ? `/api/movies/${id}` : null, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        revalidateIfStale: false,\n        revalidateOnFocus: false,\n        revalidateOnReconnect: false\n    });\n    return {\n        data,\n        error,\n        isLoading\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMovie);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNb3ZpZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0I7QUFDYTtBQUVyQyxNQUFNRSxXQUFXLENBQUNDLEtBQWdCO0lBQ2hDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQ0csS0FBSyxDQUFDLFlBQVksRUFBRUEsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFRixxREFBT0EsRUFBRTtRQUNsRk0sbUJBQW1CLEtBQUs7UUFDeEJDLG1CQUFtQixLQUFLO1FBQ3hCQyx1QkFBdUIsS0FBSztJQUM5QjtJQUNBLE9BQU87UUFDTEw7UUFDQUM7UUFDQUM7SUFDRjtBQUNGO0FBRUEsaUVBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXRmbGlrLy4vaG9va3MvdXNlTW92aWUudHM/NzFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0AvbGlicy9mZXRjaGVyJztcblxuY29uc3QgdXNlTW92aWUgPSAoaWQ/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTd3IoaWQgPyBgL2FwaS9tb3ZpZXMvJHtpZH1gIDogbnVsbCwgZmV0Y2hlciwge1xuICAgIHJldmFsaWRhdGVJZlN0YWxlOiBmYWxzZSxcbiAgICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXG4gICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiBmYWxzZSxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTW92aWU7XG4iXSwibmFtZXMiOlsidXNlU3dyIiwiZmV0Y2hlciIsInVzZU1vdmllIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJyZXZhbGlkYXRlSWZTdGFsZSIsInJldmFsaWRhdGVPbkZvY3VzIiwicmV2YWxpZGF0ZU9uUmVjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useMovie.ts\n");

/***/ }),

/***/ "./libs/fetcher.ts":
/*!*************************!*\
  !*** ./libs/fetcher.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2ZldGNoZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVSxDQUFDQyxNQUFnQkYsaURBQVMsQ0FBQ0UsS0FBS0UsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO0FBRXBFLGlFQUFlTCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV0Zmxpay8uL2xpYnMvZmV0Y2hlci50cz81OWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoZXIiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/fetcher.ts\n");

/***/ }),

/***/ "./pages/watch/[movieId].tsx":
/*!***********************************!*\
  !*** ./pages/watch/[movieId].tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"@heroicons/react/24/outline\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__]);\n_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Watch = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, {\n                        onClick: ()=>router.push(\"/\"),\n                        className: \"w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-1xl md:text-3xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-light\",\n                                children: \"Watching:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            data?.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"h-full w-full\",\n                autoPlay: true,\n                controls: true,\n                src: data?.videoUrl\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\watch\\\\[movieId].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bbW92aWVJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQ3BCO0FBQ0E7QUFFeEMsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLFFBQU8sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRWhDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdMLDJEQUFRQSxDQUFDRztJQUUxQixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1Qsc0VBQWFBO3dCQUFDVyxTQUFTLElBQU1QLE9BQU9RLElBQUksQ0FBQzt3QkFBTUgsV0FBVTs7Ozs7O2tDQUMxRCw4REFBQ0k7d0JBQUVKLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBS0wsV0FBVTswQ0FBYTs7Ozs7OzRCQUFnQjs0QkFBRUYsTUFBTVE7Ozs7Ozs7Ozs7Ozs7MEJBR3pELDhEQUFDQztnQkFBTVAsV0FBVTtnQkFBZ0JRLFFBQVE7Z0JBQUNDLFFBQVE7Z0JBQUNDLEtBQUtaLE1BQU1hOzs7Ozs7Ozs7Ozs7QUFHcEU7QUFFQSxpRUFBZWpCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXRmbGlrLy4vcGFnZXMvd2F0Y2gvW21vdmllSWRdLnRzeD9mZTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnJvd0xlZnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VNb3ZpZSBmcm9tICdAL2hvb2tzL3VzZU1vdmllJztcblxuY29uc3QgV2F0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IG1vdmllSWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHVzZU1vdmllKG1vdmllSWQgYXMgc3RyaW5nKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBiZy1ibGFja1wiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB3LWZ1bGwgcC00IHotMTAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTggYmctYmxhY2sgYmctb3BhY2l0eS03MFwiPlxuICAgICAgICA8QXJyb3dMZWZ0SWNvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSBjbGFzc05hbWU9XCJ3LTQgbWQ6dy0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvblwiIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0xeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPldhdGNoaW5nOjwvc3Bhbj4ge2RhdGE/LnRpdGxlfVxuICAgICAgICA8L3A+XG4gICAgICA8L25hdj5cbiAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCIgYXV0b1BsYXkgY29udHJvbHMgc3JjPXtkYXRhPy52aWRlb1VybH0+PC92aWRlbz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFycm93TGVmdEljb24iLCJ1c2VSb3V0ZXIiLCJ1c2VNb3ZpZSIsIldhdGNoIiwicm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsIm9uQ2xpY2siLCJwdXNoIiwicCIsInNwYW4iLCJ0aXRsZSIsInZpZGVvIiwiYXV0b1BsYXkiLCJjb250cm9scyIsInNyYyIsInZpZGVvVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[movieId].tsx\n");

/***/ }),

/***/ "@heroicons/react/24/outline":
/*!**********************************************!*\
  !*** external "@heroicons/react/24/outline" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/watch/[movieId].tsx"));
module.exports = __webpack_exports__;

})();