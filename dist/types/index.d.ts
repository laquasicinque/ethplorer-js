export declare class Ethplorer {
    protected _baseUrl: string;
    private apiKey;
    constructor(apiKey?: string);
    getTokenInfo(address: string, params?: GenericParams): EthplorerResponse<TokenInfo>;
    getAddressInfo(address: string, params?: GenericParams): EthplorerResponse<AddressInfo>;
    getTxInfo(transactionHash: string, params?: GenericParams): EthplorerResponse<TransactionInfo>;
    getTokenHistory(address: string, params?: TokenHistoryParams): EthplorerResponse<HistoryResponse>;
    getAddressHistory(address: string, params?: AddressHistoryParams): EthplorerResponse<HistoryResponse>;
    getAddressTransactions(address: string, params?: AddressTransactionParams): EthplorerResponse<AddressTransaction[]>;
    getTop(params?: TopParams): EthplorerResponse<GetTopResponse>;
    getTopTokens(params?: TopTokensParams): EthplorerResponse<GetTopTokensResponse>;
    getTokenHistoryGrouped(address: string, params?: TokenHistoryGroupedParams): EthplorerResponse<GetHistoryGroupedResponse>;
    getTokenPriceHistoryGrouped(address: string, params: TokenHistoryGroupedParams): EthplorerResponse<GetTokenPriceHistoryGroupedResponse>;
    private _buildParams(paramObject?);
    private _get(url, optionalParams?);
}
export declare type EthplorerError = {
    error: {
        code: number;
        message: string;
    };
};
export declare type TokenInfo = {
    address: string;
    totalSupply: string;
    name: string;
    symbol: string;
    decimals: number;
    price: {
        rate: number;
        currency: string;
        diff: number;
        ts: number;
    } | false;
    owner: string;
    countOps?: number;
    totalIn: number;
    totalOut: number;
    holdersCount: number;
    issuancesCount: number;
};
export declare type AddressInfo = {
    address: string;
    ETH: {
        balance: number;
        totalIn: number;
        totalOut: number;
    };
    contractInfo?: {
        creatorAddress: string;
        transactionHash: string;
        timestamp: number;
    };
    tokenInfo?: TokenInfo;
    tokens?: TokenStruct[];
    countTxs: number;
};
export declare type TokenStruct = {
    tokenInfo: TokenInfo;
    balance: number;
    totalIn: number;
    totalOut: number;
};
export declare type TransactionInfo = {
    hash: string;
    timestamp: number;
    blockNumber: number;
    comfirmations: number;
    success: boolean;
    form: string;
    to: string;
    value: number;
    input: string;
    gasLimit: number;
    gasUsed: number;
    logs: EthplorerEvent[];
    operations: TokenHistory[];
};
export declare type EthplorerEvent = {
    address: string;
    topics: string[];
    data: string;
};
export declare type TokenHistory = {
    timestamp: number;
    transactionHash: string;
    value: string;
    intValue: number;
    type: string;
    priority: number;
    from: string;
    to: string;
    addresses?: string[];
    address?: string;
    tokenInfo: TokenInfo;
};
export declare type AddressTransaction = {
    timestamp: number;
    from: string;
    to: string;
    hash: string;
    value: number;
    input: string;
    success: boolean;
};
export declare type GroupedTokenHistory = {
    _id: {
        year: number;
        month: number;
        day: number;
    };
    ts: number;
    cnt: number;
};
export declare type GroupedTokenPriceHistory = {
    ts: number;
    date: string;
    open: string;
    close: string;
    high: string;
    low: string;
    volume: string;
    volumeConverted: string;
    average: string;
};
export declare type EthplorerResponse<T> = Promise<T | EthplorerError>;
export declare type HistoryResponse = {
    operations: TokenHistory[];
};
export declare type GetTopResponse = {
    tokens: (TokenInfo)[];
};
export declare type GetTopTokensResponse = {
    tokens: (TokenInfo)[];
};
export declare type GetHistoryGroupedResponse = {
    countTxs: GroupedTokenHistory[];
};
export declare type GetTokenPriceHistoryGroupedResponse = {
    history: {
        countTxs: GetHistoryGroupedResponse;
        prices: GroupedTokenPriceHistory;
        current?: boolean;
    };
};
export declare type GenericParams = {
    [name: string]: any;
};
export declare type EthplorerParams = {
    apiKey: string;
} & GenericParams;
export declare type TokenHistoryParams = {
    type?: string;
    limit?: OneToTen;
} & GenericParams;
export declare type AddressHistoryParams = {
    token?: string;
    type?: string;
    limit?: OneToTen;
} & GenericParams;
export declare type AddressTransactionParams = {
    limit?: OneToFifty;
    showZeroValues?: 1 | 0;
} & GenericParams;
export declare type TopParams = {
    criteria?: "trade";
    "cap";
    "count";
    limit?: OneToFifty;
} & GenericParams;
export declare type TopTokensParams = {
    period?: number;
    limit?: OneToFifty;
} & GenericParams;
export declare type TokenHistoryGroupedParams = {
    period?: number;
} & GenericParams;
export declare type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare type ElevenToTwenty = 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export declare type TwentyOneToThirty = 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
export declare type ThirtyOneToForty = 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export declare type FortyOneToFifty = 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50;
export declare type OneToFifty = OneToTen | ElevenToTwenty | TwentyOneToThirty | ThirtyOneToForty | FortyOneToFifty;
