import React from 'react';
import { Router, Route, Link, browserHistory, RouteHandler} from 'react-router';


var routers = (
    <Route handler = {App}>
        <Route path = 'about' handler = {About}></Route>
        <Route path = 'inbox' handler = {Inbox}></Route>
    </Route>
);


class App extends React.Component {
    render () {
        return (
            <div>
                <h1>App</h1>
                <RouteHandler></RouteHandler>
            </div>
        )
    }
}

Router.run(routers,Router.HashLocation,(Root) =>{
   React.render(<Root/>,document.body);
});