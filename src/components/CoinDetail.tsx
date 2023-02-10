import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInform, fetchCoinPrice } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { Header, ToggleThemeBtn, Main, Box1 } from "./Home";
//interface를 따로 만들지 않고 <>내부에 객체를 넣기 가능
interface Active {
    active: boolean;
}
const ChartPriceTab = styled(ToggleThemeBtn)<Active>`
    width: 50%;
    border-radius: 30px;
    height: auto;
`
const CoinName = styled.span`
    color: ${(props) => props.theme.titleColor};
`
export const CoinText = styled.span`
    color:${(props) => props.theme.textColor};
`
export const CoinContainer = styled(Box1)`
    width: 100%;
    height: auto;
    display: flex;
`
const HomeBtn = styled(ToggleThemeBtn)``

export interface RouterState {
    state: {
        id: string;
        name: string;
        symbol: string;
        rank: number;
        is_new: boolean;
        is_active: boolean;
        type: string;
    }
}
interface InformInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}
export interface PriceInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            price: number;
            ath_price: number;
            percent_from_price_ath:number;
        }
    }
}//{price}
interface coinIdInterface {
    coinId: string;
}
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
/* error 1) interface RouterState : 0개의 형식 인수가 필요한데 1개를 가져왔습니다.
    generic을 지원하지 않아 <> 형태가 아닌 as를 사용
    Generic : Class 내부에서 사용할 데이터의 타입을 외부에서 지정
    error 2)'Location' 형식에 'coin' 속성이 없습니다.
    Link state로 보냈으니 state로 받기
*/
const CoinDetail = () => {
    const pricematch = useMatch("/:coinId/price");
    const chartmatch = useMatch("/:coinId/chart");
    const { coinId } = useParams() as unknown as coinIdInterface; // coinId와 api가 일치해야함
    const { state: coin } = useLocation() as RouterState;
    const { isLoading: InformLoading, data: inform } = useQuery<InformInterface>(["Inform", coinId], () => fetchCoinInform(coinId));
    const { isLoading: PriceLoading, data: price } = useQuery<PriceInterface>(["Price", coinId], () => fetchCoinPrice(coinId));
    /*     const [inform, setInform] = useState<InformInterface>();
        const [price, setPrice] = useState<PriceInterface>();
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            (async () => {
                const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
                const json = await response.json();
                setInform(json);
            })();
            (async () => {
                const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
                const json = await response.json();
                setPrice(json);
            })();
            setLoading(false);
        }, []); */
    /*     console.log(Object.keys(inform).join());
        console.log(Object.values(inform).map(v => typeof v).join());
        console.log(Object.keys(price).join());
        console.log(Object.values(price).map(v => typeof v).join()); */
    const loading = InformLoading || PriceLoading;
    return (
        <>
            <Helmet>
                <title>{`코인트래커:${coin?.symbol}`}</title>
            </Helmet>
            <Header>
                <HomeBtn>
                    <Link to="/">코인트래커[home]</Link>
                </HomeBtn>
            </Header>
            <Main>
                <CoinContainer>
                    <CoinName>{coin?.name ? coin?.name : (loading ? "loading..." : inform?.name)}</CoinName>
                    <CoinText>Rank {coin?.rank ? coin?.rank : (loading ? "loading..." : inform?.rank)}</CoinText>
                    <CoinText>symbol {coin?.symbol ? coin?.symbol : (loading ? "loading..." : inform?.symbol)}</CoinText>
                    <CoinText>Price {price?.quotes.USD.price.toFixed(2)}</CoinText>
                    <CoinText>description {inform?.description}</CoinText>
                    <CoinText>total_supply {price?.total_supply}</CoinText>
                    <CoinText>max_supply {price?.max_supply}</CoinText>
                </CoinContainer>
                <ChartPriceTab active={chartmatch !== null}>
                    <Link to="chart" state={coinId}>see chart</Link>
                </ChartPriceTab>
                <ChartPriceTab active={pricematch !== null}>
                    <Link to="price" state={coinId}>see price</Link>
                </ChartPriceTab>
                <Outlet></Outlet>
            </Main>
        </>
    );
};
export default CoinDetail;