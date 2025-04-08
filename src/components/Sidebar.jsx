import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "/images/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Menu, X } from "lucide-react";
import sidebarData from "../constants/sidebar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-background text-white lg:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 flex flex-col h-full bg-background transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 ${isMobile ? "w-64" : "w-72"} shadow-xl`}
      >
        {/* Sidebar Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <NavLink to="/" className="p-2">
            <img src={image} alt="Logo" className="w-28" />
          </NavLink>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-hidden">
          <PerfectScrollbar className="h-full">
            <nav className="flex flex-col gap-2 p-4">
              {sidebarData.map((section, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-gray-400 uppercase text-xs font-semibold mb-3 px-3">
                    {section.title}
                  </h2>
                  <div className="space-y-1">
                    {section.items.map((item, idx) => (
                      <div key={idx}>
                        {item.children ? (
                          <>
                            <button
                              onClick={() => toggleMenu(item.title)}
                              className="flex items-center justify-between w-full p-3 text-gray-300 hover:bg-white/10 rounded-lg transition-colors duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-medium">
                                  {item.title}
                                </span>
                              </div>
                              <IoIosArrowForward
                                className={`transition-transform duration-200 ${
                                  openMenus[item.title] ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-200 ${
                                openMenus[item.title] ? "max-h-96" : "max-h-0"
                              }`}
                            >
                              <div className="pl-12 pr-3 pb-2 space-y-1">
                                {item.children.map((child, cIdx) => (
                                  <NavLink
                                    key={cIdx}
                                    to={child.path}
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 p-2 rounded-lg text-sm ${
                                        isActive
                                          ? "bg-white/10 text-white"
                                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                                      }`
                                    }
                                  >
                                    {child.icon}
                                    <span>{child.title}</span>
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                                isActive
                                  ? "bg-white/10 text-white"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }`
                            }
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                          </NavLink>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </PerfectScrollbar>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
