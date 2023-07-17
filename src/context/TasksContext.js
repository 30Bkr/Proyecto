"use client";
import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("usetasks must used within a provider");
  return context;
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
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
        cantidad: '6 Unidades',
        img: '/descarga.jpg'
    },
    {
        id: 'Guantes de Cuero',
        precio: '$--',
        cantidad: '6 Unidades',
        img: '/guantes.jpg'
    },
    {
        id: 'Mascara Panoramica',
        precio: '$--',
        cantidad: '1 Unidad',
        img: '/mascara.jpg'
    },
    {
        id: 'Protectores Auditivos',
        precio: '$--',
        cantidad: '1 Unidad',
        img: '/protector.jpg'
    }
  
  ])

  const createTask = (id, precio, cantidad, img) => 
    setTasks([
      ...tasks,
      {
      id,
      precio,
      cantidad,
      img: ""
    }]);

  const deleteTask = (id) => 
    setTasks(
    [...tasks.filter(task  => task.id !== id )]);
  

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
