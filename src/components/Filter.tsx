
interface FilterProps {
  status: string;
  setStatus: (value: string) => void;
  priority: string;
  setPriority: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  errors?: {
    status?: boolean;
    priority?: boolean;
    sort?: boolean;
  };
}

const Filter: React.FC<FilterProps> = ({
  status,
  setStatus,
  priority,
  setPriority,
  sort,
  setSort,
}) => {
  const baseClasses =
    "w-full border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition duration-200 ease-in-out";

  const borderColor = "border-blue-800 focus:ring-blue-400";

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[90%] lg:w-[60%] xl:w-[50%] justify-center mt-6 text-gray-700 mx-auto">
      
      {/* Status Filter */}
      <div className="flex-1">
        <label className="block mb-1 font-semibold text-sm pl-2">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`${baseClasses} ${borderColor} bg-white`}
        >
          <option value="">All Statuses</option>
          <option value="active">🟢 Active</option>
          <option value="completed">✅ Completed</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div className="flex-1">
        <label className="block mb-1 font-semibold text-sm pl-2">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`${baseClasses} ${borderColor} bg-white`}
        >
          <option value="">All Priorities</option>
          <option value="Low">🟢 Low</option>
          <option value="Medium">🟡 Medium</option>
          <option value="High">🔴 High</option>
        </select>
      </div>

      {/* Sort Filter */}
      <div className="flex-1">
        <label className="block mb-1 font-semibold text-sm pl-2">Sort by</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={`${baseClasses} ${borderColor} bg-white`}
        >
          <option value="earliest">📅 Due Date (Earliest)</option>
          <option value="latest">📆 Due Date (Latest)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
