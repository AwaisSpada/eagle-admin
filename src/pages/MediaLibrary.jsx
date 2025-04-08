import React, { useState, useMemo } from "react";
import ViewLibrary from "../components/mediaPage/ViewLibrary";
import UploadMedia from "../components/mediaPage/UploadMedia";

const MediaLibrary = () => {
  const [activeTab, setActiveTab] = useState("view"); // Store tab name, not JSX

  // Memoize the component selection to prevent unnecessary re-renders
  const ActiveComponent = useMemo(() => {
    return activeTab === "upload" ? <UploadMedia /> : <ViewLibrary />;
  }, [activeTab]);

  return (
    <div className="bg-card-background w-full rounded-2xl p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center h-18 border-b border-background">
        <div className="flex gap-4 text-background font-medium">
          <button
            className={`cursor-pointer ${activeTab === "upload" ? "font-bold underline" : ""}`}
            aria-label="Upload Media"
            tabIndex={0}
            onClick={() => setActiveTab("upload")}
          >
            Upload Media
          </button>
          <button
            className={`cursor-pointer ${activeTab === "view" ? "font-bold underline" : ""}`}
            aria-label="View Library"
            tabIndex={0}
            onClick={() => setActiveTab("view")}
          >
            View Library
          </button>
        </div>
        <div>
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search Media..."
            className="max-w-42 p-3 border rounded-lg border-background focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Render Active Component */}
      <div>{ActiveComponent}</div>
    </div>
  );
};

export default MediaLibrary;
