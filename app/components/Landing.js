import React from 'react'
import numeral from 'numeral';
import moment from 'moment';

var Item = React.createClass({
    countToString: function(count) {
        var format = '0';
        if(count > 999) {
            format = "0.0 a";
        }

        return numeral(count).format(format);
    },
    render: function() {
        return (
            <div className="landing-item row">
                <div className="count text-center col-xs-2">{this.countToString(this.props.data.count || 0)}</div>
                <h5 className="content col-xs-8">
                        <span className="cutted-text">{this.props.data.label}</span> <br />
                        <small className="cutted-text">{this.props.data.description}</small>
                </h5>
                <div className="btn col-xs-2 btn">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        );
    }
});

var Landing = React.createClass({
    faker: function() {
        var fakeItem = {
            count: 0,
            label: "Fake label",
            description: "so awesome, so large, but fake.."
        };

        return [fakeItem, fakeItem, fakeItem, fakeItem, fakeItem];
    },
    render: function() {
        var updates = this.faker();

        return (
            <div className="landing-page">
                <h5 className="text-bold">
                    <span>Updates for: </span>
                    <small>{moment().format("DD/MM/YYYY")}</small>
                </h5>
                <div>
                    {updates.map(function(item, ind) {
                        item.count = Math.floor(Math.random()*2000);

                        return (
                            <Item data={item} key={ind}/>
                        );
                    })}
                </div>
            </div>
        );
    }
});


export default Landing;