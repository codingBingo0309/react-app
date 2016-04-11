import React from 'react';

var StateButoon = React.createClass({
    getInitialState : function(){
        return {
            data:0
        };
    },
    setNewNumber : function(){
        this.setState({data:this.state.data + 1});
    },
    render : function(){
        return (
            <div>
                <button onClick = {this.setNewNumber}>INSERT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
});

var Content = React.createClass({
    componentWillMount: function(){
        console.log('Component WILL Mount')
    },
    componentDidMount: function(){
        console.log('Component DID Mount')
    },
    componentWillReceiveProps: function(newProps){
        console.log('Component WILL ReceiveProps')
    },
    shouldComponentUpdate: function(newProps,newState){
      return true;
    },
    componentWillUpdate: function(nextProps){

    }
});

export default StateButoon;