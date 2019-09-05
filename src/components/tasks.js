import React from "react"
import Task from "./task"
import PropTypes from "prop-types"

class Tasks extends React.Component {
    render() {
        return this.props.tasks.map(e => <Task key={e.id} task={e} deleteTask={this.props.deleteTask} changeDone={this.props.changeDone}></Task>)
    }
}
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks