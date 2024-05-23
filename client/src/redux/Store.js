/*
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./Reducer";

const composeEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
*/

import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./Reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
