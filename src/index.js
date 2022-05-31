import './index.css';
import {state} from './redux/state.js'
import { rerenderTree } from './render.js';
import reportWebVitals from './reportWebVitals';




rerenderTree(state);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
