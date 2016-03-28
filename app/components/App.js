import React from 'react';

import Nav from "./Nav"

var App = React.createClass({
    getInitialState: function() {
        var state = window.location.pathname.replace(/^\//, "");
        return { user: (state === "auth" ? null : true) };
    },
    componentDidMount: function() {
        var state = window.location.pathname.replace(/^\//, "");
        //if no user sign in
        if(!this.state.user && state !== "auth") {
            return window.location.href = "/auth";
        }

        if(this.state.user && state === "auth") {
            window.location.href = "/landing";
        }
    },
    render: function() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
});


export default App;