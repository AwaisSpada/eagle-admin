import React, { useEffect, useRef } from "react";

const Dialog = ({ open, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="w-full max-w-lg animate-in fade-in zoom-in duration-300"
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-xl p-6 m-4 ${className}`}
    >
      {children}
    </div>
  );
};

const DialogHeader = ({ children, className = "" }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

const DialogTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h2>
  );
};

const DialogFooter = ({ children, className = "" }) => {
  return (
    <div className={`mt-6 flex flex-row-reverse gap-2 ${className}`}>
      {children}
    </div>
  );
};

const DialogClose = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-4 right-4 text-gray-400 hover:text-gray-500 ${className}`}
    >
      {children || (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
};
