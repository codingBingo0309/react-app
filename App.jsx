import React from 'react';
import {Router , Route, Link, browserHistory} from 'react-router';


const ACTIVE = { color: 'red' }

module.exports = class App extends React.Component {
    render() {
        return (
            <div>
                <h1>APP!</h1>
                <ul>
                    <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
                    <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
                    <li><Link      to="/inbox"      activeStyle={ACTIVE}>/inbox</Link></li>
                    <li><Link      to="/inbox/message/:id"      activeStyle={ACTIVE}>/inbox/message/id</Link></li>
                    <li><Link      to="/touchDemo"      activeStyle={ACTIVE}>/touchDemo</Link></li>
                    <li><Link      to="/carouselDemo"      activeStyle={ACTIVE}>/carouselDemo</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }

};


