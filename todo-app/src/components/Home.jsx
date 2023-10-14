import React, {useState} from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'
import style from './css/home.module.css'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleNewTodo = (todo) => {
      setTodos((prevTodos) => {
        return [...prevTodos, {id : uuidv4(), todo}]
      })
    }

    const handleDeleteTodo = (id) => {
      setTodos((prevTodos) => {
        const filterTodos = prevTodos.filter((todo) => todo.id !== id)
        return filterTodos;
      })
    }

    const handleAllClearTodos = () => {
      if(todos.length === 0) {
        alert("Ther are no todos to clear!")
      }else {
        const userConfirmation = window.confirm("Are you sure to clear?")
        if(userConfirmation === true) {
          setTodos([])
        }
      }
    }

  return (
    <section className= {style.container}>
      <h1>Todo App</h1>
      <NewTodo onAddTodo = {handleNewTodo} />
      <Todos todos = {todos} onRemoveTodo = {handleDeleteTodo} />
      <button onClick={handleAllClearTodos}>Clear All Todos</button>
    </section>
  )
}

export default Home;
