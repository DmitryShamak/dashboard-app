import React from 'react';

var Auth = React.createClass({
    signIn: function() {
        window.location.hash = "landing";
        this.setState({ user: {name: "Dmitry"} });
    },
    render: function() {
        return (
            <div className="auth-page">
                <div onClick={this.signIn}>Auth</div>
            </div>
        );
    }
});


export default Auth;