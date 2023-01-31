import React,{ useState, useEffect } from "react";
import { dbService } from "../../difirebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
/* movieObj 이미지 */
const Movies = () => {
/*     return(
        <>
        <Container>
            <h1>Movies</h1>
            <Content>
                {movies.map((element) => {
                    return(
                    <Wrap key={element.id}>
                        <Link to={`/detail/${element.id}`}>
                            <img src={element.cardImg}></img>
                        </Link>
                    </Wrap>);
                })}
            </Content>
        </Container>
        </>
    ); */
};
export default Movies;