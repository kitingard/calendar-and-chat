import * as React from 'react';
import Calendar from './components/Calendar';
import Meeting from './components/Meetings';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Calendar />
        <Meeting />
      </div>
    );
  }
}

export default App;
