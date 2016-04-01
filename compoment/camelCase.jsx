import React from 'react';

class CamelCase extends React.Component {

    render(){
        var myStyle = {
            fontSize :100,
            color:'#dc4bd1'
        };
        return (
            <div>
                <h1 style = {myStyle}>react holly!!!</h1>
            </div>
        )
    }
}

export default CamelCase;