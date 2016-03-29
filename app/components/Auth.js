import React from 'react';

var Provider = React.createClass({
    render: function() {
        var className = "fa fa-" + this.props.type;
        return (
            <div className="provider btn" onClick={this.props.action}>
                <i className={className}></i>
            </div>
        );
    }
});

var Auth = React.createClass({
    signIn: function() {
        window.location.hash = "landing";
        this.setState({ user: {name: "Dmitry"} });
    },
    render: function() {
        var self = this;
        var providers = [{
                type: "google"
            }, {
                type: "twitter"
            }, {
                type: "facebook"
            }].map(function(provider) {
                provider.action = self.signIn;
                return provider;
            });

        return (
            <div className="auth-page">
                <h3 className="text-bold text-center">
                    <span>Sign Up</span> <br/>
                    <small>with a provider</small>
                </h3>
                <div className="text-center">
                    {providers.map(function(provider, ind) {
                        return (
                            <Provider type={provider.type} action={provider.action} key={ind} />
                        )
                    })}
                </div>
            </div>
        );
    }
});


export default Auth;