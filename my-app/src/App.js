import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrTask: [
                {
                    id: 1,
                    text: 'task1'
                }, {
                    id: 2,
                    text: 'task2'
                }, {
                    id: 3,
                    text: 'task3'
                }
            ],
            newTask: " "
        }
    }

    // handleClick = () => {
    //     console.log('tut')
    //     this.setState({index: ++this.state.index})
    // }

    handleChange = (event) => {
        this.setState({
            newTask: event.target.value
        })
    }
    handleSubmit = () => {
        const newTask ={
            id: new Date().getMilliseconds() + this.state.arrTask,
            text: this.state.newTask
            }

        this.setState({
          arrTask: [...this.state.arrTask, newTask],
            newTask: ''
        })
    }

    render() {
        return (<div>
                <form onSubmit ={(event)=> {
                    event.preventDefault()
                    this.handleSubmit()
                }}>
                    <input onChange={this.handleChange} type="text" value={this.state.newTask} />
                    <button>Add Task</button>
                </form>
                {this.state.arrTask.map((task) => <p key={task.id}>{task.text}</p>)}

            </div>
        )
    }
}


export default App;
