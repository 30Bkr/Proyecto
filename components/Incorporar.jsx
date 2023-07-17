"use client";
import React, { useState } from "react";
import { TextInput, Button } from "@tremor/react";
import "../src/app/globals.css";
import Seleccionar from "./Seleccionar";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";


const Incorporar = () => {
  const [task, setTask] = useState();
  const {createTask} = useTasks();
  const { createInve } = useTasks();


  const [code, setCode] = useState();
  const router = useRouter()

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value});
    setCode({...code, [e.target.name]: e.target.value});
  }


  const handleSubmit= (e) => {
    e.preventDefault();
    createTask(task.id, task.precio, task.cantidad, task.img)
    createInve(code.id, code.codigo, code.descripcion, code.cantidadI)
    router.push('/inventario')

  }

  return (
    <>
      <div className="gridr">
        <form action=""
          onSubmit={handleSubmit}
        >
          <div className="p">
            <p className="border-b pb-2 flex justify-center">Producto</p>
            <TextInput
              className="w-20 my-4"
              placeholder="Nombre. . ."
              name="id"
              onChange={handleChange}
            />
            <TextInput
              className="w-20 my-4"
              placeholder="Precio. . ."
              name="precio"
              onChange={handleChange}
            />
            <TextInput
              className="w-20 my-4"
              placeholder="Cantidad(unidades de venta). . . "
              name="cantidad"
              onChange={handleChange}
            />
            <div className="ppp">
              <p className="pppp">IMG. . .</p>
            </div>
            <p className="border-t border-b pb-2 flex justify-center">
              Inventario
            </p>
            <TextInput className="w-20 my-4" placeholder="Codigo" 
              name="codigo"
              onChange={handleChange}
            
            />
            <TextInput className="w-20 my-4" placeholder="Descripcion" 
              name="descripcion"
              onChange={handleChange}
            
            />
            <TextInput className="w-20 my-4" placeholder="Cantidad(Unidad)" 
              name="cantidadI"
              onChange={handleChange}
            
            />

            <Button size="xs" variant="secondary" type="submit">
              + Agregar
            </Button>
          </div>
        </form>

        <form action="">
          <div className="p_2">
            <p className="border-b pb-2 flex justify-center">Inventario</p>
            <Seleccionar />
            <TextInput className="w-20 my-4" placeholder="Cantidad . . ." />

            <Button size="xs" variant="secondary">
              + Agregar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Incorporar;
