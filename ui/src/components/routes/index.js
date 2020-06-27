import React, { Component } from 'react';
import routeConfig from "../../config/routeConfig";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from "../header";
import FooterComponent from "../footer";


class Routes extends Component {
    onRouteChange = (component, routeObject) => {
        let ComponentName = component;
        return <React.Fragment>
            <HeaderComponent />
            <ComponentName />
            <FooterComponent />
        </React.Fragment>
    }

    render() {
        let routes = routeConfig.map((el, index) => {
            return <Route exact={true} key={index} path={el.path} render={() => this.onRouteChange(el.component, el)} />
        });
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        {routes}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Routes;
