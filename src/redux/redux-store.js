import { combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages_reducer .js";
import { profileReducer } from "./profile_reducer.js";
import { sideBarReducer } from "./sideBarReducer.js";

let reducers = combineReducers(
	{
		messagesPage: messagesReducer,
		profilePage: profileReducer,
		sideBar: sideBarReducer,
	}
)

let store = legacy_createStore(reducers);
window.store = store;

export { store };