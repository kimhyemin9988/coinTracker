import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinChart } from "../api";
import ApexChart from "react-apexcharts";
import { useState } from "react";
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
    const obj1 = chart?.map((element) => parseFloat(element.close)) as number[];//parseFloat으로 형 변환, as number[]통해 undefined 방지
    return (
        <>
            <h1>Chart{coinId}</h1>
            {chartLoading ? "loading중입니다." : <ApexChart type="line" options={{}} series={
                [
                    {
                        name: "close",
                        data: obj1, 
                    }
                ]}></ApexChart>}
        </>
    );
}
export default Chart;
            /* chart?.map((oneDay) => {
    return (
        <Box1 key={oneDay.volume}>
            <CoinName>{oneDay.time_open}</CoinName>
            <CoinName>{oneDay.time_close}</CoinName>
        </Box1>
    )
}) */
/*
const temp1=[
    {
        name:혜민
        age:27
    },
    {
        name:혜진
        age:25
    }
]
*/
/*<ApexChart type="line" options={{}} series={
                [
                    {
                        name: "close",
                        data: close, 
                    }
                ]}></ApexChart>*/
                /*
                const closeArray = chart?.map((element) => element["close"]).join();
                */