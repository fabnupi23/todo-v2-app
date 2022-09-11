import React, { useState, useEffect } from 'react'

const initialFormValues = {
  title: '',
  description: ''
}


function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {

  //Creamos un nuevo state
  const [formValues, setFormValues] = useState(initialFormValues)
  const {title, description} = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  useEffect(() => {
    if(todoEdit){
      setFormValues(todoEdit);
    }else{
      setFormValues(initialFormValues);
    }
    
  }, [todoEdit])

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
    
    if(todoEdit){
      //Actualizando Registro 
      todoUpdate(formValues);
      setSuccessMessage('Actualizado con éxito');
    }else{
      todoAdd(formValues);
      setSuccessMessage('Agregado con éxito');
      setFormValues(initialFormValues);
    }


    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);

    setError(null);
  }

  return (
    <div >
      <h2 className='text-center display-4'>{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>

      {
        todoEdit &&  
        <button onClick={() => setTodoEdit(null)} className='btn btn-sm btn-warning mb-2'>
          Cancelar Edición
        </button>
      }
      
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
          className='btn btn-primary btn-block mt-2'>
            {todoEdit ? 'Actualizar Tarea' : 'Agregar Tarea'}
          </button>
      </form>


      {
        error 
        ? (
          <div className='alert alert-danger mt-2'>
            { error } 
          </div>
        ) : null
      }

      {
        successMessage 
        ? (
          <div className='alert alert-success mt-2'>
            { successMessage } 
          </div>
        ) : null
      }



      
      
    </div>
  )
}

export { TodoForm };