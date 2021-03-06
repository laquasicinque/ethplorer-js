import axios, { AxiosResponse } from 'axios';


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
        let response = await this._get(`getTokenHistory/${address}`, params);
        return response.data;
    }

    public async getAddressHistory(address: string, params?: AddressHistoryParams): EthplorerResponse<HistoryResponse> {
        let response = await this._get(`getAddressHistory/${address}`, params);

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
        let response = await this._get(`getTokenHistoryGrouped`, params);

        return response.data;
    }

    public async getTokenPriceHistoryGrouped(address: string, params: TokenHistoryGroupedParams): EthplorerResponse<GetTokenPriceHistoryGroupedResponse> {
        let response = await this._get(`getTokenPriceHistoryGrouped`, params);

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

/**
 * Type Declarations
 */

export type EthplorerError = {
    error: {
        code: number,
        message: string
    }
}

export type TokenInfo = {
    address: string,
    totalSupply: string,
    name: string,
    symbol: string,
    decimals: number,
    price: {
        rate: number,
        currency: string,
        diff: number,
        ts: number,
    } | false,
    owner: string,
    countOps?: number,
    totalIn: number,
    totalOut: number,
    holdersCount: number,
    issuancesCount: number,
    [name: string]: any
}

export type AddressInfo = {
    address: string,
    ETH: {
        balance: number,
        totalIn: number,
        totalOut: number
    },
    contractInfo?: {
        creatorAddress: string,
        transactionHash: string,
        timestamp: number
    },
    tokenInfo?: TokenInfo,
    tokens?: TokenStruct[],
    countTxs: number,
    [name: string]: any
}

export type TokenStruct = {
    tokenInfo: TokenInfo,
    balance: number,
    totalIn: number,
    totalOut: number,
    [name: string]: any
}

export type TransactionInfo = {
    hash: string,
    timestamp: number,
    blockNumber: number,
    comfirmations: number,
    success: boolean,
    form: string,
    to: string,
    value: number,
    input: string,
    gasLimit: number,
    gasUsed: number,
    logs: EthplorerEvent[],
    operations: TokenHistory[],
    [name: string]: any
}

export type EthplorerEvent = {
    address: string,
    topics: string[],
    data: string,
    [name: string]: any
}

export type TokenHistory = {
    timestamp: number,
    transactionHash: string,
    value: string,
    intValue: number,
    type: string,
    priority: number,
    from: string,
    to: string,
    addresses?: string[],
    address?: string,
    tokenInfo: TokenInfo,
    [name: string]: any
}

export type AddressTransaction = {
    timestamp: number,
    from: string,
    to: string,
    hash: string,
    value: number,
    input: string,
    success: boolean,
    [name: string]: any
}

export type GroupedTokenHistory = {
    _id: {
        year: number,
        month: number,
        day: number,
    },
    ts: number,
    cnt: number,
    [name: string]: any
}

export type GroupedTokenPriceHistory = {
    ts: number,
    date: string,
    open: string,
    close: string,
    high: string,
    low: string,
    volume: string,
    volumeConverted: string,
    average: string,
    [name: string]: any
}

//TODO: volume stuff

/** 
 * Responses, only if they're different
 */

export type EthplorerResponse<T> = Promise<T | EthplorerError>

export type HistoryResponse = {
    operations: TokenHistory[],
    [name: string]: any
}

export type GetTopResponse = {
    tokens: TokenInfo[],
    [name: string]: any
}

export type GetTopTokensResponse = {
    tokens: TokenInfo[],
    [name: string]: any
}

export type GetHistoryGroupedResponse = {
    countTxs: GroupedTokenHistory[],
    [name: string]: any
}

export type GetTokenPriceHistoryGroupedResponse = {
    history: {
        countTxs: GetHistoryGroupedResponse,
        prices: GroupedTokenPriceHistory,
        current?: boolean
    },
    [name: string]: any
}

/** 
 * Parameters
 */

export type GenericParams = {
    [name: string]: any,
}

export type EthplorerParams = {
    apiKey: string,
    [name: string]: any
} & GenericParams


export type TokenHistoryParams = {
    type?: string,
    limit?: OneToTen,
    [name: string]: any
} & GenericParams

export type AddressHistoryParams = {
    token?: string,
    type?: string,
    limit?: OneToTen,
    [name: string]: any
} & GenericParams

export type AddressTransactionParams = {
    limit?: OneToFifty,
    showZeroValues?: 1 | 0,
    [name: string]: any
} & GenericParams

export type TopParams = {
    criteria?: "trade", "cap", "count",
    limit?: OneToFifty,
    [name: string]: any
} & GenericParams

export type TopTokensParams = {
    period?: number,
    limit?: OneToFifty,
    [name: string]: any
} & GenericParams

export type TokenHistoryGroupedParams = {
    period?: number,
    [name: string]: any
} & GenericParams


/**
 * Helper Types
 */

export type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type ElevenToTwenty = 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
export type TwentyOneToThirty = 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
export type ThirtyOneToForty = 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
export type FortyOneToFifty = 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
export type OneToFifty = OneToTen | ElevenToTwenty | TwentyOneToThirty | ThirtyOneToForty | FortyOneToFifty
