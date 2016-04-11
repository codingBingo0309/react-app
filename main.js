import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Math from './compoment/math.jsx';
import CamelCase from './compoment/camelCase.jsx';
import Mutiple from './compoment/mutiple.jsx';
import ClickButton from './compoment/clickState.jsx';
import Link from './compoment/link/link.jsx';
import ReactAjax from './compoment/reactAjax/reactAjax.jsx'

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Math />, document.getElementById('math'));
ReactDOM.render(<CamelCase />, document.getElementById('camelCase'));
ReactDOM.render(<Mutiple name = 'cb' sex='man'/>, document.getElementById('mutiple'));
ReactDOM.render(<ClickButton />, document.getElementById('clickState'));
ReactDOM.render(<Link />, document.getElementById('link'));
ReactDOM.render(<ReactAjax source="https://api.github.com/users/octocat/gists"/>, document.getElementById('reactAjax'));
