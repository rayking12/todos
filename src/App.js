import React from 'react';
import Stopwatch from "./Stopwatch.js";
import Countdown from "./Countdown";
import './App.css'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timers Demo</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}
export default App;