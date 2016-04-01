import React from 'react';

var ClickButton = React.createClass({
    getInitialState : function () {
        return {
            liked:false
        }
    } ,
    clickButton : function () {
        this.setState ({
            liked:!this.state.liked
        })
    } ,
    render : function () {
        var text = this.state.liked ? 'oh!' : 'no!';
        return (
                <h4 onClick={this.clickButton}>{text}</h4>
        );

    }
});

export default ClickButton;