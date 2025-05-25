import {
  MdFormatListBulleted,
  MdAccessTime,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

interface sideBarProps{
    sideBar: boolean,
    activeLink: string,
    setActiveLink: (value: string) => void
}

const Sidebar: React.FC<sideBarProps> = ({ sideBar, setActiveLink, activeLink }) => {
  const getLinkClass = (link: string) => {
    return activeLink === link
      ? "flex items-center gap-3 text-[1.1rem] cursor-pointer hover:bg-white hover:text-black bg-gray-700 p-2 rounded-xl mb-2"
      : "flex items-center gap-3 text-[1.1rem] cursor-pointer hover:bg-white hover:text-black active:bg-gray-800 p-2 rounded-xl mb-2";
  };

  return (
    <>
      {sideBar && (
        <div className="fixed left-0 top-0 siderbarBg text-white w-64 h-screen bg-gray-800 transition-all duration-300">
          <div className="p-4">
            <h2 className="text-white font-medium text-[1.35rem] text-center">
              Daily Task Compass
            </h2>
            <hr className="mt-1" />
            <div className="mt-6 flex-col">
              <div className={getLinkClass("allTasks")} onClick={() => setActiveLink("allTasks")}>
                <MdFormatListBulleted />
                All Tasks
              </div>
              <div className={getLinkClass("today")} onClick={() => setActiveLink("today")}>
                <MdAccessTime />
                Today
              </div>
              <div className={getLinkClass("completed")} onClick={() => setActiveLink("completed")}>
                <IoMdCheckboxOutline />
                Completed
              </div>
              <div className={getLinkClass("mentorCalls")} onClick={() => setActiveLink("mentorCalls")}>
                <MdOutlineCalendarMonth />
                Mentor Calls
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar