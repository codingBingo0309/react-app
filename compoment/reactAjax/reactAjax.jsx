import React from 'react';

var UserGist = React.createClass({
    getInitialState: function(){
        return {
            username:'',
            lastGistUrl:''
        }
    },
    componentDidMount:function(){
        this.serverRequest = $.get(this.props.source,function(){
            var lastGist = result[0];
            this.setState({
                username:lastGist.owner.login,
                lastGistUrl:lastGist.html_url
            });
        }.bind(this));
    },
    componentWillUnmount: function(){
        this.serverRequest.abort();
    },
    render: function (){
        return (
            <div>
                {this.props.username}用户最新的Gist共享地址：
                <a href="{this.state.lastGistUrl}">{this.state.lastGistUrl}</a>
            </div>
        )
    }
});

export default UserGist;