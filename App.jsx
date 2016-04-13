import React from 'react';
import {Router , Route, Link, browserHistory} from 'react-router';

import About from './compoment/about.jsx';
import Inbox from './compoment/inbox.jsx';

module.exports = class App extends React.Component {
   render (){
       return(
           <Route component = {App} path='/'>
               <Route path = 'about' component = {About}></Route>
               <Route path = 'inbox' component = {Inbox}></Route>
           </Route>
       )
   }

};

//class Demo extends React.Component {
//   render (){
//      return (
//          <div>
//             <div id = "touchDemo"></div>
//          </div>
//      )
//   }
//}

