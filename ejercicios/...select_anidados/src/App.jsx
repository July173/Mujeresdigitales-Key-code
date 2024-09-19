
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
