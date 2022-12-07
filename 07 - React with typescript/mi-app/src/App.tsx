import "./App.css";
import ContadorRed from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import Formulario from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Counter />

      <Usuario />

      <h1>useEffect - useRef</h1>
      <hr />

      <TimerPadre />

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />

      <h2>Formulario</h2>
      <hr />
      <Formulario />

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
