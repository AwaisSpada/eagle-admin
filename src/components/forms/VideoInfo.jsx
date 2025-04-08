import { useState } from "react";
import SearchableSelect from "../common/SearchableSelect";
import { PiUploadLight } from "react-icons/pi";

const VideoInfo = () => {
  const [trailerType, setTrailerType] = useState("");
  const trailerTypes = [
    { label: "Local", value: "local" },
    { label: "URL", value: "url" },
    { label: "YouTube", value: "youtube" },
    { label: "HLS", value: "hls" },
    { label: "HLS", value: "hls" },
    { label: "Vimeo", value: "vimeo" },
  ];
  return (
    <div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Video Info
          </h2>
          <div className="flex flex-row gap-6">
            <div className="w-1/2 ">
              <SearchableSelect
                options={trailerTypes}
                value={trailerType}
                onChange={setTrailerType}
                label="Video Upload Type"
                asterisk={true}
              />
            </div>
            <div className="w-1/2 ">
              {trailerType && trailerType !== "local" && (
                <div className="">
                  <label className="block text-gray-700 mb-2">Video URL</label>
                  <input
                    type="text"
                    className="p-3 w-full border border-gray-300 rounded-lg outline-none"
                    placeholder="Enter trailer URL"
                  />
                </div>
              )}
              {trailerType && trailerType === "local" && (
                <div className="">
                  <label className="block text-gray-700 mb-2">Video File</label>
                  <div className="relative w-full">
                    <input
                      type="file"
                      className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none cursor-pointer file:hidden"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <PiUploadLight size={20} className="text-gray-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
