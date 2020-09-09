import React from 'react';
import ReactDOM from 'react-dom';
//import Card from './cards';
// import { robots } from './robots';
import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'tachyons';
import ArrayFetch from './arrayFetch';
import Parent from './practice/parent'

//sending full robots array as a prop to CardList
ReactDOM.render(<ArrayFetch />, document.getElementById('root'));

// original 
// ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));


