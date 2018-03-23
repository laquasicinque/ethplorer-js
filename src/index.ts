import axios, { AxiosResponse } from 'axios';
import {
    GenericParams,
    EthplorerResponse,
    TokenInfo,
    AddressInfo,
    TransactionInfo,
    HistoryResponse,
    TokenHistoryParams,
    AddressHistoryParams,
    AddressTransactionParams,
    AddressTransaction,
    TopParams,
    GetTopResponse,
    GetTopTokensResponse,
    TopTokensParams,
    TokenHistoryGroupedParams,
    GetHistoryGroupedResponse,
    GetTokenPriceHistoryGroupedResponse,
    EthplorerParams,

} from './types';

export class Ethplorer {
    protected _baseUrl = "https://api.ethplorer.io";

    private apiKey: string;

    constructor(apiKey: string = "freekey") {
        if (typeof apiKey !== "string")
            throw new Error("Provided API Key must be a string.");
        this.apiKey = apiKey;
    }

    public async getTokenInfo(address: string, params?: GenericParams): EthplorerResponse<TokenInfo> {
        let response = await this._get(`getTokenInfo/${address}`, params);

        return response.data;
    }

    public async getAddressInfo(address: string, params?: GenericParams): EthplorerResponse<AddressInfo> {
        let response = await this._get(`getAddressInfo/${address}`, params)

        return response.data;
    }

    public async getTxInfo(transactionHash: string, params?: GenericParams): EthplorerResponse<TransactionInfo> {
        let response = await this._get(`getTxInfo/${transactionHash}`, params);

        return response.data;
    }

    public async getTokenHistory(address: string, params?: TokenHistoryParams): EthplorerResponse<HistoryResponse> {
        let response = await this._get(`getTxInfo/${address}`, params);
        return response.data;
    }

    public async getAddressHistory(address: string, params?: AddressHistoryParams): EthplorerResponse<HistoryResponse> {
        let response = await this._get(`getTxInfo/${address}`, params);

        return response.data
    }

    public async getAddressTransactions(address: string, params?: AddressTransactionParams): EthplorerResponse<AddressTransaction[]> {
        let response = await this._get(`getAddressTransactions/${address}`, params);

        return response.data;
    }

    public async getTop(params?: TopParams): EthplorerResponse<GetTopResponse> {
        let response = await this._get(`getTop`, params);

        return response.data;
    }

    public async getTopTokens(params?: TopTokensParams): EthplorerResponse<GetTopTokensResponse> {
        let response = await this._get(`getTopTokens`, params);

        return response.data;
    }

    public async getTokenHistoryGrouped(address: string, params?: TokenHistoryGroupedParams): EthplorerResponse<GetHistoryGroupedResponse> {
        let response = await this._get(`getTop`, params);

        return response.data;
    }

    public async getTokenPriceHistoryGrouped(address: string, params: TokenHistoryGroupedParams): EthplorerResponse<GetTokenPriceHistoryGroupedResponse> {
        let response = await this._get(`getTop`, params);

        return response.data
    }

    private _buildParams(paramObject?: object): EthplorerParams {
        let params = paramObject != null ? paramObject : {};
        return {
            apiKey: this.apiKey,
            ...params
        };
    }

    private async _get(url: string, optionalParams?: GenericParams): Promise<AxiosResponse> {
        let params: EthplorerParams = this._buildParams(optionalParams);
        return axios.get(`${this._baseUrl}/${url}`, {
            params,
        })
    }


}
