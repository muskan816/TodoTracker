import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { BiSortUp } from "react-icons/bi";
import { MdPlaylistAddCheck } from "react-icons/md";

const page = () => {
  return (
    <div className="w-full h-full pl-4 bg-gray-200 pb-8">
      <div className="flex justify-between py-4 px-2 sticky top-0 z-50 bg-gray-200">
        <div className="inline-block">
          <p className="text-blue-900 font-bold text-xl">Task Manager</p>
          <p className="text-sm tracking-wide">Your Personal Task Organizer</p>
        </div>
        <div className="flex gap-1">
          <Link
            href="/login"
            className="glow-button border-blue-500 border-2 text-blue-500 py-2 sm:px-9 px-5 rounded-xl text-sm font-medium cursor-pointer flex items-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 border-blue-500 border-2 text-white sm:px-9 px-5 py-2 rounded-xl text-sm font-medium cursor-pointer flex items-center"
          >
            SignUp
          </Link>
        </div>
      </div>
      <div className="flex mb-8">
        <div className="mt-8 lg:w-[40%] md:w-[60%] w-full roboto">
          <p className="text-5xl font-bold text-neutral-700 inline-block lg:tracking-[2.2px] leading-16 tracking-tight">
            Bridge the gap between mentors and mentees—
            <span className="text-5xl font-bold text-blue-800">
              every task, one platform.
            </span>
          </p>
          <p className="text-xl text-gray-500 title font-serif mt-6 tracking-wide">
            Stay organized, stay productive. Let your mentor&apos;s guidance
            shape your day, and our app will handle the rest.
          </p>
          <Link
            href="/signup"
            className="glow-button border-blue-500 border-2 text-blue-500 py-4 sm:px-9 px-5 rounded-xl font-medium cursor-pointer w-[80%] flex justify-center mt-8 hover:bg-blue-400 hover:text-white"
          >
            Signup
          </Link>
        </div>
        <Image
          src="/image1.png"
          alt="todo-image"
          width={500}
          height={10}
          className="hidden lg:block h-[500px] w-[60%] mt-8"
        />
      </div>
      <div className="lg:grid-cols-4 grid-cols-2 grid gap-4 mt-4 text-center pr-8 font-medium text-xl tracking-wide">
        <span className="inline-block bg-gradient-to-t from-blue-100 to-blue-300 py-4 rounded-2xl border-blue-600 border text-gray-600 text-[17px]">
          <BsGraphUpArrow className="text-blue-700 mx-auto mb-2" size={30} />{" "}
          Boost Productivity
        </span>
        <span className="inline-block bg-gradient-to-t from-blue-100 to-blue-300 py-4 rounded-2xl border-blue-600 border text-gray-600 text-[17px]">
          <GrNotes className="text-blue-700 mx-auto mb-2" size={30} /> Mentor
          Notes
        </span>
        <span className="inline-block bg-gradient-to-t from-blue-100 to-blue-300 py-4 rounded-2xl border-blue-600 border text-gray-600 text-[17px]">
          <BiSortUp className="text-blue-700 mx-auto mb-2" size={30} /> Priority
          Focus
        </span>
        <span className="inline-block bg-gradient-to-t from-blue-100 to-blue-300 py-4 rounded-2xl border-blue-600 border text-gray-600 text-[17px]">
          <MdPlaylistAddCheck
            className="text-blue-700 mx-auto mb-2"
            size={30}
          />
          Stay Organized
        </span>
      </div>
    </div>
  );
};

export default page;
