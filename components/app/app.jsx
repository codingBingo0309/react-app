import React, { Component } from 'react';

import {Router, Route, Link, hashHistory } from 'react-router'

import NavBar from '../../components/navBar/navBar.jsx'
import Gear from '../../components/Gear/Gear.jsx'
import Info from '../../components/Info/Info.jsx'



module.exports = class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const routes = (
            <Route path="/" component={HomePage}>
                <Route path="/gear" component={Gear}></Route>
                <Route path="/info" component={Info}></Route>
            </Route>
        )
        return (
            <Router history = {hashHistory}>
                {routes}
            </Router>
        )
    }
}
class HomePage extends Component {
    render(){
        return(
            <div>
                <NavBar></NavBar>

                {this.props.children}
            </div>
        )
    }
}