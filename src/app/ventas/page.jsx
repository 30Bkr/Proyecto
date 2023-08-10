import React from 'react'
import '../../app/globals.css'
import BarChart from '../../../components/BarChart'
import RecentOrders from '../../../components/RecentOrders'
import ChartDonut from '../../../components/Donut'
import Rutas from '../../../components/Rutas'

const ventas = () => {
  return (
    <>
      <Rutas></Rutas>
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