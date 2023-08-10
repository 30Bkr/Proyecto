import React from "react";
import '../src/app/globals.css'

const Rutas = ({children , color}) => {
  return (
    <>
      <header className="fixed">
        <nav className="hola">
          <div className="flex">
            <ul className="flex p-1">
              <li className="si">
                <a href="/principal">Inicio</a>
              </li>
              <li className="no">
                <a href="/productos" >Productos</a>
              </li>
              <li className="no">
                <a href="/ventas">Ventas</a>
              </li>
              <li className="no">
                <a href="/inventario">Inventario</a>
              </li>
              <li className="no">
                <a href="agregar">Agregar</a>
              </li>
            </ul>
          </div>

          <div className="flex mx-4 p-4">
            <p className="se">Hola, Administrad@</p>
            <a href="/" className="hover:text-pink-800 ml-2">
              Salir
            </a>
          </div>
        </nav>
      </header>
      <main >
        {children}
      </main>
    </>
  );
};

export default Rutas;
