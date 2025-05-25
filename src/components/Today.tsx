"use client";
import { useMemo } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import type {Task} from "@/app/dashboard/page"

interface TodayTasksProps {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  handleEdit: (task: Task) => void;
  handleDelete: (id: string) => void;
}

const TodayTasks = ({
  tasks,
  toggleComplete,
  handleEdit,
  handleDelete,
}: TodayTasksProps) => {
  const today = new Date().toISOString().split("T")[0];

  const todayTasks = useMemo(() => {
    return tasks.filter((task) => task.dueDate === today);
  }, [tasks, today]);

  const completedCount = todayTasks.filter((task) => task.completed).length;
  const totalCount = todayTasks.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="space-y-4">
      <div className="bg-white shadow-md rounded-lg p-4 w-[85%] mx-auto mt-3">
        <h2 className="text-lg font-bold mb-2">Today&apos;s Progress</h2>
        <p className="text-sm mb-4">
          Completed: {completedCount} of {totalCount} tasks
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">{Math.round(progress)}%</p>
      </div>

      {todayTasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-6 italic">
          No tasks scheduled for today.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 mt-8">
        {todayTasks.map((task) => (
          <div
            key={task.id}
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
                    onChange={() => toggleComplete(task.id)}
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

                <p className="text-sm text-gray-300 mt-2">
                  {task.description}
                </p>
              </div>

              <div className="flex gap-3 mt-1">
                <FiEdit
                  className="cursor-pointer text-gray-300 hover:text-white"
                  onClick={() => handleEdit(task)}
                />
                <FiTrash
                  className="cursor-pointer text-gray-300 hover:text-white"
                  onClick={() => handleDelete(task.id)}
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

export default TodayTasks;
