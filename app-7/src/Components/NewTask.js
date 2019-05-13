import React, {Component} from 'react';

class NewTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            taskInput: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleAddTask = () => {
        this.props.addTask(this.state.taskInput);
        this.setState({
            taskInput: '',
        })
    }

    render(){
        return (
            <div>
                <input onChange={this.handleInputChange} name="taskInput" value={this.state.taskInput} />
                <button onClick={this.handleAddTask}>Add</button>
            </div>
        )
    }
}

export default NewTask;