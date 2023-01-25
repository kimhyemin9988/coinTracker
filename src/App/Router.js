/* (3) */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home"
const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/login" element={<AuthJoin />} />
                    <Route path="/join" element={<AuthLogin/>} />
                    <Route path="/profile" element={<Profile/>} />
                </>
            </Routes>
        </BrowserRouter>
        );
}
export default Router;