import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Selects } from "./components/Selects";

const App = () => {
  return (
    <>
      <h1 className="titulo">Aprendizaje React</h1>
      <p className="parrafo">Selects Anidados</p>
      <hr />
      {/* SelectAnidados*/}
      <Selects />
    </>
  );
};
export default App;
