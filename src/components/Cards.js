import React from 'react'
import image1 from '../assets/image1.jpg'

function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100'>
        <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-auto bg-light p-5'>
                <form action='' method='get'>
                    <img src={image1} className="img-thumbnail" alt="Cinque Terre" width="304" height="236"/>
                    <div className='input-group p-2'>
                        <input type="text" className='form-control' placeholder='Nombre' />
                    </div>
                    <input type="button" className='btn btn-success w-100' value='ingresar' />
                </form>
            </div>            
        </div>
    </div>
  )
}

export { Cards };