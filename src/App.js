import React from 'react';
import axios from "axios";
import './App.css';
import CreateNewTodo from './Components/CreateNewTodo/CreateNewTodo';
import TodoList from './Components/TodoList/TodoList';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todoList: [],
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

  addNewTodoAndRerender = newTodo => {
    axios.post('http://51.75.120.145:3000/todo', newTodo).then(() => {
      this.getAndRenderTodos();
    })
  }

  componentDidMount() {
    this.getAndRenderTodos();
  }

  render() {
    return (
      <div className="container">
          <main>
            <CreateNewTodo addNewTodoAndRerender={this.addNewTodoAndRerender} />
            <TodoList todoList={this.state.todoList} deleteAndRenderTodos={this.deleteAndRenderTodos}/>
          </main>
      </div>
      
    )
  }
}

export default App;
