import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todoList: [],
      newTodoName: '',
    }

  }

  getAndRenderTodos = () => {
    axios.get('http://51.75.120.145:3000/todo').then(resp => {
      this.setState({todoList: resp.data});
      console.log(resp);
    })
  }

  componentDidMount() {
    this.getAndRenderTodos();
  }

  deleteAndRenderTodos = id => {
    axios.delete(`http://51.75.120.145:3000/todo/${id}`).then(() => {
      this.getAndRenderTodos();
    })
  }

  addNewTodoAndRerender = () => {
    const title = this.state.newTodoName;
    axios.post('http://51.75.120.145:3000/todo', { title }).then(() => {
      this.getAndRenderTodos();
    })
  }

  onInputChange = event => {
    this.setState({newTodoName: event.target.value});
  }

  render() {
    return (
      <main>
        <header>
          <input onChange={this.onInputChange} type="text"></input>
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
