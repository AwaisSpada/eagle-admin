import { useState, useEffect, useRef } from "react";

const SearchableSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  asterisk = false,
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredOptions = options?.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && filteredOptions.length > 0) {
      onChange(filteredOptions[highlightedIndex].value);
      setSearch("");
      setIsOpen(false);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <label className="text-gray-700 font-medium">
        {label} {asterisk && <span className="text-red-500">*</span>}
      </label>
      <div
        className="border rounded-lg mt-2 p-3 w-full cursor-pointer bg-white border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value
          ? options?.find((opt) => opt.value === value)?.label
          : placeholder}
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full  bg-white border-gray-300 border rounded-lg shadow-lg z-10">
          <input
            type="text"
            className="w-full p-3 border-b outline-none border-gray-300"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <ul className="max-h-40 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    index === highlightedIndex ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
