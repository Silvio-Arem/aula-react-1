
import { useState } from "react";
import TaskContainer from "./components/LinkContainer";
import TaskItem from "./components/TaskItem";

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa>([]);

  function adicionarTarefa() {
    setTarefas([...tarefas, "tarefa 2"]);
  }
  return (
    <main className="container">
      <h1 className="m-5">📋 Task Manager</h1>
      <div id="new-task">
        <button id="btnAdd" className="btn btn-primary" onClick={adicionarTarefa}>
          Add
        </button>
      </div>
      <TaskContainer>
        <TaskItem titulo="tarefa 1" />
        <TaskItem titulo="tarefa-2" done={true} />
      </TaskContainer>
      {tarefas}
    </main>
  );
}

export default App;
