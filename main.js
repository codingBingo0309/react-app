import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Math from './compoment/math.jsx';
import CamelCase from './compoment/camelCase.jsx';
import Mutiple from './compoment/mutiple.jsx';
import ClickButton from './compoment/clickState.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Math />, document.getElementById('math'));
ReactDOM.render(<CamelCase />, document.getElementById('camelCase'));
ReactDOM.render(<Mutiple name = 'cb' sex='man'/>, document.getElementById('mutiple'));
ReactDOM.render(<ClickButton />, document.getElementById('clickState'));
