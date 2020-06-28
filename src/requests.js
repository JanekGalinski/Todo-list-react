import axios from "axios";

export const addNewTodo = newTodo => {
   return axios.post('http://51.75.120.145:3000/todo', newTodo)
}

export const getTodos = () => {
    return axios.get('http://51.75.120.145:3000/todo')
}

export const deleteTodo = id => {
    return axios.delete(`http://51.75.120.145:3000/todo/${id}`)
}