import React from 'react';

var Plugin = React.createClass({
    render: function() {
        return (
            <div className="profile-plugins-wrapper">
                <div className="profile-plugin clearfix">
                    <div className="plugin-details col-xs-12">
                        <div className="col-xs-12">
                            <h5>
                                <span className="text-bold">{this.props.data.label}</span>
                                <small>{this.props.data.status}</small>
                            </h5>
                            <p>{this.props.data.description}</p>
                        </div>
                    </div>
                    <div className="plugin-btn pointer" title="Delete plugin">
                        <i className="fa fa-close"></i>
                    </div>
                </div>
            </div>
        );
    }
});

var Profile = React.createClass({
    faker: function() {
        var fakeItem = {
            label: "Fake label",
            status: "offline",
            description: "Fake description"
        };

        return [fakeItem, fakeItem, fakeItem, fakeItem];
    },
    render: function() {
        var plugins = this.faker();

        return (
            <div className="profile-page row">
                <div className="profile-header underline underline-bottom col-xs-12">
                    <div className="col-xs-6 text-right">
                        <div className="profile-image"></div>
                    </div>
                    <div className="col-xs-6">
                        <h3 className="text-bold">User Name</h3>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="profile-control-wrapper clearfix">
                            <div className="btn control-btn pull-right" title="Add new plugin">
                                <i className="fa fa-plus-circle"></i>
                            </div>
                        </div>
                        <div className="profile-settings">
                            {plugins.map(function(plugin, ind) {
                                return (
                                    <Plugin data={plugin} key={ind} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


export default Profile;