import { combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages_reducer .js";
import { profileReducer } from "./profile_reducer.js";
import { usersReducer } from "./users_reducer.js";
import { sideBarReducer } from "./sidebar_reducer.js";

let reducers = combineReducers(
	{
		messagesPage: messagesReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
		sideBar: sideBarReducer,
	}
)

let store = legacy_createStore(reducers);
window.store = store;

export { store };