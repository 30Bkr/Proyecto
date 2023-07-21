'use client'
import React from 'react'
import { useTasks } from '@/context/TasksContext'


const page = () => {
 const { usuario } = useTasks()
//  const nombre = usuario.filter(item => item.name)
 console.log(usuario)


  return (
    <div>bienvenido Usuario/a</div>
  )
}

export default page