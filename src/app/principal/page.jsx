import React from 'react'
import '../../app/globals.css'

const hola = () => {
  return (
    <>
      <header >
        <nav className='hola'>
        <div className='flex'>
          <ul className='flex p-1'>
            <li className='si'><a href="/principal">Inicio</a></li>
            <li className='no'><a href="/productos">Productos</a></li>
            <li className='no'><a href="/ventas">Ventas</a></li>
            <li className='no'><a href="agregar">Agregar</a></li>
          </ul>
        </div>

        <div className='flex mx-4 p-4'>
          <p className='se'>Hola, Cliente</p>
          <a href="/" className='hover:text-pink-800 ml-2'>Salir</a>
        </div>
        </nav>
        
      </header>
      <main>  
        principal
      </main>
    </>
  )
}

export default hola