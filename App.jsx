import React from 'react';

module.exports = class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Hello World!!!</h1>
            <Demo></Demo>
         </div>
      );
   }
};

class Demo extends React.Component {
   render (){
      return (
          <div>
             <div id = 'math'></div>
             <div id = "camelCase"></div>
             <div id = "mutiple"></div>
             <div id = "clickState"></div>
             <div id = "link"></div>
             <div id = "reactAjax"></div>
          </div>
      )
   }
}

