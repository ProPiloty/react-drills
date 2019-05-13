import React, { Component } from "react";
import Todo from './Todo';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: ['task1', 'task2', 'task3'],
      taskInput: '',
    };
  }

  handleInputChange = (text) => {
    this.setState({
      taskInput: text,
    })
  }

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.taskInput],
      taskInput: '',
    })
  }

  render() {
    let taskList = this.state.tasks.map((task, i)=> (
      <Todo key={i} task={task} />
    ))
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input type='text' value={this.state.taskInput} onChange={e => this.handleInputChange(e.target.value)} />
        <button onClick={this.handleAddTask}>Add</button>
        {taskList}
      </div>
    );
  }
}

export default App;
