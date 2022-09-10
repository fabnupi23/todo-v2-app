import React from 'react'
import { Todo } from './Todo';



function TodoList({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) {
  return (
    <div>
      <h1 className="text-right">Soy TodoList</h1>

      {
        todos.length === 0
        ? (
          <div className='alert alert-primary'>No hay tareas. Por favor agregar{" :D"} </div>
        )
        : (
          todos.map(todo => (
            <Todo 
              todo={todo} 
              key={todo.id} 
              todoDelete={todoDelete}
              todoToogleCompleted={todoToogleCompleted}
              setTodoEdit={setTodoEdit}
            />
          ))
        )
      }
    </div>
  )
}

export { TodoList };