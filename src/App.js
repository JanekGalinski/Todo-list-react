import React from 'react';
import './App.css';
import { addNewTodo, deleteTodo, getTodos } from './requests';
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
    getTodos().then(resp => { this.setState({todoList: resp.data}) })
  }

  deleteAndRenderTodos = id => {
    deleteTodo(id).then(() => { this.getAndRenderTodos() })
  }

  addNewTodoAndRerender = newTodo => {
    addNewTodo(newTodo).then(() => { this.getAndRenderTodos() })
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
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </main>
      </div>
      
    )
  }
}

export default App;
