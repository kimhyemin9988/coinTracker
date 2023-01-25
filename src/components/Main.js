import React,{ useState, useEffect } from "react";
import { authService, dbService } from "../difirebase"
import { doc, onSnapshot, query, orderBy, collection } from "firebase/firestore";
import  ImgSlider from "../components/HomeCom/ImgSlider"
import  Movies from "../components/HomeCom/Movies"
import  Viewers from "../components/HomeCom/Viewers"
/* 로그인 되어있으면 Navigition null 표시 */
const Main = () => {
    /* 가져온 데이터 */
    const [movies, setMovies] = useState([]);
    /* 1. useEffect를 사용해 Realtime으로 firebase에 저장된 데이터를 가져온다*/
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
      })}, []);
    return(
        <>
            <ImgSlider />
            <Viewers />
            <Movies movies={movies} />
        </>
    );
};
export default Main;