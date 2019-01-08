import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { openModal } from "./reducers/index";
import { StoreState } from "./types/index";
import App from "./App";
import "./assets/font/Roboto.css";
import "./index.css";
import { getFromToLocalStorage } from "./helpers/localStorage";
import "moment/locale/ru";

const store = createStore<StoreState, any, any, any>(
  openModal,
  {
    meetings: getFromToLocalStorage("meetings") || [],
    messages: ["Привет, как твои дела?"]
  },
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
