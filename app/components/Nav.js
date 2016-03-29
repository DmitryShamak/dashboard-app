import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = React.createClass({
    render: function() {
        var state = this.props.getState();

        if(state !== "auth") {
            return (
                <div className="nav">
                    <Link to="landing">
                        <i className="fa fa-modx"></i>
                    </Link>
                    <Link to="profile">
                        <i className="fa fa-user"></i>
                    </Link>
                </div>
            );
        }
        return (
            <div></div>
        );
    }
});


export default Nav;