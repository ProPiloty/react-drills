import React, {Component} from 'react';

import Todo from './Todo';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        const tasksToDisplay = this.props.taskList.map((task, i) => (
            <Todo key={i} task={task} />
        ))
        return(
            <div>
                {tasksToDisplay}
            </div>
        )
    }
}

export default List;