/*
* 导入工具包
* */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route,  Link,  browserHistory, hashHistory } from 'react-router'

/*
* 导入组件包
* */
import App from './App.jsx'
import About from './compoment/about.jsx'
import Inbox from './compoment/inbox.jsx'
import Message from './compoment/message.jsx'
import Touch from './compoment/touchDemo/touchDemo.jsx'
import Carousel from './compoment/carouselDemo/carousel.jsx'



var routes = (
    <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/inbox" component={Inbox}>
            <Route path="message/:id" component={Message}/>
        </Route>
        <Route path="/touchDemo" component={Touch}/>
        <Route path="/carouselDemo" component={Carousel}/>
        <Route path="/UiButton" component={UiButton}></Route>
    </Route>
)


render((<Router history={hashHistory}>{routes}</Router>), document.getElementById('app'))

