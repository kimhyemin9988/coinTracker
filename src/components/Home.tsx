import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
interface CoinType {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const CoinName = styled.span`
    color: ${(props) => props.theme.textColor};
`
const Box1 = styled.div`
    background-color: ${(props) => props.theme.contentColor};
    width: 50%;
    height: 100px;
    ${CoinName};
`
const CoinImg = styled.img`
    width: auto;
    height: 50%;
`
const Home = () => {
    const { isLoading, data } = useQuery<CoinType[]>(["allCoins"], fetchCoins);
    /*<CoinType> const coins: CoinType | undefined
    'CoinType' 형식에 'map' 속성이 없습니다*/
    /*     const [coins, setCoins] = useState<CoinType[]>([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            (async () => {
                const response = await fetch('https://api.coinpaprika.com/v1/coins');
                const json = await response.json();
                setCoins(json.slice(0, 100));
                setLoading(false);
            })();
        }, []); */
    /*    console.log(Object.keys(coins[0]).join());
         console.log(Object.values(coins[0]).map(v=>typeof v).join()); */
    return (
        <>
            <Helmet>
                <title>코인트래커</title>
            </Helmet>
            {isLoading ? "loading중입니다." : data?.slice(0, 100).map((coin) => {
                return (
                    <Box1 key={coin.id}>
                        <CoinName>
                            <Link to={`${coin.id}`} state={coin}>{coin.id}</Link>
                        </CoinName>
                        <CoinImg src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></CoinImg>
                    </Box1>
                );
            })}
        </>
    );
};
export default Home;