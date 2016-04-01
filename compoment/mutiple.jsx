import React from 'react';

var Mutiple = React.createClass({

    render : function () {
        return (
            <div>
                <Name name = { this.props.name}></Name>
                <Sex sex = { this.props.sex}></Sex>
            </div>
        );
    }

});

var Name = React.createClass({

    render : function () {
        return (
            <h1>{this.props.name}</h1>
        )
    }

});

var Sex = React.createClass({

    render : function () {
        return (
            <h2>{this.props.sex}</h2>
        )
    }
});


export default Mutiple;