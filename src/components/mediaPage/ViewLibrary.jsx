import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MdDelete } from "react-icons/md";

const DeleteMedia = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Ensures fade-out effect
      transition={{ duration: 0.3 }}
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="bg-white p-6 rounded-md shadow-md text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <p className="mb-4">Are you sure you want to delete this image?</p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-background text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Delete
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ViewLibrary = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const images = Array.from({ length: 50 }, (_, i) => ({
    post_url: `https://picsum.photos/200/200?random=${i + 1}`,
  }));

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="p-8 max-w-full h-[70vh]"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="grid grid-cols-5 3xl:grid-cols-10 gap-4 cursor-pointer">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.post_url}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-md shadow-md"
              />
              {hoveredIndex === index && (
                <div
                  className="absolute top-2 left-2 cursor-pointer"
                  onClick={() => setDeleteModal(true)}
                >
                  <MdDelete
                    className="bg-background rounded-md text-white"
                    size={30}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </PerfectScrollbar>

      {/* Modal Popup */}
      <AnimatePresence>
        {deleteModal && <DeleteMedia onClose={() => setDeleteModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default ViewLibrary;
