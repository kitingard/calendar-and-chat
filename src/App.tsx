import * as React from "react";
import Calendar from "./containers/Calendar";
import Chat from "./containers/Chat";
import Meeting from "./containers/Meeting";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Calendar />
        <Meeting />
        <Chat />
      </div>
    );
  }
}

export default App;
