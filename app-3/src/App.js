import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      list: ['Whisky', 'Lima', 'Hotel', 'Five'],
      filterString: '',
    }
  }

  handleChange(filterText){
    this.setState({ filterString: filterText });
  }

  render() {

    let listToDisplay = this.state.list
      .filter( (item, i) => {
        return item.includes(this.state.filterString);
      } )
      .map( (item, i) => {
        return <h2 key={i}>{item}</h2>
      } );

    return (
      <div className="App">
        <input type='text' onChange={ e => this.handleChange(e.target.value)}/>
        {listToDisplay}
      </div>
    );
  }
}

export default App;
