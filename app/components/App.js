import React from 'react';

import Nav from "./Nav"

var App = React.createClass({
    getState: function() {
        var state = window.location.hash.replace(/#\/([a-z]*).*/, "$1");

        return state;
    },
    getInitialState: function() {
        var state = this.getState();
        return { user: (state === "auth" ? null : true) };
    },
    componentDidMount: function() {
        var state = this.getState();
        //if no user sign in
        if(!state || (!this.state.user && state !== "auth")) {
            return window.location.hash = "auth";
        }

        if(this.state.user && state === "auth") {
            window.location.hash = "landing";
        }
    },
    render: function() {
        return (
            <div>
                <Nav getState={this.getState}/>
                {this.props.children}
            </div>
        );
    }
});


export default App;