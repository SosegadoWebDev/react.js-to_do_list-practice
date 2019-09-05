import React from "react"

export default class TaskForm extends React.Component {
    state = {
        title: "",
        description: "",
    }
    onSubmit = e => {
        console.log("Submiting...")
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }
    onChange = e => {
        // console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a task" onChange={this.onChange} value={this.state.title} name="title"></input>
                <br></br>
                <br></br>
                <textarea placeholder="Write a description" onChange={this.onChange} value={this.state.description} name="description"></textarea>
                <br></br>
                <button type="submit">
                    Send a task!
                </button>
            </form>
        )
    }
}