import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinChart } from "../api";
import ApexChart from "react-apexcharts";
import { useState } from "react";
import { Title } from "./Home";
export interface CoinIdState {
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
const CoinName = styled(Title)`
    color: ${(props) => props.theme.textColor};
`
const Box1 = styled.div`
    background-color: ${(props) => props.theme.contentColor};
    width: 50%;
    height: 100px;
    ${CoinName};
`
const Chart = () => {
    const { state: coinId } = useLocation() as CoinIdState;
    const { isLoading: chartLoading, data: chart } = useQuery<ChartInterface[]>(["Chart", coinId], () => fetchCoinChart(coinId));
    const obj1 = chart?.map((element) => parseFloat(element.close)) as number[];//parseFloat으로 형 변환, as number[]통해 undefined 방지
    const obj2 = chart?.map((element) => {
        let array1 = [];
        array1.push(element.time_open);
        array1.push(element.open);
        array1.push(element.high);
        array1.push(element.low);
        array1.push(element.close);
        return array1;
    }) as unknown as number[];
    return (
        <>
            {chartLoading ? "loading중입니다." : <ApexChart type="candlestick" width="50%" options={{}} series={
                [{
                    data: obj2,
                }]}></ApexChart>}
        </>
    );
}
export default Chart;
/*
    open: string; 시가
    high: string; 고가
    low: string; 저가
    close: string; 종가
*/
/*
    let array1=[];
    array1.push(element.open);
    array1.push(element.high);
    array1.push(element.low);
    array1.push(element.close);
*/