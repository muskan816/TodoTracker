import { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
// import the Task type from its definition file
import type { Task } from "@/app/dashboard/page";


interface SearchProps {
  tasks: Task[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Search = ({
  tasks,
  search,
  setSearch,
  setFilteredTasks,
}: SearchProps) => {
  useEffect(() => {
    const filtered =
      search.trim() === ""
        ? tasks
        : tasks.filter((task) =>
            task.name.toLowerCase().includes(search.toLowerCase())
          );
    setFilteredTasks(filtered);
  }, [search, tasks, setFilteredTasks]);
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="w-[80%] sm:w-[60%] relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-blue-800 border-4 rounded-full py-2 px-6 w-full"
          placeholder="Search..."
        />
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-800"
        >
          <IoSearchOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default Search;
