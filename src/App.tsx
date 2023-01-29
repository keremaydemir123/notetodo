import { useEffect, useState } from "react";
import FinishedTasks from "./components/FinishedTasks";
import FutureTasksCard from "./components/FutureTasksCard";
import OnGoingTasks from "./components/OnGoingTasks";
import { Task } from "./types/Tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") as string) || []
  );

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const moveTask = (task: Task, state: string) => {
    const newTask = {
      id: task.id,
      title: task.title,
      state: state,
    };

    setTasks((prev) => {
      return prev.map((t) => {
        if (t.id === task.id) {
          return newTask;
        }
        return t;
      });
    });
  };

  const deleteTask = (task: Task) => {
    setTasks((prev) => {
      return prev.filter((t) => {
        return t.id !== task.id;
      });
    });
  };

  useEffect(() => {
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className=" w-full h-max p-8">
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <FutureTasksCard tasks={tasks} addTask={addTask} moveTask={moveTask} />
        <OnGoingTasks tasks={tasks} addTask={addTask} moveTask={moveTask} />
        <FinishedTasks
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
