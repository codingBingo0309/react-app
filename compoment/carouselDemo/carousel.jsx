import React, { Component } from 'react';
import Car from 'nuka-carousel'

module.exports = class Carousel extends Component {
    render() {
        return (
            <Car>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00002.jpg" alt=""/>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00003.jpg" alt=""/>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00001.jpg" alt=""/>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00006.jpg" alt=""/>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00007.jpg" alt=""/>
                <img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00005.jpg" alt=""/>
            </Car>
        )
    }
}