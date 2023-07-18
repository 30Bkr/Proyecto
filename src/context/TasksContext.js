"use client";
import { createContext, useContext, useState, useEffect } from "react";

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
  
  ]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=>{
    const item = localStorage.getItem("tasks")
    const tasks = JSON.parse(item)
    if (tasks.length > 0) {
      setTasks(tasks)
    } else {}
  },[])



  const [inve, setInve] = useState([
    {
      id: "Casco de Polietileno",
      codigo: "B793H1LU",
      descripcion: "Protector de craneo para trabajos de riesgo de alto impacto",
      cantidadI: "1360",
    },
    {
      id: "Chalecos",
      codigo: "OUI2H1LV",
      descripcion:
        "Elemento de seguridad que señala posición y evita un posible atropello",
      cantidadI: "1220",
    },
    {
      id: "Lentes de Seguridad",
      codigo: "A7B309JD",
      descripcion: "Protector visual para trabajos de riesgo de alto impacto",
      cantidadI: "750",
    },
    {
      id: "Guantes de Cuero",
      codigo: "9KW35F8V",
      descripcion: "Protector de mano para trabajos de riesgo de alto impacto",
      cantidadI: "230",
    },
    {
      id: "Mascara Panoramica",
      codigo: "A1B3H1LV",
      descripcion: "Protector de vías respiratorios, protección ocular y facial simultanea",
      cantidadI: "117",
    },
    {
      id: "Protectores Auditivos",
      codigo: "BBB3H1LV",
      descripcion: "Protector de audicion para evitar la exposición a sonidos fuertes",
      cantidadI: "75",
    },
    
  ])

  const createInve = (id, codigo, descripcion, cantidadI) => 
  setInve([
    ...inve, {
      id, codigo, descripcion, cantidadI, 
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
        inve,
        createTask,
        deleteTask,
        createInve,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
