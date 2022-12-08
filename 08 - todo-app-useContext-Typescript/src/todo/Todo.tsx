import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/Title";
import Prueba from "./pruebas/prueba";

export const Todo = () => {
  return (
    <TodoProvider>
      <Prueba />
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
