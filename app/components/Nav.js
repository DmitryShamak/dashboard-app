import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = React.createClass({
    render: function() {
        var state = window.location.pathname.replace(/^\//, "");

        if(state !== "auth") {
            return (
                <div>
                    <Link to="/landing">Landing</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            );
        }
        return (
            <div></div>
        );
    }
});


export default Nav;