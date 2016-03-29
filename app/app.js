import React from 'react';
import { render } from 'react-dom'

require('./styles/style.scss');
import Config from "./components/Config";

render(
    <div>
        <Config />
    </div>,
    document.getElementById('content')
);