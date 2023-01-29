import { Task } from "../types/Tasks";
import Card from "./Card";
import TaskForm from "./TaskForm";

function FinishedTasks({
  tasks,
  addTask,
  deleteTask,
}: {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}) {
  const handleTaskAdd = (task: Task) => {
    const newTask = {
      id: task.id,
      title: task.title,
      state: "finished",
    };

    addTask(newTask);
  };

  return (
    <>
      <Card>
        <h1 className="text-lg font-semibold text-green-900 p-2">
          Finished Tasks
        </h1>
        <TaskForm onSubmit={handleTaskAdd} />
        {tasks
          .filter((task) => {
            return task.state === "finished";
          })
          .map((task: Task) => {
            return (
              <div
                className="bg-green-900 flex justify-between items-center m-2 p-2 text-slate-100"
                key={task.id}
              >
                <h1>{task.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <button onClick={() => deleteTask(task)}>Delete</button>
                </div>
              </div>
            );
          })}
      </Card>
    </>
  );
}

export default FinishedTasks;
