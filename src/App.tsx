
import { useState } from "react";
import TaskContainer from "./components/LinkContainer";
import TaskItem from "./components/TaskItem";

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa() {
    setTarefas([
      ...tarefas,
      {
        titulo: "tarefa 2",
        done: false,
      },
    ]);
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
        {tarefas.map((tarefa: Tarefa) => {
          return <TaskItem titulo={tarefa.titulo} done={tarefa.done} />;
        })}
      </TaskContainer>
    </main>
  );
}

export default App;
