import { useEffect } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export default function App() {
  const { tasks, add, toggle, remove } = useTasks();
  const pending = tasks.filter((t) => !t.done).length;

  useEffect(() => {
    document.title = pending > 0 ? `(${pending}) Tarefas` : "Tarefas";
  }, [pending]);

return (
    <div className="app">
      <h1>Minhas Tarefas</h1>
      <TaskForm onAdd={add} />
      <TaskList tasks={tasks} onToggle={toggle} onRemove={remove} />
    </div>
  );
};