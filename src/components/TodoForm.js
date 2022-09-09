import React, { useState } from 'react'

const initialFormValues = {
  title: '',
  description: ''
}


function TodoForm({ todoAdd }) {

  //Creamos un nuevo state
  const [formValues, setFormValues] = useState(initialFormValues)
  const {title, description} = formValues;
  const [error, setError] = useState(null);

  //Función (arrowFunction) para controlar el cambio de cada uno de los inputs del formulario
  const handleInputChange = (e) =>{
    //Actualizamos el value con la nueva información
    const changedFormValues = {
      //van a ser el mismo objeto, se utiliza el operador expret para pasar las mismas propiedades del formValues a este nuevo estado.
      ...formValues,
      [e.target.name] : e.target.value
    }
    setFormValues(changedFormValues);
  }

  const handleSubmit = (e) => {  //Esta arrowFunction se encargara de hacer el submit el formulario, agregar la nueva tarea
    e.preventDefault();

    if(title.trim() === ''){
      setError('Debes indicar un título');
      return;
    }

    if(description.trim() === ''){
      setError('Debes indicar una descripción');
      return;
    }
    
    //Crear función para afregar una nueva tarea
    todoAdd(formValues);
    setError(null);
  }

  return (
    <div >
      <h1>Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Título" 
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea 
          placeholder='Descripción' 
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <button 
          className='btn btn-primary btn-block mt-2'>Agregar Tarea</button>
      </form>


      {
        error 
        ? (
          <div className='alert alert-danger mt-2'>
            { error } 
          </div>
        ) : null
      }



      
      
    </div>
  )
}

export { TodoForm };