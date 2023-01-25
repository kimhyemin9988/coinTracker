import React,{ useState, useEffect } from "react";
import { dbService } from "../../difirebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
const Movies = () => {
    return(
        <>
            <h1>Movies</h1>
        </>
    );
};
export default Movies;