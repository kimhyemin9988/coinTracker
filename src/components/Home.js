/* 4 */
import React,{ useState, useEffect } from "react";
import { authService } from "../difirebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Navigation from "./Navigation";
import Main from "./Main";
const Home = () => {
    return(
        <>
        <h1>home</h1>
        <Navigation />
        <Main />
        </>
    );
};
export default Home;