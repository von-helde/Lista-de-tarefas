import type { Task } from "../types/task";

interface Props {
  readonly tasks: Task[];
  readonly onToggle: (id: string) => void;
  readonly onRemove: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onRemove }: Props) {
  if (tasks.length === 0) {
    return <p className="empty">Nenhuma tarefa ainda.</p>;
  };

  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "item item--done" : "item"}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => onRemove(task.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};
