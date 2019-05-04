import React, { Component } from "react";
import Image from './Image';
import "./App.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      sourceURL: 'https://http.cat/405',
    }
  }

  render() {
    return (
      <div className="App">
        <Image imageURL={this.state.sourceURL} />
      </div>
    );
  }
}

export default App;
