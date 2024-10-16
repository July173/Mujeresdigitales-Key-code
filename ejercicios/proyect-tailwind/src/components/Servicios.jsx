import React from 'react'

const servicios = () => {
  return (
    <section className='items-center py-10 bg-white '>
      <h2 className='mb-10 text-3xl font-bold text-center'>
        Nuestros servicios</h2>
      <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 '>
        
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 1</h3>
            <p className='text-gray-700'>Descripcion 1</p>
        </div>
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 2</h3>
            <p className='text-gray-700'>Descripcion 2</p>
        </div>
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 3</h3>
            <p className='text-gray-700'>Descripcion 3</p>
        </div>
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 4</h3>
            <p className='text-gray-700'>Descripcion 4</p>
        </div>
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 5</h3>
            <p className='text-gray-700'>Descripcion 5</p>
        </div>
        <div className='p-6 text-center bg-gray-200 rounded shadow-lg card '>
            <h3 className='text-xl font-semibold'>Servicio 6</h3>
            <p className='text-gray-700'>Descripcion 6</p>
        </div>
      </div>
    </section>
  )
}

export default servicios
