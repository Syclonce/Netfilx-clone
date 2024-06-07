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
exports.id = "pages/profiles";
exports.ids = ["pages/profiles"];
exports.modules = {

/***/ "./hooks/useCurrentUser.ts":
/*!*********************************!*\
  !*** ./hooks/useCurrentUser.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/fetcher */ \"./libs/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useCurrentUser = ()=>{\n    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/current\", _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    return {\n        data,\n        error,\n        isLoading,\n        mutate\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDdXJyZW50VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0I7QUFFYTtBQUVyQyxNQUFNRSxpQkFBaUIsSUFBTTtJQUMzQixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQyxnQkFBZ0JDLHFEQUFPQTtJQUN6RSxPQUFPO1FBQ0xFO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlSixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV0Zmxpay8uL2hvb2tzL3VzZUN1cnJlbnRVc2VyLnRzPzQ3ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5cbmltcG9ydCBmZXRjaGVyIGZyb20gJ0AvbGlicy9mZXRjaGVyJztcblxuY29uc3QgdXNlQ3VycmVudFVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgbXV0YXRlIH0gPSB1c2VTd3IoJy9hcGkvY3VycmVudCcsIGZldGNoZXIpO1xuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIG11dGF0ZSxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ3VycmVudFVzZXI7XG4iXSwibmFtZXMiOlsidXNlU3dyIiwiZmV0Y2hlciIsInVzZUN1cnJlbnRVc2VyIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwibXV0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useCurrentUser.ts\n");

/***/ }),

/***/ "./libs/fetcher.ts":
/*!*************************!*\
  !*** ./libs/fetcher.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2ZldGNoZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVSxDQUFDQyxNQUFnQkYsaURBQVMsQ0FBQ0UsS0FBS0UsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO0FBRXBFLGlFQUFlTCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV0Zmxpay8uL2xpYnMvZmV0Y2hlci50cz81OWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoZXIiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/fetcher.ts\n");

/***/ }),

