import React,{ useState, useEffect } from "react";
import { dbService } from "../fbfirst";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
const Viewers = () => {
    return(
        <>
            <h1>Viewers</h1>
        </>
    );
};
export default Viewers;