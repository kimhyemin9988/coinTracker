export const fetchCoins = async () => {
    const response = await fetch('https://api.coinpaprika.com/v1/coins');
    const json = await response.json();
    return json;
}

export const fetchCoinInform = async (coinId: string) => {
    const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    const json = await response.json();
    return json;
}
export const fetchCoinPrice = async (coinId: string) => {
    const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    const json = await response.json();
    return json;
}

export const fetchCoinChart = async (coinId: string) => {
    const response = await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`);
    const json = await response.json();
    return json;
}