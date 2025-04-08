import React, { useState, useEffect } from "react";
import { Menu, User, ChevronDown } from "lucide-react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [selectedFontSize, setSelectedFontSize] = useState("14px");
  const [selectedRole, setSelectedRole] = useState("admin");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  useEffect(() => {
    // Apply the selected font size to the document body
    document.body.style.fontSize = selectedFontSize;
  }, [selectedFontSize]);

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "operator", label: "Operator" },
  ];

  return (
    <header className="w-full bg-background shadow-md">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
        {/* Left section with menu toggle and logo */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-white/10 rounded-lg lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Right section with font size controls and role selector */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Font size controls */}
          <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-lg p-1">
            <div className="relative group">
              <button
                onClick={() => setSelectedFontSize("14px")}
                className={`px-3 py-1.5 rounded-md transition-colors duration-200 ${
                  selectedFontSize === "14px"
                    ? "bg-white text-background"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Set small font size"
              >
                A
              </button>
              <span className="absolute left-1/2 top-8 -translate-x-1/2 mt-2 w-max p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Small text (14px)
              </span>
            </div>

            <div className="relative group">
              <button
                onClick={() => setSelectedFontSize("16px")}
                className={`px-3 py-1.5 rounded-md transition-colors duration-200 ${
                  selectedFontSize === "16px"
                    ? "bg-white text-background"
                    : "text-white hover:bg-white/10"
                } text-lg`}
                aria-label="Set large font size"
              >
                A
              </button>
              <span className="absolute left-1/2 top-8 -translate-x-1/2 mt-2 w-max p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Large text (16px)
              </span>
            </div>
          </div>

          {/* Role selector */}
          <div className="relative">
            <button
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <User size={18} />
              <span className="hidden md:inline">{selectedRole}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isRoleDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isRoleDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => {
                      setSelectedRole(role.value);
                      setIsRoleDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 ${
                      selectedRole === role.value
                        ? "bg-gray-50 text-background font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
