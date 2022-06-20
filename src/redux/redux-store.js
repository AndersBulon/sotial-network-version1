import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages_reducer .js";
import { profileReducer } from "./profile_reducer.js";
import { usersReducer } from "./users_reducer.js";
import { sideBarReducer } from "./sidebar_reducer.js";
import { authReducer } from "./auth_reducer.js";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers(
	{
		messagesPage: messagesReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
		sideBar: sideBarReducer,
		auth: authReducer,
	}
)

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export { store };