/* (3) */
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <>
                <Route path="/Home" element={<Home/>} />
                </>
            </Routes>
        </BrowserRouter>
        );
}
export default Router;