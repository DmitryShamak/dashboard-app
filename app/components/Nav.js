import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = React.createClass({
    render: function() {
        var state = this.props.getState();

        if(state !== "auth") {
            return (
                <div className="nav clearfix">
                    <div className="col-xs-6">
                        <h5>Dashboard App</h5>
                    </div>
                    <div className="col-xs-6 text-right">
                        <Link to="landing" activeClassName="active" className="btn">
                            <i className="fa fa-modx"></i>
                        </Link>
                        <Link to="profile" activeClassName="active" className="btn">
                            <i className="fa fa-user"></i>
                        </Link>
                        <Link to="auth" activeClassName="active" className="btn">
                            <i className="fa fa-sign-out"></i>
                        </Link>
                    </div>
                </div>
            );
        }
        return (
            <div></div>
        );
    }
});


export default Nav;