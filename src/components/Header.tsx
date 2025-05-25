import { VscLayoutSidebarRight } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";


interface HeaderProps {
  sideBar: boolean;
  setSidebar: (value: boolean) => void;
}

// React.FC --> react functional component
// By passing HeaderProps to React.FC, we're telling TypeScript that the Header component will expect props that match the shape of HeaderProps.
const Header: React.FC<HeaderProps> = ({ sideBar, setSidebar }) => {
  return (
      <div
        className={`flex justify-between py-4 px-2 sticky top-0 z-10 bg-gray-200 transition-all duration-300 ${
          sideBar ? "ml-72" : "ml-0"
        }`}>
        <div className={`flex ${sideBar ? "-ml-10" : "ml-0"}`}>
          <button onClick={() => setSidebar(!sideBar)}>
            <VscLayoutSidebarRight
              className="text-blue-800 mr-4 cursor-pointer"
              size={20}
            />
          </button>
          <div className="inline-block">
            <p className="text-blue-900 font-bold text-xl">Task Manager</p>
            <p className="text-sm tracking-wide text-gray-600">
              Your Personal Task Organizer
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <Link
            href="/logout"
            className="border-blue-500 border-2 text-blue-500 py-2 sm:px-9 px-5 rounded-xl text-sm font-medium cursor-pointer flex items-center hover:bg-blue-500 hover:text-white"
          >
            <CiLogout className="mr-2" size={22} />
            <span className={`${sideBar ? "hidden" : "block"}`}>Logout</span>
          </Link>
        </div>
      </div>
  );
};
export default Header;
