import Card from "./Card";
import { Task } from "../types/Tasks";
import TaskForm from "./TaskForm";

function FutureTasksCard({
  tasks,
  addTask,
  moveTask,
}: {
  tasks: Task[];
  addTask: (task: Task) => void;
  moveTask: (task: Task, state: string) => void;
}) {
  // add task to ongoing
  const handleTaskAdd = (task: Task) => {
    const newTask = {
      id: task.id,
      title: task.title,
      state: "future",
    };

    addTask(newTask);
  };

  return (
    <Card>
      <h1 className="text-lg font-semibold text-blue-900 p-2">Future Tasks</h1>
      <TaskForm onSubmit={handleTaskAdd} />
      {tasks
        .filter((task) => {
          return task.state === "future";
        })
        .map((task: Task) => {
          return (
            <div
              className="bg-blue-900 flex justify-between items-center m-2 p-2 text-slate-100"
              key={task.id}
            >
              <p>{task.title}</p>
              <div className="flex items-center gap-2 text-sm">
                <button onClick={() => moveTask(task, "ongoing")}>Start</button>
                <button onClick={() => moveTask(task, "finished")}>Done</button>
              </div>
            </div>
          );
        })}
    </Card>
  );
}

export default FutureTasksCard;
