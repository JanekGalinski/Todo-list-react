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
      <div className="container">
          <main>
            <header>
              <h1>Dodaj nowe todo</h1>
              <form>
                <div className="form-group">
                  <label forHtml="title">Podaj tytuł:</label>
                  <input class="form-control" onChange={this.onInputChange} id="title" name="title" type="text"></input>
                </div>
                <div className="form-group">
                  <label forHtml="title">Podaj opis:</label>
                  <input class="form-control" onChange={this.onInputChange} id="description" name="description" type="text"></input>
                </div>
                <div className="form-group">
                  <label forHtml="title">Podaj link:</label>
                  <input class="form-control" onChange={this.onInputChange} id="url" name="url" type="text"></input>
                </div>
                
                {/* <input onChange={this.onInputChange} name="priority" type="number" min="1" max="3"></input> */}
                
                <button type="submit" className="btn btn-primary" onClick={() => {this.addNewTodoAndRerender()}}>DODAJ</button>
              </form>
            </header>
            <section>
              <h1>Twoja lista</h1>
              <ul className="list-group"> 
                {this.state.todoList.map(todo => {
                  return <li className="list-group-item" key={todo.id}>
                    {todo.title}
                    <button className="btn btn-danger" onClick={() => { this.deleteAndRenderTodos(todo.id) }}>USUŃ</button>
                    </li>
                })}
              </ul>
            </section>
          </main>
      </div>
      
    )
  }
}

export default App;
