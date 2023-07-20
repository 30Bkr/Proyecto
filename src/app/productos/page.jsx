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