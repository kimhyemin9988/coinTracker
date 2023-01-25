import React,{ useState, useEffect } from "react";
import { dbService } from "../fbfirst";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
/* 로그인 되어있으면 Navigition null 표시 */
const Main = () => {
    return(
        <h1>Main</h1>
    );
};
export default Main;