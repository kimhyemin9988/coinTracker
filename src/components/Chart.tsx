import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinChart } from "../api";
interface RouterState {
    state: string;
}

interface ChartInterface {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
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
const Chart = () => {
    const { state: coinId } = useLocation() as RouterState;
    const { isLoading: chartLoading, data: chart } = useQuery<ChartInterface[]>(["Chart", coinId], () => fetchCoinChart(coinId));
    return (
        <>
            <h1>Chart{coinId}</h1>
            {chartLoading ? "loading중입니다." : chart?.map((oneDay) => {
                return (
                    <Box1 key={oneDay.volume}>
                        <CoinName>{oneDay.time_open}</CoinName>
                        <CoinName>{oneDay.time_close}</CoinName>
                    </Box1>
                )
            })}
        </>
    );
}
export default Chart;