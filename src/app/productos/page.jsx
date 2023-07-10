import React from 'react'
import '../../app/globals.css'
import CartasDeProductos from '../../../components/Productos.jsx'


const Ejemplares = [
  {
      id: 'Casco de Polietileno',
      precio: '$--',
      cantidad: '20 Unidades',
      img: '/casco.jpg'
  },
  {
      id: 'Chalecos',
      precio: '$--',
      cantidad: '20 Unidades',
      img: '/chaleco.jpg',
  },
  {
      id: 'Lentes de Seguridad',
      precio: '$--',
      cantidad: '20 Unidades',
      img: '/descarga.jpg'
  },
  {
      id: 'Guantes de Cuero',
      precio: '$--',
      cantidad: '5 Unidades',
      img: '/guantes.jpg'
  },
  {
      id: 'Mascara Panoramica',
      precio: '$--',
      cantidad: 'Unidad',
      img: '/mascara.jpg'
  },
  {
      id: 'Protectores Auditivos',
      precio: '$--',
      cantidad: 'Unidad',
      img: '/protector.jpg'
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
      <main className='grid grid-cols-3 grid-rows-2 m-4 p-4 px-12'> 
          {Ejemplares.map(eje => (
            <CartasDeProductos 
            key={eje.id}
            id={eje.id}
            precio={eje.precio}
            cantidad={eje.cantidad}
            img={eje.img}
            />
          ))}
      </main>
    </>
  )
}

export default productos