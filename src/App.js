import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

//Components
import tasks from "./example/tasks.json"
import Tasks from "./components/tasks"
import TaskForm from "./components/taskForm"
import Posts from './components/post';

class App extends Component {
  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    console.log("adding a task...")
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }
  changeDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    // console.log(this.state.tasks)
    return <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask}></TaskForm>
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} changeDone={this.changeDone}></Tasks>
            {/* <Posts></Posts> */}
          </div>
        }}></Route>
        <Route path="/posts" component={Posts}></Route>
      </BrowserRouter>
    </div>
  }
}

export default App;
