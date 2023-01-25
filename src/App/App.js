/* (2) 다른 파일로 된 컴포넌트를 동시에 랜딩 가능함*/
import RouterApp from './Router';
import React, { useState, useEffect } from "react";
import { authService } from "../difirebase";
import { updateProfile } from "firebase/auth";
const App = () => {
  return (
    <>
     <RouterApp/>
    </>
  );
}

export default App;
