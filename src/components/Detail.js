/*
    #16. useParams 사용
    #17. fetch를 통해 클릭시마다 모든 data를 if문 돌리면 시간이 오래걸림
*/
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const Detail = () =>{
  const { id } = useParams();
  // {id: id}라는 object를 줄여쓴 것, useParams 기본문법
    const [movieDetail, setmovieDetail] = useState([]);
    useEffect(() => {
    }, []);
};
export default Detail;