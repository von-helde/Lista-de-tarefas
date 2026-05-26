import { useState, useEffect } from "react";
import type { Task } from "../types/task";

const KEY = "tasks";


export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : [];
  });

    useEffect(() => {
      localStorage.setItem(KEY, JSON.stringify(tasks));
    }, [tasks]);

    const add = (title: string) => {
    const task: Task = { id: crypto.randomUUID(), title, done: false };
    setTasks((prev) => [task, ...prev]);
  };

  const toggle = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

    const remove = (id: string) => { 
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, add, toggle, remove };
};