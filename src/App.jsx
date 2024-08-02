import { useState, useEffect } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";

export default function App() {

  const [auth, setAuth] = useState(false)


  useEffect (() => {
    console.log('componente lsito')
    
  }, [auth])

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
         <Guitar/>
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}