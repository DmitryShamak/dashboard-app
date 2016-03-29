require('./styles/style.scss');
window.jQuery = window.$ = require("jquery");
require("bootstrap-webpack");

import React from 'react';
import { render } from 'react-dom'

import Config from "./components/Config";

render(
    <div>
        <Config />
    </div>,
    document.getElementById('app-content')
);
