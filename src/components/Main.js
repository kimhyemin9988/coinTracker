import React,{ useState, useEffect } from "react";
import { dbService } from "../fbfirst";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import  ImgSlider from "../components/HomeCom/ImgSlider"
import  Movies from "../components/HomeCom/Moviesr"
import  Viewers from "../components/HomeCom/Viewers"
/* 로그인 되어있으면 Navigition null 표시 */
const Main = () => {
    return(
        <>
            <ImgSlider />
            <Movies />
            <Viewers />
        </>
    );
};
export default Main;