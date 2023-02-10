import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchCoinPrice } from "../api";
import { PriceInterface, CoinText, CoinContainer } from "./CoinDetail";
import { CoinIdState } from "./Chart";


const Price = () => {
    const { state: coinId } = useLocation() as CoinIdState;
    const { isLoading: priceLoading, data: price } = useQuery<PriceInterface>(["price", coinId], () => fetchCoinPrice(coinId));
    return (
        <>
        {priceLoading ? "loading중입니다." :
        <CoinContainer>
            <CoinText>price {price?.quotes.USD.price}</CoinText>
            <CoinText>ath_price {price?.quotes.USD.ath_price}</CoinText>
            <CoinText>percent_from_price_ath {price?.quotes.USD.percent_from_price_ath}</CoinText>
        </CoinContainer>
        }
        </>
    );
}
export default Price;