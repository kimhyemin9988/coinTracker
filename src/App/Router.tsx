/* (3) */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import CoinDetail from '../components/CoinDetail';
import Home from '../components/Home';
import App from './App';
/* React.lazy 함수를 사용하면 동적 import를 사용해서 컴포넌트를 렌더링
    모듈을 return하는 콜백함수
    로딩되길 기다리는 동안 로딩화면등의 예비컨텐츠 볼수 있음 => Suspense 사용
    fallback은 로드를 기다리는동안 렌더링될 요소를 받음*/
const RouterApp = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"",
                element:<Home />,
            },
            {
                path:"/coinDetail",
            element:<CoinDetail />,
        }
        ]



}]); 


/*
return(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:coidId" element={<CoinDetail/>} />
            </Routes>
        </Suspense>
    </Router>
    );*/
export default RouterApp;