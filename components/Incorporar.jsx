import React from 'react'
import { TextInput, Button } from "@tremor/react";
import '../src/app/globals.css'
import Seleccionar from './Seleccionar';


const Incorporar = () => {
  return (
    <>
      <div className='gridr'>
        <div className='p'>
          <p className='border-b pb-2 flex justify-center'>Producto</p>
          <TextInput className='w-20 my-4' placeholder="Nombre. . ." />
          <TextInput className='w-20 my-4' placeholder="Precio. . ." />
          <TextInput className='w-20 my-4' placeholder="Cantidad(unidades de venta). . ." />
          <div className='ppp'>
            <p className='pppp'>IMG. . .</p>
          </div>
          <p className='border-t border-b pb-2 flex justify-center'>Inventario</p>
          <TextInput className='w-20 my-4' placeholder="Codigo" />
          <TextInput className='w-20 my-4' placeholder="Descripcion" />
          <TextInput className='w-20 my-4' placeholder="Cantidad(Unidad)" />

          <Button size="xs" variant="secondary">
          + Agregar
          </Button>
        </div>

        <div className='p_2'>
          <p className='border-b pb-2 flex justify-center'>Inventario</p>
          <Seleccionar />
          <TextInput className='w-20 my-4' placeholder="Cantidad . . ." />
          
          <Button size="xs" variant="secondary">
          + Agregar
          </Button>
        </div>
      </div>
    </>
  )
}

export default Incorporar