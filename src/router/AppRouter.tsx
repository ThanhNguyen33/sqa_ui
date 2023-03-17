import { Route, Routes, useNavigate } from "@solidjs/router";
import { lazy } from 'solid-js';

const Auth = lazy(() => import("../auth/AuthLayout"));
const Header = lazy(() => import("../resources/layout/header/Header"));
const Redirect = () => {
    const navigate = useNavigate();
    navigate('/wallet');
    return <></>;
};

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" component={Header} >
                <Route path="/wallet/*" component={Auth} />
            </Route>
            <Route path="/*" element={<Redirect />} />
        </Routes>
    )   
}