/***/ "./pages/profiles.tsx":
/*!****************************!*\
  !*** ./pages/profiles.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useCurrentUser */ \"./hooks/useCurrentUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__]);\n_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst images = [\n    \"/images/default-blue.png\",\n    \"/images/default-red.png\",\n    \"/images/default-slate.png\",\n    \"/images/default-green.png\"\n];\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nconst UserCard = ({ name  })=>{\n    const imgSrc = images[Math.floor(Math.random() * 4)];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group flex-row w-44 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    draggable: false,\n                    className: \"w-max h-max object-contain\",\n                    src: imgSrc,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 text-gray-400 text-2xl text-center group-hover:text-white\",\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\nconst App = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: currentUser  } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const selectProfile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        router.push(\"/\");\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center h-full justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl md:text-6xl text-white text-center\",\n                    children: \"Who's watching?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-8 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>selectProfile(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserCard, {\n                            name: currentUser?.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code\\\\deva\\\\Nutflik\\\\pages\\\\profiles.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lEO0FBQ2pCO0FBQ0o7QUFFZ0I7QUFFcEQsTUFBTUksU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFNTSxlQUFlQyxtQkFBbUJDLE9BQXdCLEVBQUU7SUFDakUsTUFBTUMsVUFBVSxNQUFNUCwyREFBVUEsQ0FBQ007SUFFakMsSUFBSSxDQUFDQyxTQUFTO1FBQ1osT0FBTztZQUNMQyxVQUFVO2dCQUNSQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDbEI7UUFDRjtJQUNGLENBQUM7SUFFRCxPQUFPO1FBQ0xDLE9BQU8sQ0FBQztJQUNWO0FBQ0YsQ0FBQztBQUVELE1BQU1DLFdBQW9DLENBQUMsRUFBRUMsS0FBSSxFQUFFLEdBQUs7SUFDdEQsTUFBTUMsU0FBU1YsTUFBTSxDQUFDVyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxHQUFHO0lBRXBELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJQyxXQUFXLEtBQUs7b0JBQUVGLFdBQVU7b0JBQTZCRyxLQUFLUjtvQkFBUVMsS0FBSTs7Ozs7Ozs7Ozs7MEJBRW5GLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFBa0VOOzs7Ozs7Ozs7Ozs7QUFHdkY7QUFFQSxNQUFNVyxNQUFNLElBQU07SUFDaEIsTUFBTUMsU0FBU3hCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUV5QixNQUFNQyxZQUFXLEVBQUUsR0FBR3hCLGlFQUFjQTtJQUU1QyxNQUFNeUIsZ0JBQWdCMUIsa0RBQVdBLENBQUMsSUFBTTtRQUN0Q3VCLE9BQU9JLElBQUksQ0FBQztJQUNkLEdBQUc7UUFBQ0o7S0FBTztJQUVYLHFCQUNFLDhEQUFDUDtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1c7b0JBQUdYLFdBQVU7OEJBQThDOzs7Ozs7OEJBQzVELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlhLFNBQVMsSUFBTUg7a0NBQ2xCLDRFQUFDaEI7NEJBQVNDLE1BQU1jLGFBQWFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7QUFFQSxpRUFBZVcsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL251dGZsaWsvLi9wYWdlcy9wcm9maWxlcy50c3g/OTBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHVzZUN1cnJlbnRVc2VyIGZyb20gXCJAL2hvb2tzL3VzZUN1cnJlbnRVc2VyXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgJy9pbWFnZXMvZGVmYXVsdC1ibHVlLnBuZycsXG4gICcvaW1hZ2VzL2RlZmF1bHQtcmVkLnBuZycsXG4gICcvaW1hZ2VzL2RlZmF1bHQtc2xhdGUucG5nJyxcbiAgJy9pbWFnZXMvZGVmYXVsdC1ncmVlbi5wbmcnXG5dXG5cbmludGVyZmFjZSBVc2VyQ2FyZFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvYXV0aCcsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge31cbiAgfVxufVxuXG5jb25zdCBVc2VyQ2FyZDogUmVhY3QuRkM8VXNlckNhcmRQcm9wcz4gPSAoeyBuYW1lIH0pID0+IHtcbiAgY29uc3QgaW1nU3JjID0gaW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleC1yb3cgdy00NCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00NCBoLTQ0IHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IGdyb3VwLWhvdmVyOmN1cnNvci1wb2ludGVyIGdyb3VwLWhvdmVyOmJvcmRlci13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8aW1nIGRyYWdnYWJsZT17ZmFsc2V9IGNsYXNzTmFtZT1cInctbWF4IGgtbWF4IG9iamVjdC1jb250YWluXCIgc3JjPXtpbWdTcmN9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHRleHQtZ3JheS00MDAgdGV4dC0yeGwgdGV4dC1jZW50ZXIgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiPntuYW1lfTwvZGl2PlxuICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFVzZXIgfSA9IHVzZUN1cnJlbnRVc2VyKCk7XG5cbiAgY29uc3Qgc2VsZWN0UHJvZmlsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTZ4bCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+V2hvJiMzOTtzIHdhdGNoaW5nPzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTggbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdFByb2ZpbGUoKX0+XG4gICAgICAgICAgICA8VXNlckNhcmQgbmFtZT17Y3VycmVudFVzZXI/Lm5hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwidXNlUm91dGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VDdXJyZW50VXNlciIsImltYWdlcyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIiwiVXNlckNhcmQiLCJuYW1lIiwiaW1nU3JjIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiZHJhZ2dhYmxlIiwic3JjIiwiYWx0IiwiQXBwIiwicm91dGVyIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwic2VsZWN0UHJvZmlsZSIsInB1c2giLCJoMSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profiles.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profiles.tsx"));
module.exports = __webpack_exports__;

})();