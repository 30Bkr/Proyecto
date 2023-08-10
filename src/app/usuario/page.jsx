'use client'
import React from 'react'
import { useTasks } from '@/context/TasksContext'
import Rutas from '../../../components/Rutas'


const page = () => {
 const { usuario } = useTasks()
//  const nombre = usuario.filter(item => item.name)
 console.log(usuario)


  return (
    <Rutas>
    <div>bienvenido Usuario/a</div>
    </Rutas>
  )
}

export default page