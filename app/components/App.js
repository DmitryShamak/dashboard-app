import React from 'react';

import Nav from "./Nav"

var App = React.createClass({
    getState: function() {
        var state = window.location.hash.replace(/#\/([a-z]+).*/, "$1");
        return state;
    },
    getInitialState: function() {
        var state = this.getState();
        return { user: (state === "auth" ? null : true) };
    },
    componentDidMount: function() {
        var state = this.getState();
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
            <div className="container">
                <Nav getState={this.getState}/>
                {this.props.children}
            </div>
        );
    }
});


export default App;