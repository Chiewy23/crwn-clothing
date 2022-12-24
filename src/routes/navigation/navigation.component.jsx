import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <h1>I am the navigation</h1>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;