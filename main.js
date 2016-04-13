import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route,  Link,  browserHistory } from 'react-router'


import About from './compoment/about.jsx'
import Inbox from './compoment/inbox.jsx'
import Touch from './compoment/touchDemo/touchDemo.jsx'
import Carousel from './compoment/carouselDemo/carousel.jsx'

const ACTIVE = { color: 'red' }

class App extends Component {
    render() {
        return (
            <div>
                <h1>APP!</h1>
                <ul>
                    <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
                    <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
                    <li><Link      to="/inbox"      activeStyle={ACTIVE}>/inbox</Link></li>
                    <li><Link      to="/touchDemo"      activeStyle={ACTIVE}>/touchDemo</Link></li>
                    <li><Link      to="/carouselDemo"      activeStyle={ACTIVE}>/carouselDemo</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/touchDemo" component={Touch}/>
            <Route path="/carouselDemo" component={Carousel}/>
        </Route>
    </Router>
), document.getElementById('app'))