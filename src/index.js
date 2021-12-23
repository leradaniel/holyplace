import React from "react";
import ReactDOM from "react-dom";
import HolyPlaceApp from "./HolyPlaceApp";
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";

ReactDOM.render(
    <HolyPlaceApp/>,
    document.getElementById('root')
);