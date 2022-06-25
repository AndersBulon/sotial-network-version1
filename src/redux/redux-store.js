import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages_reducer .js";
import { profileReducer } from "./profile_reducer.js";
import { usersReducer } from "./users_reducer.js";
import { sideBarReducer } from "./sidebar_reducer.js";
import { authReducer } from "./auth_reducer.js";
import thunkMiddleware from "redux-thunk";
import { formReducer } from "./form_reducer.js";

let reducers = combineReducers(
	{
		messagesPage: messagesReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
		sideBar: sideBarReducer,
		auth: authReducer,
		form: formReducer,
	}
)

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export { store };