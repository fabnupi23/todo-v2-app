import React, { useState } from 'react'
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

//Creamos una lista de ToDos (Arrays)
const initialTodos  = [
  {
    id: 1,
    title: 'Todo #1',
    description: 'Descripcion del todo #1',
    completed: false
  },

  {
    id: 2,
    title: 'Todo #2',
    description: 'Descripcion del todo #2',
    completed: true
  }
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  //Acción para elimminar un Todo
  const todoDelete = (todoId) => {
    const changedTodos = todos.filter(todo => todo.id !==todoId);
    setTodos(changedTodos);
  }

  //Acción para dar por terminada una tarea
  const todoToogleCompleted = (todoId) =>{
    const changedTodos = todos.map(todo => {

      const todoEdit = {
        ...todo, // los tres puntos y el nombre significa que es una copia de los atributos que tiene el todo
        completed: !todo.completed
      }

      if (todo.id === todoId) {
        return todoEdit        
      }else{
        return todo
      }

    })
    setTodos(changedTodos);
  }


  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    const changedTodos = [
      newTodo,
      ...todos
    ]
    setTodos(changedTodos);
  }


  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList 
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
          />
        </div>  
        <div className='col-4'>
          <TodoForm 
            todoAdd={todoAdd}
          />
        </div>        
      </div>
    </div>
  )
}

export { App };