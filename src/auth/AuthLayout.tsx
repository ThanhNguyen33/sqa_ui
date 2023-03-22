import { useRoutes } from "@solidjs/router";
import { Component } from "solid-js";
import { lazy } from "solid-js";

const routes = [
    {
        path: "/",
        component: lazy(() => import("../resources/interface/home/Home"))
    },
    {
        path: "/settings",
        component: lazy(() => import("../resources/interface/settings/Settings"))
    }
];

const AuthLayout: Component = () => {

    const AuthRoutes = useRoutes(routes);

    return(
        <div style={{
            "background-color": "#182346",
        }}>
            <AuthRoutes />
        </div>
    )
}

export default AuthLayout;