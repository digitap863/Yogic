"use client";
import { IoIosLogOut, IoMdPie } from 'react-icons/io'
import { MdOutlineWork } from 'react-icons/md';
import { FaArrowCircleLeft,FaChalkboardTeacher , FaNewspaper, FaPlus  } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBusFront } from 'react-icons/bs';
import { MdLibraryBooks } from "react-icons/md";
const sidebarData = [
    {
        label: "Dashboard",
        icon: <IoMdPie size={25} />,
        link: "/admin/dashboard",
    },
    {
        label: "Add Blog",
        icon: <FaPlus size={25} />,
        link: "/admin/blog"
    },
    {
        label: "Blog List",
        icon: <FaNewspaper size={25} />,
        link: "/admin/bloglist"
    },
    {
        label: "Add Course",
        icon: <FaPlus  size={25} />,
        link: "/admin/course"
    },
    {
        label: "Course Listing",
        icon: <MdLibraryBooks  size={25} />,
        link: "/admin/courselist"
    },
    {
        label: "Add Teacher",
        icon: <FaPlus  size={25} />,
        link: "/admin/teacher"
    },
    {
        label: "Teacher Listing",
        icon: <FaChalkboardTeacher  size={25} />,
        link: "/admin/teacherlist"
    }

];

const Sidebar = () => {

    const navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    return (
        <>
        <button
            data-drawer-target="sidebar-multi-level-sidebar"
            data-drawer-toggle="sidebar-multi-level-sidebar"
            aria-controls="sidebar-multi-level-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <span className="sr-only">Open sidebar</span>
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
            </svg>
        </button>
        <aside
            id="sidebar-multi-level-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {/* <li className="p-4">
                        <Link to={"/admin/dashboard"}>
                            <img src={""} alt="logo" />
                        </Link>
                    </li> */}
                    {sidebarData.map((items) => (
                        <li key={items.label}>
                            <NavLink
                                to={items.link}
                                className={(navclass) =>
                                    navclass.isActive
                                        ? "flex items-center p-2 text-gray-900 rounded-lg bg-gradient-to-r from-blue-300 to-green-300 dark:text-white   group"
                                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                }
                            >
                                {items.icon}
                                <span className="ms-3">{items.label}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          onClick={handlelogout}
                        >
                            <IoIosLogOut size={25} />
                            <span className="ms-3">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    </>     
    );
};

export default Sidebar;