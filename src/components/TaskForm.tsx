import { useState } from "react";
import { Task } from "../types/Tasks";

function TaskForm({ onSubmit }: { onSubmit: (task: Task) => void }) {
  const [task, setTasks] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!task) return;
    onSubmit({
      id: crypto.randomUUID(),
      title: task,
      state: "",
    });
    setTasks("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center h-10 px-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTasks(e.target.value)}
        className="outline-none border-2 border-gray-300 rounded-md p-2 h-full w-full"
      />
      <button
        type="submit"
        className="bg-green-300 p-2 rounded-md border-gray-300 h-full"
      >
        Save
      </button>
    </form>
  );
}

export default TaskForm;
