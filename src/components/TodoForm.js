import React from 'react'

function TodoForm() {
  return (
    <div >
      <h1>Nueva Tarea</h1>
      <form>
        <input 
          type="text" 
          placeholder="Título" 
          className="form-control"/>

        <textarea 
          placeholder='Descripción' 
          className="form-control mt-2"
        ></textarea>

        <button 
          className='btn btn-primary btn-block mt-2'>Agregar Tarea</button>
      </form>
    </div>
  )
}

export { TodoForm };