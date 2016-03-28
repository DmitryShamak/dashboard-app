import React from 'react';

var Auth = React.createClass({
    signIn: function() {
        window.location.href = "/landing";
        this.setState({ user: {name: "Dmitry"} });
    },
    render: function() {
        return (
            <div>
                <div onClick={this.signIn}>Auth</div>
            </div>
        );
    }
});


export default Auth;