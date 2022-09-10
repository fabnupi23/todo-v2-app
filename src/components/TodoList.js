import React from 'react'
import { Todo } from './Todo';



function TodoList({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) {
  return (
    <div>
      <h1 className="text-right">Soy TodoList</h1>

      {
        todos.map(todo => (
          <Todo 
            todo={todo} 
            key={todo.id} 
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      }
    </div>
  )
}

export { TodoList };