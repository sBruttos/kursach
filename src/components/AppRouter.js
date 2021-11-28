import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {authRoutes} from "../routes";


const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path,Component}) =>
            <Switch key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
                <Switch key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;