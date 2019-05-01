import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: ['Whisky', 'Lima', 'Hotel', 'Five']
    }
  }

  render() {
    let listToDisplay = this.state.list.map((item, i) => (
      <h2 key={i}>{item}</h2>
    ))
    return (
      <div className="App">
        {listToDisplay}
      </div>
    );
  }
}

export default App;
