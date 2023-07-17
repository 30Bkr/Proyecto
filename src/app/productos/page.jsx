'use client'
import React, { useState } from 'react'
import '../../app/globals.css'
import CartasDeProductos from '../../../components/Productos.jsx'
// import { Ejemplares } from '../../../data/dataProductos'
import { useTasks } from '@/context/TasksContext'




const productos = () => {
  // const [ producto, setProducto ] = useState(Ejemplares)
  const {tasks} = useTasks()


  return (
    <>
      <header >
        <nav className='hola'>
        <div className='flex'>
          <ul className='flex p-1'>
            <li className='si'><a href="/principal">Inicio</a></li>
            <li className='no'><a href="/productos">Productos</a></li>
            <li className='no'><a href="/ventas">Ventas</a></li>
            <li className='no'><a href="/inventario">Inventario</a></li>
            <li className='no'><a href="agregar">Agregar</a></li>

          </ul>
        </div>

        <div className='flex mx-4 p-4'>
          <p className='se'>Hola, Administrad@</p>
          <a href="/" className='hover:text-pink-800 ml-2'>Salir</a>
        </div>
        </nav>
      </header>
      <main className='grid grid-cols-3 grid-rows-2 m-4 p-4 px-12'> 
          {/* {producto.map(eje => (
            <CartasDeProductos 
            key={eje.id}
            id={eje.id}
            precio={eje.precio}
            cantidad={eje.cantidad}
            img={eje.img}
            />
          ))} */}
          {tasks.map(taks => (
            <CartasDeProductos 
            key={taks.id}
            id={taks.id}
            precio={taks.precio}
            cantidad={taks.cantidad}
            img={taks.img}
            />
          ))} 
      </main>
    </>
  )
}

export default productos