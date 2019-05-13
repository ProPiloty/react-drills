import React, { Component } from "react";
import "./App.css";

import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    }
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    })
  }

  render() {
    const {tasks} = this.state
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={this.addTask} />
        <List taskList={tasks} />
      </div>
    )
  }
}

export default App;
