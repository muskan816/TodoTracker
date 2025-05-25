interface EditTaskProps{
    isEditing:boolean
    setIsEditing:(value:boolean) => void
    handleEditSubmit: (e: React.FormEvent) => void
    taskName: string
    setTaskName:(value:string) => void
    description: string
    setDescription:(value:string) => void
    dueDate: string
    setDuedate:(value:string) => void
    priority:string
    setPriority:(value:string) => void
}

const EditTask: React.FC<EditTaskProps> = ({isEditing, setIsEditing, handleEditSubmit, taskName, setTaskName, description, setDescription, dueDate, setDuedate, priority, setPriority}) => {
    return (
        <div>
        {isEditing && (
          <div
            className="fixed inset-0 bg-transparent flex justify-center items-start pt-20 z-50"
            onClick={() => setIsEditing(false)}
          >
            <div
              className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Edit Task
                </h3>
                <button
                  className="text-gray-600 text-2xl hover:text-black"
                  onClick={() => setIsEditing(false)}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Task Name
                  </label>
                  <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-1">
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDuedate(e.target.value)}
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
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        Select Priority
                      </option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-md"
                  >
                    Update Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
}

export default EditTask