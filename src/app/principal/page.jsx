import React from 'react'
import '../../app/globals.css'
import Usuario from '../../../components/Usuario'
import Image from 'next/image'


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
            <li className='no'><a href="/agregar">Agregar</a></li>
            <li className='no'><a href="/inventario">Inventario</a></li>

          </ul>
        </div>

        <div className='flex mx-4 p-4'>
          <p className='se'>Hola, Administrad@</p>
          <a href="/" className='hover:text-pink-800 ml-2'>Salir</a>
        </div>
        </nav>
        
      </header>

      <main className='usuario'>  
        <Usuario />
        <div className='flex flex-col justify-center p-16 mb-32'>
          <h1 className='text-blue-600'>Quienes somos?</h1>
          <h2 className='text-2xl'>Los Mejores En el Sector de Seguridad Industrial</h2>
          <p className='text-base text-slate-500'>Con productos altamente calificados en el sector industrial para la proteccion y seguridad de nuestros empleados</p>
        </div>
        <Image 
            src='/obrero3.png'
            alt='imagen'
            className="usuario_img"
            width={540}
            height={640}
        />
      </main>
    </>
  )
}

export default hola