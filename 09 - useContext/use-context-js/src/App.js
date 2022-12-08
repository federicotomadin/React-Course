import "./App.css";

import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Pagina1 />
        <Pagina2 />
      </div>
    </DataProvider>
  );
}

export default App;
