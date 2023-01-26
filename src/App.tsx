
import React, { useState, useEffect } from "react";
import TaskContainer from "./components/LinkContainer";
import TaskItem from "./components/TaskItem";
import Botao from "./components/Botao";

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tituloTarefa, setTituloTarefa] = useState<string>("");

  function adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    setTarefas([
      ...tarefas,
      {
        titulo: tituloTarefa,
        done: false,
      },
    ]);

    setTituloTarefa("");
  }

  function concluirTarefa(posicao: number) {
    const novaLista = [...tarefas];

    novaLista[posicao].done = true;

    setTarefas(novaLista);

  }

  useEffect(() => {
    if(tarefas.length >= 10){
    alert("Chegou à 10 tarefas!")
  };
  }, [tarefas]);


  return (
    <main className="container">
      <h1 className="m-5">📋 Task Manager</h1>
      <form id="new-task" onSubmit={adicionarTarefa}>
        <input type="text" onChange={(event)=> setTituloTarefa(event.target.value) } value={tituloTarefa}/>
        <Botao texto="Adicionar" cor="error"/>
      </form>
      <TaskContainer>
        {tarefas.map((tarefa: Tarefa, posicao: number) => {
          return <TaskItem
            titulo={tarefa.titulo}
            done={tarefa.done}
            concluirTarefa={() => concluirTarefa(posicao)}
          />;
        })}
      </TaskContainer>
    </main>
  );
}

export default App;
