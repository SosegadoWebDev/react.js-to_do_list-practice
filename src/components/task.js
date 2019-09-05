import React from "react"
import PropTypes from "prop-types"

class Task extends React.Component {
    StyleCompleted() {
        return {
            fontSize: "20px",
            color: this.props.task.done ? "gray" : "black",
            background: this.props.task.done ? "white" : "gray"
        }
    }
    render() {
        const { task } = this.props
        const deleteButton = {
            fontSize: "18px",
            background: "#ea2027",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            cursor: "pointer"
        }
        return <div style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done === false ? "false" : "true"} -
            {task.id}
            <input type="checkbox" onChange={this.props.changeDone.bind(this, task.id)}></input>
            {task.done === false ? <button style={deleteButton} onClick={this.props.deleteTask.bind(this, task.id)}>Realizar</button> : <button style={deleteButton} onClick={this.props.deleteTask.bind(this, task.id)}>Eliminar</button>}
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task