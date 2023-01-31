/* (3) */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../components/Home'));
const AuthJoin = lazy(() => import('../Auth/AuthJoin'));
const AuthLogin = lazy(() => import('../Auth/AuthLogin'));
const Profile = lazy(() => import('../components/Profile'));
const Detail = lazy(() => import('../components/Detail'));
/* React.lazy 함수를 사용하면 동적 import를 사용해서 컴포넌트를 렌더링
    모듈을 return하는 콜백함수
    로딩되길 기다리는 동안 로딩화면등의 예비컨텐츠 볼수 있음 => Suspense 사용
    fallback은 로드를 기다리는동안 렌더링될 요소를 받음*/
const RouterApp = () => {
    return(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/join" element={<AuthJoin/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/detail" element={<Detail/>} />
            </Routes>
        </Suspense>
    </Router>
    );
}
export default RouterApp;