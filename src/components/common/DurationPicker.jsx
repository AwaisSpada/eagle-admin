import { useState, useRef, useEffect } from "react";

const DurationPicker = ({
  value,
  onChange,
  maxHours = 23,
  maxMinutes = 59,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [hours, setHours] = useState(value ? value.split(":")[0] : "00");
  const [minutes, setMinutes] = useState(value ? value.split(":")[1] : "00");

  const [searchHours, setSearchHours] = useState("");
  const [searchMinutes, setSearchMinutes] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Filter hours & minutes
  const filteredHours = Array.from({ length: maxHours + 1 }, (_, i) =>
    String(i).padStart(2, "0"),
  ).filter((h) => h.includes(searchHours));
  const filteredMinutes = Array.from({ length: maxMinutes + 1 }, (_, i) =>
    String(i).padStart(2, "0"),
  ).filter((m) => m.includes(searchMinutes));

  // Select time
  const selectTime = (type, value) => {
    if (type === "hours") setHours(value);
    else setMinutes(value);
    onChange(
      `${type === "hours" ? value : hours}:${type === "minutes" ? value : minutes}`,
    );
    setIsOpen(false);
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className=" font-medium">
        Duration <span className="text-red-500">*</span>
      </label>

      {/* Clickable Input */}
      <div
        className="border border-gray-300 rounded-lg mt-2 p-3 w-full flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {hours}:{minutes}
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full  border border-gray-300  rounded-lg shadow-lg flex z-10">
          {/* Hours Dropdown */}
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search hours"
              className="w-full p-2 text-center border-gray-300  border-b outline-none"
              value={searchHours}
              onChange={(e) =>
                setSearchHours(e.target.value.replace(/\D/g, ""))
              }
            />
            <div className="max-h-40 overflow-auto">
              {filteredHours.map((h) => (
                <div
                  key={h}
                  className={`p-2 cursor-pointer text-center hover:bg-gray-300 ${h === hours ? "bg-background" : ""}`}
                  onClick={() => selectTime("hours", h)}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-4 flex items-center justify-center">:</div>

          {/* Minutes Dropdown */}
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search minutes"
              className="w-full p-2 text-center border-b border-gray-300 outline-none"
              value={searchMinutes}
              onChange={(e) =>
                setSearchMinutes(e.target.value.replace(/\D/g, ""))
              }
            />
            <div className="max-h-40 overflow-auto">
              {filteredMinutes.map((m) => (
                <div
                  key={m}
                  className={`p-2 cursor-pointer text-center hover:bg-gray-300 ${m === minutes ? "bg-background" : ""}`}
                  onClick={() => selectTime("minutes", m)}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DurationPicker;
