import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
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
export const Header = styled.header`
    width: 100%;
    height: 80px;
    background-color:${props => props.theme.headerColor};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.span`
    color: ${props => props.theme.titleColor};
    font-size: x-large;
    margin: 7%;
    font-weight: 800;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`
export const ToggleThemeBtn = styled.button`
    background-color:${props => props.theme.headerBgBtn};
    color: ${props => props.theme.headerBtnColor};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    transition: ease background-color 250ms;
    padding: 0 1.5rem;
    border: 1px solid ${props => props.theme.headerBtnBorder};
    &:hover{
        background-color: ${props => props.theme.headerBtnHover};
        color: ${props => props.theme.headerBtnColorHover};
    }
`
export const Main = styled.div`
    width: 100%;
    height: 100vh;
`
export const Box1 = styled.div`
    background-color: ${(props) => props.theme.Box1bgColor};
    height: 30px;
    border-radius: 50px;
    padding: 2%;
    margin: 1%;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CoinName = styled.span`
    color: ${(props) => props.theme.textColor};
    a{
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
`
const CoinImg = styled.img`
    height: 100%;
`
const Home = () => {
    const [themeText, setThemeText] = useState("라이트 모드로 보기");
    const { isLoading, data } = useQuery<CoinType[]>(["allCoins"], fetchCoins);
    const [setIsDark] = useOutletContext<React.Dispatch<React.SetStateAction<boolean>>[]>();
    const toggleTheme = () =>{
		setIsDark((element)=>(!element));
        themeText == "다크 모드로 보기" ? setThemeText("라이트 모드로 보기") : setThemeText("다크 모드로 보기")
	}
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
            <Header>
                <Title>코인트래커</Title>
                <ToggleThemeBtn onClick={toggleTheme}>{themeText}</ToggleThemeBtn>
            </Header>
            <Main>
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
            </Main>
        </>
    );
};
export default Home;