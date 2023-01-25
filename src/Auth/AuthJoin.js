/* 로그인 화면(4) */
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { authService } from "../fbfirst"
const AuthJoin = () => {
    return(
        <>
            <h1>Join</h1>;
        </>
    )
};
export default AuthJoin;