// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore, combineReducers } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import {
  currRoll,
  currDate,
  currSubmit,
  attendenceList,
} from "./redux/reducers/Reducer";

let rootReducer = combineReducers({
  roll: currRoll,
  date: currDate,
  submit: currSubmit,
  list: attendenceList,
});

let myStore = legacy_createStore(rootReducer);
// ReactDOM.render(
//   <Provider store={myStore}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
