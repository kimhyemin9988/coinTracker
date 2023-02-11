import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchCoinPrice } from "../api";
import { PriceInterface, CoinText, CoinContainer, OverviewItem } from "./CoinDetail";
import { CoinIdState } from "./Chart";


const Price = () => {
    const { state: coinId } = useLocation() as CoinIdState;
    const { isLoading: priceLoading, data: price } = useQuery<PriceInterface>(["price", coinId], () => fetchCoinPrice(coinId));
    return (
        <>
            {priceLoading ? "loading중입니다." :
                <CoinContainer>
                    <OverviewItem>
                        <CoinText>price : {price?.quotes.USD.ath_price}</CoinText>
                        <CoinText>All time high : {price?.quotes.USD.ath_price}</CoinText>
                        <CoinText>percent from price ATH : {price?.quotes.USD.percent_from_price_ath}%</CoinText>
                    </OverviewItem>
                </CoinContainer>
            }
        </>
    );
}
export default Price;