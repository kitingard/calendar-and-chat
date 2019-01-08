import * as React from "react";
import Calendar from "./containers/Calendar";
import Chat from "./containers/Chat";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Calendar />
        <Chat />
      </div>
    );
  }
}

export default App;
