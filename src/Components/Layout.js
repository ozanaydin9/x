import React, {useEffect} from "react";
import {Link, Route, Switch, useHistory} from 'react-router-dom'
import App from "../App";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";

const Layout = () => {

    return(
        <>
            <Switch>
                <Route path="/" exact>
                   <Home/>
                </Route>
                <Route path="/in">
                    <Menu/>
                </Route>
                <Route path="/ch">
                    <App/>
                </Route>
            </Switch>
        </>
    )
};

export default Layout;