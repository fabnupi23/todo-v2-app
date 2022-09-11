import React, { useEffect, useState } from 'react'
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

const localTodos = JSON.parse(localStorage.getItem('todos'));

function App() {

  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);     //Este estado contiene la tarea que se esta actualizando actualmente

  useEffect(() =>{    //Acá configuramos el almacenamiento en nuestro localStorage
    localStorage.setItem('todos', JSON.stringify(todos));   //Los ToDos los convertimos a string con  JSON.stringify(parametro)
  }, [todos])

  //Acción para elimminar un Todo
  const todoDelete = (todoId) => {

    if(todoEdit &&  todoId === todoEdit.id){
      setTodoEdit(null);
    }

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

  const todoUpdate = (todoEdit) => {

    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id ? todoEdit : todo 
    ))

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
            setTodoEdit={setTodoEdit}
          />
        </div>  
        <div className='col-4'>
          <TodoForm 
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>        
      </div>
    </div>
  )
}

export { App };