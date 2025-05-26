"use client";
import { FiEdit, FiTrash } from "react-icons/fi";
import type {Task} from "@/app/dashboard/page"

interface CompletedProps {
  tasks: Task[]
  handleEdit: (task: Task) => void;
  toggleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  clearCompletedTasks: () => void;
}

const Completed: React.FC<CompletedProps> = ({
  tasks,
  toggleComplete,
  handleEdit,
  handleDelete,
  clearCompletedTasks,
}) => {
  const completed = tasks.filter((task) => task.completed);

  return (
    <div>
        <div className="flex w-full justify-end lg:pr-4">
      <button onClick={clearCompletedTasks} className="bg-red-600 text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-red-700">Clear All</button>
      </div>
      {completed.length === 0? (
        <p className="text-center text-gray-500 mt-6 italic">
          Haven&#39;t completed any task yet.
        </p>
      ):(
      <div className="flex flex-wrap gap-4 mt-8">
        {completed.map((task) => (
          <div
            key={task._id}
            className={`${
              task.completed ? "border-green-400" : "border-red-400"
            } w-full max-w-xs bg-blue-950 rounded-xl p-4 text-white shadow-sm border-l-4`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(Number(task._id))}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <h3
                    className={`${
                      task.completed ? "line-through" : "none"
                    } font-semibold text-base`}
                  >
                    {task.taskName}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`${
                      task.completed ? "text-gray-500" : "text-red-500"
                    } text-sm font-medium`}
                  >
                    {task.dueDate}
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                      task.priority === "Low"
                        ? "text-green-800 bg-green-200"
                        : task.priority === "Medium"
                        ? "text-yellow-800 bg-yellow-200"
                        : "text-red-800 bg-red-200"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mt-2">{task.description}</p>
              </div>

              <div className="flex gap-3 mt-1">
                <FiEdit
                  className="cursor-pointer text-gray-300 hover:text-white"
                  onClick={() => handleEdit(task)}
                />
                <FiTrash
                  className="cursor-pointer text-gray-300 hover:text-white"
                  onClick={() => handleDelete(Number(task._id))}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Completed;
