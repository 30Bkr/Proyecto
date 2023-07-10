import React from 'react'
import '../../app/globals.css'
import CartasDeProductos from '../../../components/Productos.jsx'

const Ejemplares = [
  {
      id: 'Casco de Polietileno',
      precio: '$--',
      cantidad: '20 Unidades'
  },
  {
      id: 'Chalecos',
      precio: '$--',
      cantidad: '20 Unidades'
  },
  {
      id: 'Lentes de Seguridad',
      precio: '$--',
      cantidad: '20 Unidades'
  },
  {
      id: 'Guantes de Cuero',
      precio: '$--',
      cantidad: '5 Unidades'
  },
  {
      id: 'Mascara Panoramica',
      precio: '$--',
      cantidad: 'Unidad'
  },
  {
      id: 'Protectores Auditivos',
      precio: '$--',
      cantidad: 'Unidad'
      
  }

]

const productos = () => {
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
      <main className='grid grid-cols-2 grid-rows-2 m-4 items-center justify-center'>  
        {Ejemplares.map(eje => (
          <CartasDeProductos 
          key={eje.id}
          id={eje.id}
          precio={eje.precio}
          cantidad={eje.cantidad}
          />
        ))}
      </main>
    </>
  )
}

export default productos