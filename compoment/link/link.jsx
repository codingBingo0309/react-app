import React from 'react';

var Link = React.createClass({
    getInitialState: function(){
      return {
          opacity:1.0
      }
    },
    componentDidMount: function(){
        this.timer =  setInterval(function(){
            var opacity = this.state.opacity;
            opacity -= 0.5;
            if (opacity<0.1){
                opacity = 1.0
            }
            this.setState({
                opacity:opacity
            });
        }.bind(this),100)
    },
    render: function(){
        return (
            <div style = {{opacity:this.state.opacity,color:'red'}}>
                caonima
            </div>
        )
    }
});

export default Link;