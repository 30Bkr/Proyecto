'use client'
import React,{ useState} from 'react'
import { useRouter } from "next/navigation";
import { useTasks } from '@/context/TasksContext'


const page = () => {
  const [nombre, setNombre] = useState({ id: ""})
  const [contrasena, setContrasena] = useState({ contrasena: ""})
  const [name, setName] = useState({ name: ""})

 const router = useRouter()

  const [nuevo, setNuevo] = useState()
  const [error, setError] = useState(false)


    const { createUsuario } = useTasks();
    

//   const router = useRouter();
//idea con metodo map. para obtener solo el id o solo contrasena. guardando en variable

const handleChange0 = (e) => {
  setName({...name, [e.target.name]: e.target.value});
}

const handleChange1 = (e) => {
    setNombre({...nombre, [e.target.name]: e.target.value});
  }

  const handleChange2 = (e) => {
    setContrasena({...contrasena, [e.target.name]: e.target.value});
  }
  const mira = nombre.id
  const asi = mira.id
  // console.log('primero',mira)


  // console.log('state',nombre)
  const handleSubmit= (e) => {
    e.preventDefault();
    const mira = nombre.id
    const esto = contrasena.contrasena
    const es = name.name
    if( mira === "" || esto == ''){
        setError(true)
        
    } else{
      setError(false)
       createUsuario(mira, esto, name)
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
            <input type="text"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="nombre" 
            name="name"
            onChange={handleChange0}

            />
            </div>
            <div className='my-4'>
            <label></label>
            <input type="email"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="correo@email.com" 
            name="id"
            onChange={handleChange1}

            />
            </div>
            <div>
            <label></label>
            <input type="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " placeholder="Contraseña" 
            name="contrasena"
            onChange={handleChange2}
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