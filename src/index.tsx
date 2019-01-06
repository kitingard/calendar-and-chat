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
    id: 1,
    name: "Некит",
    visited: true
  },
  "2": {
    id: 2,
    name: "Иоанна",
    visited: true
  },
  "3": {
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
    chatOpen: false,
    meetingDisabled: false,
    meetingOpen: false,
    memberAdd: false,
    memberState: "create",
    members: Object.keys(defaultMembers).map(key => defaultMembers[key]),
    meetings,
    profileOpen: false
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
