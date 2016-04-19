import React, { Component } from 'react'

import {Router, Route, Link, hashHistory } from 'react-router'

import {
    Container,
    Icon,
    Group,
    Grid,
    Col
} from 'amazeui-touch'

module.exports = class NavBar extends Component {

    constructor(props) {
        super(props)

    }



    render() {
        return (
            <Group>
                <Grid avg={3} >
                    <Col ><Link to="/info" ><Icon key="info" name="info"></Icon></Link></Col>
                    <Col ><Link to="/" ><Icon key="home" name="home"></Icon></Link></Col>
                    <Col ><Link to="/gear" ><Icon key="gear" name="gear"></Icon></Link></Col>
                </Grid>
            </Group>
        )
    }
}