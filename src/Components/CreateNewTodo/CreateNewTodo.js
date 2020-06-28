import React from 'react';
import './CreateNewTodo.css';

class CreateNewTodo extends React.Component {
  constructor(props){
    super();

    this.state = {
      newTodo: {
        title: "",
        description: "",
        url: "",
      }
    }

  }


  onInputChange = event => {
    const { newTodo } = this.state;
    const newTodoEdited = { ...newTodo };

    newTodoEdited[event.target.name] = event.target.value;
    this.setState({newTodo: newTodoEdited});
  }

  addNewTodo = event => {
    event.preventDefault();
    const { newTodo } = this.state;
    const { addNewTodoAndRerender } = this.props;
    addNewTodoAndRerender(newTodo)
  }

  render() {
    return (
      <div className="container">
          <main>
            <header>
              <h1>Dodaj nowe todo</h1>
              <form>
                <div className="form-group">
                  <label forhtml="title">Podaj tytuł:</label>
                  <input className="form-control" onChange={this.onInputChange} id="title" name="title" type="text"></input>
                </div>
                <div className="form-group">
                  <label forhtml="title">Podaj opis:</label>
                  <input className="form-control" onChange={this.onInputChange} id="description" name="description" type="text"></input>
                </div>
                <div className="form-group">
                  <label forhtml="title">Podaj link:</label>
                  <input className="form-control" onChange={this.onInputChange} id="url" name="url" type="text"></input>
                </div>
                
                {/* <input onChange={this.onInputChange} name="priority" type="number" min="1" max="3"></input> */}
                
                <button type="submit" className="btn btn-primary" onClick={this.addNewTodo}>DODAJ</button>
              </form>
            </header>
          </main>
      </div>
      
    )
  }
}

export default CreateNewTodo;
