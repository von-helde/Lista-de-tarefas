import { useState } from "react";

interface Props {
  readonly onAdd: (title: string) => void;
};

export default function TaskForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

    const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };


  return (
    <div className="form">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Nova tarefa..."
      />
      <button onClick={handleAdd} disabled={!value.trim()}>
        Adicionar
      </button>
    </div>
  );
};

