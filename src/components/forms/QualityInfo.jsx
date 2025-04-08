import { useState } from "react";
import { PiUploadLight } from "react-icons/pi";
import SearchableSelect from "../common/SearchableSelect";
import { RiDeleteBin5Line } from "react-icons/ri";

const QualityInfo = () => {
  const [quality, setQuality] = useState(false);
  const [videoEntries, setVideoEntries] = useState([
    { trailerType: "", videoQuality: "" },
  ]);

  const trailerTypes = [
    { label: "Local", value: "local" },
    { label: "URL", value: "url" },
    { label: "YouTube", value: "youtube" },
    { label: "HLS", value: "hls" },
    { label: "Vimeo", value: "vimeo" },
  ];

  const videoQualities = [
    { label: "144p", value: "144p" },
    { label: "240p", value: "240p" },
    { label: "360p", value: "360p" },
    { label: "480p", value: "480p" },
    { label: "720p HD", value: "720p" },
    { label: "1080p Full HD", value: "1080p" },
    { label: "1440p 2K", value: "1440p" },
    { label: "2160p 4K", value: "2160p" },
    { label: "4320p 8K", value: "4320p" },
  ];

  // Handle Adding a new entry
  const addEntry = () => {
    setVideoEntries([...videoEntries, { trailerType: "", videoQuality: "" }]);
  };

  // Handle Removing an entry
  const removeEntry = (index) => {
    if (videoEntries.length > 1) {
      setVideoEntries(videoEntries.filter((_, i) => i !== index));
    }
  };

  // Handle Change
  const handleChange = (index, key, value) => {
    const updatedEntries = [...videoEntries];
    updatedEntries[index][key] = value;
    setVideoEntries(updatedEntries);
  };

  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Quality Info
          </h2>

          {/* Toggle Switch */}
          <div className="w-full flex align-middle items-center space-x-4">
            <label className="text-gray-700 font-medium">
              Turn on switch to upload quality-wise video
            </label>
            <button
              onClick={() => setQuality(!quality)}
              className={`w-12 h-6 flex items-center rounded-full mt-2 p-1 transition duration-300 ${
                quality ? "bg-background" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  quality ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Video Quality Section */}
          {quality && (
            <div className="mt-4 space-y-4">
              {videoEntries.map((entry, index) => (
                <div key={index} className="flex flex-row gap-6">
                  <div className="w-1/3">
                    <SearchableSelect
                      options={trailerTypes}
                      value={entry.trailerType}
                      onChange={(value) =>
                        handleChange(index, "trailerType", value)
                      }
                      label="Video Upload Type"
                      asterisk={true}
                    />
                  </div>
                  <div className="w-1/3">
                    <SearchableSelect
                      options={videoQualities}
                      value={entry.videoQuality}
                      onChange={(value) =>
                        handleChange(index, "videoQuality", value)
                      }
                      label="Video Quality"
                      asterisk={true}
                    />
                  </div>
                  <div className="w-1/3 flex items-center space-x-4">
                    {entry.trailerType && entry.trailerType !== "local" && (
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Video URL
                        </label>
                        <input
                          type="text"
                          className="p-3 w-full border border-gray-300 rounded-lg outline-none"
                          placeholder="Enter trailer URL"
                        />
                      </div>
                    )}
                    {entry.trailerType === "local" && (
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Video File
                        </label>
                        <div className="relative w-full">
                          <input
                            type="file"
                            className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none cursor-pointer file:hidden"
                          />
                          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <PiUploadLight
                              size={20}
                              className="text-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Delete Button */}
                    {videoEntries.length > 1 && (
                      <button
                        onClick={() => removeEntry(index)}
                        className="bg-red-500 text-white px-3 py-2 mt-6 rounded-lg shadow-md hover:bg-red-600"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Add Button */}
              <div className="flex justify-end">
                <button
                  onClick={addEntry}
                  className="bg-background text-white px-4 py-2 rounded-lg shadow-md"
                >
                  + Add More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualityInfo;
