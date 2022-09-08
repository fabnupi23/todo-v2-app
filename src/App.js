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


  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList 
            todos={todos}
            todoDelete={todoDelete}
          />
        </div>  
        <div className='col-4'>
          <TodoForm/>
        </div>        
      </div>
    </div>
  )
}

export { App };