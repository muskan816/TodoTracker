// components/Modal.tsx
"use client";
import React from "react";

interface ModalProps {
  newTask: boolean;
  setNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  taskName: string;
  setTaskName: (val: string) => void;
  priority: string;
  setPriority: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  dueDate: string;
  setDueDate: (val: string) => void;
  handleForm: (e: React.FormEvent) => void;
  errors: { taskName: boolean; priority: boolean };
}

const Modal: React.FC<ModalProps> = ({
  newTask,
  setNewTask,
  taskName,
  setTaskName,
  priority,
  setPriority,
  description,
  setDescription,
  dueDate,
  setDueDate,
  handleForm,
  errors,
}) => {
  if (!newTask) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-30 flex justify-center items-start pt-20 z-50"
      onClick={() => setNewTask(false)}
    >
      <div
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Add a Task</h3>
          <button
            className="text-gray-600 text-2xl hover:text-black"
            onClick={() => setNewTask(false)}
          >
            ×
          </button>
        </div>
        <form onSubmit={handleForm} className="space-y-4">
          {/* Task Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Task Name
            </label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
              className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.taskName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.taskName && (
              <p className="text-red-500 text-sm mt-1">
                Task name is required.
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date & Priority */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.priority
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              >
                <option value="" disabled>
                  Select Priority
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  Priority is required.
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-md"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
