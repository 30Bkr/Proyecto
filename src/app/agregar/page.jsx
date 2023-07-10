import React from 'react'
import '../../app/globals.css'


const agregar = () => {
  return (
    <>
      <header >
        <nav className='hola'>
        <div className='flex'>
          <ul className='flex p-4'>
            <li className='mx-4 font-bold box-border hover:text-green-700'><a href="/principal">Inicio</a></li>
            <li className='mx-4 text-gray-400 hover:text-green-700'><a href="/productos">Productos</a></li>
            <li className='mx-4 text-gray-400 hover:text-green-700'><a href="/ventas">Ventas</a></li>
            <li className='mx-4 text-gray-400 hover:text-green-700'><a href="agregar">Agregar</a></li>
          </ul>
        </div>

        <div className='flex mx-4 p-4'>
          <p className='mr-4'>Hola, Cliente</p>
          <a href="/" className='hover:text-pink-800'>Salir</a>
        </div>
        </nav>
        
      </header>
      <main>  
        agregar
      </main>
    </>
  )
}

export default agregar