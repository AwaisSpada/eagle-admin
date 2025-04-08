import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const isAuthenticated = sessionStorage.getItem("token") ? true : false;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setSidebarOpen(width >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`transition-all duration-300 ease-in-out 
            ${isSidebarOpen ? "w-64 lg:w-72" : "w-0"} 
            ${isMobile ? "fixed left-0 top-0 h-full z-40" : "relative"}`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => isMobile && setSidebarOpen(false)}
          />
        </div>

        <main className="flex-1 overflow-hidden bg-gray-50">
          <PerfectScrollbar className="h-full">
            <div className="p-4 md:p-6 lg:p-8">
              {location.pathname !== "/" && (
                <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                  <button
                    onClick={() => navigate("/")}
                    className="text-background cursor-pointer hover:text-background/80 font-semibold transition-colors"
                  >
                    Dashboard
                  </button>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-800">
                    {location.pathname
                      .split("-")
                      .filter(Boolean)
                      .join("  ")
                      .split("/")}
                  </span>
                </div>
              )}
              <Outlet />
            </div>
          </PerfectScrollbar>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;

// <div className="flex h-screen overflow-hidden">
//   <Sidebar />
//   <div className="relative flex w-full flex-col">
//     <Header />
//     {/* Applying PerfectScrollbar to the content */}
//     <PerfectScrollbar
//       className="flex-1 overflow-y-auto"
//       options={{ suppressScrollX: true }}
//     >
//       <main>
//         {/* Optionally displaying the pathname for debugging */}
//         {location.pathname !== "/" && (
//           <p className="text-background ml-4 mt-4">
//             {" "}
//             <span
//               className="mr-4 underline cursor-pointer font-bold"
//               onClick={() => navigate("/")}
//             >
//               dashboard
//             </span>
//             {location.pathname}
//           </p>
//         )}
//         <div className="text-black mx-auto  p-8 md:p-10 2xl:p-20">
//           <Outlet /> {/* Child routes will be rendered here */}
//         </div>
//       </main>
//     </PerfectScrollbar>
//   </div>
// </div>
