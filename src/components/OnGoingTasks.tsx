import { Task } from "../types/Tasks";
import Card from "./Card";
import TaskForm from "./TaskForm";

function OnGoingTasks({
  tasks,
  addTask,
  moveTask,
}: {
  tasks: Task[];
  addTask: (task: Task) => void;
  moveTask: (task: Task, state: string) => void;
}) {
  const handleTaskAdd = (task: Task) => {
    const newTask = {
      id: task.id,
      title: task.title,
      state: "ongoing",
    };

    addTask(newTask);
  };

  return (
    <Card>
      <h1 className="text-lg font-semibold text-red-900 p-2">Ongoing Tasks</h1>
      <TaskForm onSubmit={handleTaskAdd} />
      {tasks
        .filter((task) => {
          return task.state === "ongoing";
        })
        .map((task: Task) => {
          return (
            <div
              className="bg-red-900 flex justify-between items-center m-2 p-2 text-slate-100 cursor-grab"
              key={task.id}
            >
              <h1>{task.title}</h1>
              <div className="flex items-center gap-2 text-sm">
                <button onClick={() => moveTask(task, "future")}>Cancel</button>
                <button onClick={() => moveTask(task, "finished")}>Done</button>
              </div>
            </div>
          );
        })}
    </Card>
  );
}

export default OnGoingTasks;
