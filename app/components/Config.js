import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, DefaultRoute } from 'react-router'
import { hashHistory } from 'react-router'

import App from "./App";
import Auth from "./Auth";
import Landing from "./Landing";
import Profile from "./Profile";

var Config = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="auth" component={Auth} />
                    <Route path="landing" component={Landing} />
                    <Route path="profile" component={Profile} />
                </Route>
            </Router>
        );
    }
});

export default Config;