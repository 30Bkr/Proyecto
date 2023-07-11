import React from 'react'
import '../../app/globals.css'
import BarChart from '../../../components/BarChart'
import RecentOrders from '../../../components/RecentOrders'
import ChartDonut from '../../../components/Donut'

const ventas = () => {
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
      <main className='bg-gray-100 min-h-screen '>  
        <ChartDonut />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
        
      </main>
    </>
  )
}

export default ventas