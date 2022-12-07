import { useReducer } from "react";

const initialState = {
  contador: 10,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state,
        contador: action.payload,
      };
    default:
      return state;
  }
};

const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h1>Contador: {contadorState.contador}</h1>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        Incrementar
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        Decrementar
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 10 })}
      >
        Custom
      </button>
    </>
  );
};

export default ContadorRed;
