import React, { Component } from 'react';


module.exports = class message extends Component {

    componentDidMount (){
        const id = this.props.params.id
    }

    render() {
        return (
            <div>
                <h3>{this.props.params.id || 'Message'}</h3>
            </div>
        )
    }
}