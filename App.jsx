import React from 'react';

module.exports = class App extends React.Component {
   render() {
      return (
         <div>
            <Demo></Demo>
         </div>
      );
   }
};

class Demo extends React.Component {
   render (){
      return (
          <div>
             <div id = "touchDemo"></div>
          </div>
      )
   }
}

