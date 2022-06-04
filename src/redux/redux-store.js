import { combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages_reducer .js";
import { profileReducer } from "./profile_reducer.js";

let reducers = combineReducers(
	{
		messagesPage: messagesReducer,
		profilePage: profileReducer,
	}
)

let store = legacy_createStore(reducers);

export { store };