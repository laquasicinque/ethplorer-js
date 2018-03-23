/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCI/MjUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst axios_1 = __webpack_require__(/*! axios */ 0);\r\nclass Ethplorer {\r\n    constructor(apiKey = \"freekey\") {\r\n        this._baseUrl = \"https://api.ethplorer.io\";\r\n        if (typeof apiKey !== \"string\")\r\n            throw new Error(\"Provided API Key must be a string.\");\r\n        this.apiKey = apiKey;\r\n    }\r\n    getTokenInfo(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTokenInfo/${address}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getAddressInfo(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getAddressInfo/${address}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTxInfo(transactionHash, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTxInfo/${transactionHash}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTokenHistory(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTxInfo/${address}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getAddressHistory(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTxInfo/${address}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getAddressTransactions(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getAddressTransactions/${address}`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTop(params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTop`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTopTokens(params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTopTokens`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTokenHistoryGrouped(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTop`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    getTokenPriceHistoryGrouped(address, params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield this._get(`getTop`, params);\r\n            return response.data;\r\n        });\r\n    }\r\n    _buildParams(paramObject) {\r\n        let params = paramObject != null ? paramObject : {};\r\n        return Object.assign({ apiKey: this.apiKey }, params);\r\n    }\r\n    _get(url, optionalParams) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let params = this._buildParams(optionalParams);\r\n            return axios_1.default.get(`${this._baseUrl}/${url}`, {\r\n                params,\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.Ethplorer = Ethplorer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC50cz9lYWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgR2VuZXJpY1BhcmFtcyxcclxuICAgIEV0aHBsb3JlclJlc3BvbnNlLFxyXG4gICAgVG9rZW5JbmZvLFxyXG4gICAgQWRkcmVzc0luZm8sXHJcbiAgICBUcmFuc2FjdGlvbkluZm8sXHJcbiAgICBIaXN0b3J5UmVzcG9uc2UsXHJcbiAgICBUb2tlbkhpc3RvcnlQYXJhbXMsXHJcbiAgICBBZGRyZXNzSGlzdG9yeVBhcmFtcyxcclxuICAgIEFkZHJlc3NUcmFuc2FjdGlvblBhcmFtcyxcclxuICAgIEFkZHJlc3NUcmFuc2FjdGlvbixcclxuICAgIFRvcFBhcmFtcyxcclxuICAgIEdldFRvcFJlc3BvbnNlLFxyXG4gICAgR2V0VG9wVG9rZW5zUmVzcG9uc2UsXHJcbiAgICBUb3BUb2tlbnNQYXJhbXMsXHJcbiAgICBUb2tlbkhpc3RvcnlHcm91cGVkUGFyYW1zLFxyXG4gICAgR2V0SGlzdG9yeUdyb3VwZWRSZXNwb25zZSxcclxuICAgIEdldFRva2VuUHJpY2VIaXN0b3J5R3JvdXBlZFJlc3BvbnNlLFxyXG4gICAgRXRocGxvcmVyUGFyYW1zLFxyXG5cclxufSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdGhwbG9yZXIge1xyXG4gICAgcHJvdGVjdGVkIF9iYXNlVXJsID0gXCJodHRwczovL2FwaS5ldGhwbG9yZXIuaW9cIjtcclxuXHJcbiAgICBwcml2YXRlIGFwaUtleTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwaUtleTogc3RyaW5nID0gXCJmcmVla2V5XCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFwaUtleSAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgQVBJIEtleSBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5JbmZvKGFkZHJlc3M6IHN0cmluZywgcGFyYW1zPzogR2VuZXJpY1BhcmFtcyk6IEV0aHBsb3JlclJlc3BvbnNlPFRva2VuSW5mbz4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2dldChgZ2V0VG9rZW5JbmZvLyR7YWRkcmVzc31gLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWRkcmVzc0luZm8oYWRkcmVzczogc3RyaW5nLCBwYXJhbXM/OiBHZW5lcmljUGFyYW1zKTogRXRocGxvcmVyUmVzcG9uc2U8QWRkcmVzc0luZm8+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXQoYGdldEFkZHJlc3NJbmZvLyR7YWRkcmVzc31gLCBwYXJhbXMpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRUeEluZm8odHJhbnNhY3Rpb25IYXNoOiBzdHJpbmcsIHBhcmFtcz86IEdlbmVyaWNQYXJhbXMpOiBFdGhwbG9yZXJSZXNwb25zZTxUcmFuc2FjdGlvbkluZm8+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXQoYGdldFR4SW5mby8ke3RyYW5zYWN0aW9uSGFzaH1gLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5IaXN0b3J5KGFkZHJlc3M6IHN0cmluZywgcGFyYW1zPzogVG9rZW5IaXN0b3J5UGFyYW1zKTogRXRocGxvcmVyUmVzcG9uc2U8SGlzdG9yeVJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0KGBnZXRUeEluZm8vJHthZGRyZXNzfWAsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEFkZHJlc3NIaXN0b3J5KGFkZHJlc3M6IHN0cmluZywgcGFyYW1zPzogQWRkcmVzc0hpc3RvcnlQYXJhbXMpOiBFdGhwbG9yZXJSZXNwb25zZTxIaXN0b3J5UmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXQoYGdldFR4SW5mby8ke2FkZHJlc3N9YCwgcGFyYW1zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWRkcmVzc1RyYW5zYWN0aW9ucyhhZGRyZXNzOiBzdHJpbmcsIHBhcmFtcz86IEFkZHJlc3NUcmFuc2FjdGlvblBhcmFtcyk6IEV0aHBsb3JlclJlc3BvbnNlPEFkZHJlc3NUcmFuc2FjdGlvbltdPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0KGBnZXRBZGRyZXNzVHJhbnNhY3Rpb25zLyR7YWRkcmVzc31gLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9wKHBhcmFtcz86IFRvcFBhcmFtcyk6IEV0aHBsb3JlclJlc3BvbnNlPEdldFRvcFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0KGBnZXRUb3BgLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9wVG9rZW5zKHBhcmFtcz86IFRvcFRva2Vuc1BhcmFtcyk6IEV0aHBsb3JlclJlc3BvbnNlPEdldFRvcFRva2Vuc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0KGBnZXRUb3BUb2tlbnNgLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5IaXN0b3J5R3JvdXBlZChhZGRyZXNzOiBzdHJpbmcsIHBhcmFtcz86IFRva2VuSGlzdG9yeUdyb3VwZWRQYXJhbXMpOiBFdGhwbG9yZXJSZXNwb25zZTxHZXRIaXN0b3J5R3JvdXBlZFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0KGBnZXRUb3BgLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5QcmljZUhpc3RvcnlHcm91cGVkKGFkZHJlc3M6IHN0cmluZywgcGFyYW1zOiBUb2tlbkhpc3RvcnlHcm91cGVkUGFyYW1zKTogRXRocGxvcmVyUmVzcG9uc2U8R2V0VG9rZW5QcmljZUhpc3RvcnlHcm91cGVkUmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXQoYGdldFRvcGAsIHBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYnVpbGRQYXJhbXMocGFyYW1PYmplY3Q/OiBvYmplY3QpOiBFdGhwbG9yZXJQYXJhbXMge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBwYXJhbU9iamVjdCAhPSBudWxsID8gcGFyYW1PYmplY3QgOiB7fTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxyXG4gICAgICAgICAgICAuLi5wYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2dldCh1cmw6IHN0cmluZywgb3B0aW9uYWxQYXJhbXM/OiBHZW5lcmljUGFyYW1zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IHBhcmFtczogRXRocGxvcmVyUGFyYW1zID0gdGhpcy5fYnVpbGRQYXJhbXMob3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7dGhpcy5fYmFzZVVybH0vJHt1cmx9YCwge1xyXG4gICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBdUJBO0FBS0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBdEZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);