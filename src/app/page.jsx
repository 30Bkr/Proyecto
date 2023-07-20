'use client'
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { useState } from 'react'




export default function Home() {
  const [nombre, setNombre] = useState("")
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const router = useRouter();

  const {usuario} = useTasks()

  console.log(usuario)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nombre === "" || contrasena === ""){
      setError(true)
      setError1(false)
      return
    } else if(nombre === usuario.id && contrasena === usuario.contrasena){
        router.push('/principal')
        setError(false);
        setError1(false);
    } else {
      setError1(true)
      setError(false)
      return
    }
    setError(false)
}


  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center bg-gray-300 w-80 h-96 rounded-lg'>
          <div>
            <h1>Inicia Sesión</h1>
          </div>
          <form action=""
            onSubmit={handleSubmit}
          >
            <div className='my-4'>
            <label></label>
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="correo@email.com" 
             value={nombre}
             onChange={ e => setNombre(e.target.value)}

            />
            </div>
            <div>
            <label></label>
            <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " placeholder="Contraseña" 
              value={contrasena}
              onChange={e => setContrasena(e.target.value)}
            />
            </div>
            <button className='w-56 bg-blue-200 p-2 rounded-lg my-4' >
            <a href="/principal" className='w-56'>Iniciar Sesión</a>        
            </button>
            <p>No tienes cuenta? <a href="/registro" className="text-blue-600  hover:underline">Crear cuenta</a></p>
          </form>
          {error && <p>Llenar todos los campos</p>}
          {error1 && <p>Usuario o contrasena incorrecta</p>}

          
        </div>
      </div>
      
    </>
  )
}
