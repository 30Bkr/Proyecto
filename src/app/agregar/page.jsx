import React from 'react'
import '../../app/globals.css'
import Incorporar from '../../../components/Incorporar'
import Rutas from '../../../components/Rutas'

const agregar = () => {
  return (
    <>
      <Rutas></Rutas>
      <main>  
        <Incorporar />
      </main>
    </>
  )
}

export default agregar