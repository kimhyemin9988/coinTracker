import React,{ useState, useEffect } from "react";
import { authService, dbService } from "../difirebase"
import { doc, onSnapshot, query, orderBy, collection } from "firebase/firestore";
import styled, { keyframes } from "styled-components";

const Main = () => {
    return(
        <>
        </>
    );
};
export default Main;


/* import  ImgSlider from "./Main/ImgSlider"
import  Movies from "./Main/Movies"
import  Viewers from "./Main/Viewers" */
/* 로그인 되어있으면 Navigition null 표시 */

 /* 1. useEffect를 사용해 Realtime으로 firebase에 저장된 데이터를 가져온다*/
    /* 가져온 데이터 */
   /*  const [movies, setMovies] = useState([]);
    useEffect(() => {
        const q = query(collection(dbService, "movies"));
        onSnapshot(q,(Snapshot) => {
            let moviesArr = Snapshot.docs.map((doc)=>{
                return({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setMovies(moviesArr);
      })}, []); */

/*             <ImgSlider />
            <Viewers />
            <Movies movies={movies} /> */