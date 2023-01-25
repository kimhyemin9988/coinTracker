/* 5 */
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "../difirebase";
/* 로그인시 login,join null, myProfile render */
const Navigation = () =>{
    return(
        <>
            <Link to="/login">login</Link>
            <Link to="/join">join</Link>
            <Link to="/profile">myProfile</Link>
        </>);
};
export default Navigation;