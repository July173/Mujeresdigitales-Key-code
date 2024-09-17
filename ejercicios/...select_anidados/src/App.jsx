import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Selects } from "./components/Selects";

const App = () => {
  return (
    <>
      <h1>Aprendizaje React</h1>
      <p>Selects Anidados</p>
      <hr />
      {/* SelectAnidados*/}
      <Selects />
    </>
  );
};
export default App;
