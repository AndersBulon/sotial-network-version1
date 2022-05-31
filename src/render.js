import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, changePostText } from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
let  rerenderTree = (state) => {

	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App 
					addPost={addPost} 
					changePostText={changePostText} 
					state={state} 
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export { rerenderTree };

