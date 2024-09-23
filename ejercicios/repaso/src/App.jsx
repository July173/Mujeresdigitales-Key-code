import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [contador1, setContador1] = useState(0);
  const [contador5, setContador5] = useState(0);

  useEffect(()=>{
    setContador5(contador1)
  },[contador1])


  const restarContador = (actualizar ,leer,  numero) => {
    actualizar(leer - numero);
  };
  const sumarContador = (actualizar ,leer,  numero) => {
    actualizar(leer + numero);
  };

  // const restarContador2 = () => {
  //   setContador2(contador2 - 5);
  // };
  // const sumarContador2 = () => {
  //   setContador2(contador2 + 5);
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="contenedorContador">
          <p>Contador 1</p>
          <button onClick={() =>restarContador(setContador1,contador1, 1 )}>-</button>
          <p className="contador">{contador1}</p>
          <button onClick={() =>sumarContador(setContador1,contador1, 1)}>+</button>
        </div>

        <div className="contenedorContador">
          <p>Contador 5</p>
          <button onClick={() =>restarContador(setContador5,contador5, 5 )}>-</button>
          <p className="contador">{contador5}</p>
          <button onClick={() =>sumarContador(setContador5,contador5, 5 )}>+</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
