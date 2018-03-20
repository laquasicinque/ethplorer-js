declare class Ethplorer {
    constructor(apiKey?: string)
    public getTokenInfo(address: string, params?: GenericParams): EthplorerResponse<TokenInfo>
    public getAddressInfo(address: string, params?: GenericParams): EthplorerResponse<AddressInfo>
    public getTxInfo(transactionHash: string, params?: GenericParams): EthplorerResponse<TransactionInfo>
    public getTokenHistory(address: string, params?: TokenHistoryParams): EthplorerResponse<HistoryResponse>
    public getAddressHistory(address: string, params?: AddressHistoryParams): EthplorerResponse<HistoryResponse>
    public getAddressTransactions(address: string, params?: AddressTransactionParams): EthplorerResponse<AddressTransaction[]>
    public getTop(params?: TopParams): EthplorerResponse<GetTopResponse>
    public getTopTokens(params?: TopTokensParams): EthplorerResponse<GetTopTokensResponse>
    public getTokenHistoryGrouped(address: string, params?: TokenHistoryGroupedParams): EthplorerResponse<GetHistoryGroupedResponse>
    public getTokenPriceHistoryGrouped(address: string, params: TokenHistoryGroupedParams): EthplorerResponse<GetTokenPriceHistoryGroupedResponse>
}


type EthplorerError = {
    error: {
        code: number,
        message: string
    }
}

type TokenInfo = {
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
    issuancesCount: number
}

type AddressInfo = {
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
    countTxs: number
}

type TokenStruct = {
    tokenInfo: TokenInfo,
    balance: number,
    totalIn: number,
    totalOut: number
}

type TransactionInfo = {
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
}

type EthplorerEvent = {
    address: string,
    topics: string[],
    data: string,
}

type TokenHistory = {
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
}

type AddressTransaction = {
    timestamp: number,
    from: string,
    to: string,
    hash: string,
    value: number,
    input: string,
    success: boolean
}

type GroupedTokenHistory = {
    _id: {
        year: number,
        month: number,
        day: number,
    },
    ts: number,
    cnt: number
}

type GroupedTokenPriceHistory = {
    ts: number,
    date: string,
    open: string,
    close: string,
    high: string,
    low: string,
    volume: string,
    volumeConverted: string,
    average: string
}

//TODO: volume stuff

/** 
 * Responses, only if they're different
 */

type EthplorerResponse<T> = Promise<T | EthplorerError>

type HistoryResponse = {
    operations: TokenHistory[]
}

type GetTopResponse = {
    tokens: (TokenInfo)[]
}

type GetTopTokensResponse = {
    tokens: (TokenInfo)[]
}

type GetHistoryGroupedResponse = {
    countTxs: GroupedTokenHistory[]
}

type GetTokenPriceHistoryGroupedResponse = {
    history: {
        countTxs: GetHistoryGroupedResponse,
        prices: GroupedTokenPriceHistory,
        current?: boolean
    }
}

/** 
 * Parameters
 */

type GenericParams = {
    [name: string]: any,
}

type EthplorerParams = {
    apiKey: string
} & GenericParams


type TokenHistoryParams = {
    type?: string,
    limit?: OneToTen,
} & GenericParams

type AddressHistoryParams = {
    token?: string,
    type?: string,
    limit?: OneToTen
} & GenericParams

type AddressTransactionParams = {
    limit?: OneToFifty,
    showZeroValues?: 1 | 0
} & GenericParams

type TopParams = {
    criteria?: "trade", "cap", "count",
    limit?: OneToFifty
} & GenericParams

type TopTokensParams = {
    period?: number,
    limit?: OneToFifty
} & GenericParams

type TokenHistoryGroupedParams = {
    period?: number
} & GenericParams


/**
 * Helper Types
 */


type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type ElevenToTwenty = 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
type TwentyOneToThirty = 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
type ThirtyOneToForty = 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
type FortyOneToFifty = 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
type OneToFifty = OneToTen | ElevenToTwenty | TwentyOneToThirty | ThirtyOneToForty | FortyOneToFifty
