import * as moment from "moment";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { openModal } from "./reducers/index";
import { StoreState, Meeting } from "./types/index";

import App from "./App";
import "./assets/font/Roboto.css";
import "./index.css";

const defaultMembers = {
  "0": {
    id: 0,
    name: "Лена",
    visited: false
  },
  "1": {
    id: 3,
    name: "Женя",
    visited: true
  }
};

const meetings: Meeting[] = [
  {
    members: Object.keys(defaultMembers).map(key => defaultMembers[key]),
    start: moment()
      .startOf("week")
      .add(1, "day")
      .toDate(),
    end: moment()
      .startOf("week")
      .add(1, "day")
      .add(1, "hour")
      .toDate(),
    title: "Первая встреча"
  },
  {
    members: Object.keys(defaultMembers).map(key => defaultMembers[key]),
    start: moment()
      .startOf("week")
      .add(2, "day")
      .toDate(),
    end: moment()
      .startOf("week")
      .add(2, "day")
      .add(1, "hour")
      .toDate(),
    title: "Вторая встреча"
  }
];

const store = createStore<StoreState, any, any, any>(
  openModal,
  {
    currentDate: moment()
      .subtract(1, "day")
      .hours(9)
      .minutes(0)
      .toDate(),
    meetingOpen: false,
    members: Object.keys(defaultMembers).map(key => defaultMembers[key]),
    meetings,
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
