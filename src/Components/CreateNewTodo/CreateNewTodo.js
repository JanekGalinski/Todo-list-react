import React from 'react';
import './CreateNewTodo.css';
import Button from '../Button/Button';

class CreateNewTodo extends React.Component {
  constructor(props){
    super();

    this.cleanTodo ={
        title: "",
        description: "",
        url: "",
    }

    this.state = {
      newTodo: this.cleanTodo,
      alertMessage: '',
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

    if (newTodo.title.length < 4) {
      this.setState({alertMessage: 'Wpisz więcej niz 3 znaki w tytule'})
      return;
    };
    if (newTodo.description.length < 4) {
      this.setState({alertMessage: 'Wpisz więcej niz 3 znaki w opisie'})
      return;
    };

    this.setState({newTodo: this.cleanTodo, alertMessage: ''})

    addNewTodoAndRerender(newTodo)
  }

  render() {

    const { newTodo } = this.state;
    const { title, description, url } = newTodo;

    return (
      <div className="container">
          <main>
            <header>
              <h1>Dodaj nowe todo</h1>

              {this.state.alertMessage && <div className="alert alert-warning" role="alert">
                {this.state.alertMessage}
              </div>}

              <form>
                <div className="form-group">
                  <label forhtml="title">Podaj tytuł:</label>
                  <input value={title} className="form-control" onChange={this.onInputChange} id="title" name="title" type="text"></input>
                </div>
                <div className="form-group">
                  <label forhtml="title">Podaj opis:</label>
                  <input value={description} className="form-control" onChange={this.onInputChange} id="description" name="description" type="text"></input>
                </div>
                <div className="form-group">
                  <label forhtml="title">Podaj link:</label>
                  <input value={url} className="form-control" onChange={this.onInputChange} id="url" name="url" type="text"></input>
                </div>
                
                {/* <input onChange={this.onInputChange} name="priority" type="number" min="1" max="3"></input> */}
                <Button size={2} onClick={this.addNewTodo} label="DODAJ"/>
                {/* <button type="submit" className="btn btn-primary" onClick={this.addNewTodo}>DODAJ</button> */}
              </form>
            </header>
          </main>
      </div>
      
    )
  }
}

export default CreateNewTodo;
