import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center bg-gray-200 w-80 h-96 rounded-lg'>
          <div>
            <h1>Inicia Sesión</h1>
          </div>
          <form action="">
            <div className='my-4'>
            <label></label>
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="correo@email.com" />
            </div>
            <div>
            <label></label>
            <input type="password" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " placeholder="Contraseña" />
            </div>
          </form>
          <button className='w-56 bg-blue-200 p-2 rounded-lg my-4' >
            <a href="/principal" className='w-56'>Iniciar Sesión</a>
          </button>
        </div>
      </div>
      
    </>
  )
}
