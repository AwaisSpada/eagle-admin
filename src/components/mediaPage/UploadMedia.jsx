import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { motion } from "motion/react";

const UploadMedia = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/svg", "image/gif"];
    const maxSize = 5 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      setError("Invalid file type. Please upload JPEG, PNG, or GIF");
      return false;
    }
    if (file.size > maxSize) {
      setError("File size exceeds 5MB limit");
      return false;
    }
    return true;
  };

  const handleFileSelect = (files) => {
    setError("");
    const newFiles = Array.from(files).filter((file) => validateFile(file));
    setSelectedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleInputChange = (e) => {
    handleFileSelect(e.target.files);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setError("Please select files");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="h-auto mx-auto p-4"
    >
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 cursor-pointer h-[14rem]
          ${isDragging ? "border-background bg-blue-50" : "border-gray-300"}`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleInputChange}
            accept="image/*"
            multiple
            className="hidden"
          />
          <p className="text-sm text-gray-600">Choose Media to Upload</p>
          {error && <p className="text-sm text-background">{error}</p>}
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="w-full h-24 object-cover rounded"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="absolute top-1 right-1 p-1 bg-background rounded-full text-white 
                  opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
              >
                <X size={16} />
              </button>
              <p className="text-xs mt-1 truncate">{file.name}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          disabled={selectedFiles.length === 0 || isLoading}
          className={`mt-4 px-4 py-2 text-white rounded  cursor-pointer
          ${selectedFiles.length === 0 || isLoading ? "bg-background/50" : "bg-background hover:bg-blue-400"}`}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </motion.div>
  );
};

export default UploadMedia;
