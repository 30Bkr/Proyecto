import React from 'react'
import '../../app/globals.css'
import Usuario from '../../../components/Usuario'
import Image from 'next/image'
import Rutas from '../../../components/Rutas'


const hola = () => {
  return (
    <>
    <Rutas>
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
      </Rutas>
    </>
  )
}

export default hola