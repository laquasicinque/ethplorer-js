"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Ethplorer {
    constructor(apiKey = "freekey") {
        this._baseUrl = "https://api.ethplorer.io";
        if (typeof apiKey !== "string")
            throw new Error("Provided API Key must be a string.");
        this.apiKey = apiKey;
    }
    getTokenInfo(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTokenInfo/${address}`, params);
            return response.data;
        });
    }
    getAddressInfo(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getAddressInfo/${address}`, params);
            return response.data;
        });
    }
    getTxInfo(transactionHash, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTxInfo/${transactionHash}`, params);
            return response.data;
        });
    }
    getTokenHistory(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTxInfo/${address}`, params);
            return response.data;
        });
    }
    getAddressHistory(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTxInfo/${address}`, params);
            return response.data;
        });
    }
    getAddressTransactions(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getAddressTransactions/${address}`, params);
            return response.data;
        });
    }
    getTop(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTop`, params);
            return response.data;
        });
    }
    getTopTokens(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTopTokens`, params);
            return response.data;
        });
    }
    getTokenHistoryGrouped(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTop`, params);
            return response.data;
        });
    }
    getTokenPriceHistoryGrouped(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._get(`getTop`, params);
            return response.data;
        });
    }
    _buildParams(paramObject) {
        let params = paramObject != null ? paramObject : {};
        return Object.assign({ apiKey: this.apiKey }, params);
    }
    _get(url, optionalParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = this._buildParams(optionalParams);
            return axios_1.default.get(`${this._baseUrl}/${url}`, {
                params,
            });
        });
    }
}
exports.Ethplorer = Ethplorer;
