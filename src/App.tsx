import TaskContainer from "./components/LinkContainer";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <main className="container">
      <h1 className="m-5">📋 Task Manager</h1>
      <div id="new-task">
        <button id="btnAdd" className="btn btn-primary">
          Add
        </button>
      </div>
      <TaskContainer>
        <TaskItem titulo="tarefa 1" />
        <TaskItem titulo="tarefa-2" done={true} />
      </TaskContainer>
    </main>
  );
}

export default App;
