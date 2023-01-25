/* 4 */
import React,{ useState, useEffect } from "react";
import { dbService } from "../fbfirst";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Navigation from "./Navigation";
import Main from "./Main";
const Home = () => {
    return(
        <>
            <Navigation />
            <Main />
        </>
    )
};
export default Home;