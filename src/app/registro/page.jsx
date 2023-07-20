'use client'
import React,{ useState} from 'react'
import { useRouter } from "next/navigation";
import { useTasks } from '@/context/TasksContext'


const page = () => {
  const [nombre, setNombre] = useState("")
  const [contrasena, setContrasena] = useState('')
 const router = useRouter()

  const [nuevo, setNuevo] = useState()
  const [error, setError] = useState(false)


    const { createUsuario } = useTasks();

//   const router = useRouter();

const handleChange = (e) => {
    setNuevo({...nuevo, [e.target.name]: e.target.value});
  }



  const handleSubmit= (e) => {
    e.preventDefault();
    if( nombre === "" || contrasena == ""){
        setError(true)
    } else{
       createUsuario(nuevo.id, nuevo.contrasena)
        router.push('/') 
    }
    

  }



  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center bg-gray-300 w-80 h-96 rounded-lg'>
          <div>
            <h1>Nuevo Usuario</h1>
          </div>
          <form action=""
            onSubmit={handleSubmit}
          >
            <div className='my-4'>
            <label></label>
            <input type="email"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="correo@email.com" 
            name="id"
            value={nombre}
            onChange={handleChange}

            />
            </div>
            <div>
            <label></label>
            <input type="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " placeholder="Contraseña" 
            name="contrasena"
            value={contrasena}
            onChange={handleChange}
            />
            </div>
            <button className='w-56 bg-blue-200 p-2 rounded-lg my-4' >
            Crear Usuario       
            </button>
          </form>
          {error && <p>Llenar todos los campos</p>}

        </div>
      </div>
      
    </>
  )
}

export default page