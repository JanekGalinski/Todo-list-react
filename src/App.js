import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todoList: [],
      newTodo: {
        title: "",
        description: "",
        priority: 1,
        url: "",
      }
    }

  }

  getAndRenderTodos = () => {
    axios.get('http://51.75.120.145:3000/todo').then(resp => {
      this.setState({todoList: resp.data});
    })
  }

  deleteAndRenderTodos = id => {
    axios.delete(`http://51.75.120.145:3000/todo/${id}`).then(() => {
      this.getAndRenderTodos();
    })
  }

  addNewTodoAndRerender = event => {
    event.preventDefault();
    const { newTodo } = this.state;
    newTodo.priority = Math.round(newTodo.priority);
    axios.post('http://51.75.120.145:3000/todo', newTodo).then(() => {
      this.getAndRenderTodos();
    })
  }

  componentDidMount() {
    this.getAndRenderTodos();
  }

  onInputChange = event => {
    const { newTodo } = this.state;
    newTodo[event.target.name] = event.target.value;
    this.setState({newTodo});
  }

  render() {
    return (
      <main>
        <header>
          <input onChange={this.onInputChange} name="title" type="text"></input>
          <input onChange={this.onInputChange} name="description" type="text"></input>
          {/* <input onChange={this.onInputChange} name="priority" type="number" min="1" max="3"></input> */}
          <input onChange={this.onInputChange} name="url" type="text"></input>
          <button onClick={() => {this.addNewTodoAndRerender()}}>DODAJ</button>
        </header>
        <ul>
          {this.state.todoList.map(todo => {
            return <li key={todo.id}>{todo.title} <button onClick={() => { this.deleteAndRenderTodos(todo.id) }}>USUŃ</button></li>
          })}
        </ul>
      </main>
    )
  }
}

export default App;
