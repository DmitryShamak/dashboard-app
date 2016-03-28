import React from 'react';
import ReactDOM from 'react-dom';

import Auth from "./components/Auth";

var welcome = "Welcome, mthfcker";

var content = document.getElementById('content');
content.innerHTML += welcome;


ReactDOM.render(
    <Auth />,
    document.getElementById("content")
);