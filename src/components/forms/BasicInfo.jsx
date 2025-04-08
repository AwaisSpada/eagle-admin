import { useState } from "react";
import SearchableSelect from "../common/SearchableSelect";
import DurationPicker from "../common/DurationPicker";
import DatePicker from "../common/DatePicker";

const BasicInfo = () => {
  const [duration, setDuration] = useState("00:00");
  const [downloadStatus, setDownloadsStatus] = useState(false);
  const [ageRestricted, setAgeRestricted] = useState(false);
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState("");
  const languages = [
    { label: "English", value: "english" },
    { label: "Spanish", value: "spanish" },
    { label: "French", value: "french" },
    { label: "German", value: "german" },
    { label: "Chinese", value: "chinese" },
  ];
  const countries = [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
  ];
  const genresList = [
    { label: "Action", value: "action" },
    { label: "Animation", value: "animation" },
    { label: "Comedy", value: "comedy" },
    { label: "Historical", value: "historical" },
    { label: "Horror", value: "horror" },
    { label: "Inspirational", value: "inspirational" },
    { label: "Romantic", value: "romantic" },
    { label: "Thriller", value: "thriller" },
    { label: "Romance", value: "romance" },
    { label: "Science Fiction", value: "science fiction" },
    { label: "Adventure", value: "adventure" },
    { label: "Family", value: "family" },
    { label: "Drama", value: "drama" },
    { label: "Mystery", value: "mystery" },
    { label: "Action & Adventure", value: "action & adventure" },
    { label: "Crime", value: "crime" },
    { label: "Sci-fi & Fantasy", value: "sci-fi & fantasy" },
  ];

  return (
    <div className=" flex justify-center items-center my-6">
      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Basic Info</h2>
        <div className="flex gap-6">
          <div className="w-1/3 ">
            <SearchableSelect
              options={languages}
              value={language}
              onChange={setLanguage}
              label="Language"
              asterisk={true}
            />
          </div>
          <div className="w-1/3 ">
            <SearchableSelect
              options={genresList}
              value={genres}
              onChange={setGenres}
              label="Genres"
              asterisk={true}
            />
          </div>
          <div className="w-1/3 ">
            <SearchableSelect
              options={countries}
              value={country}
              onChange={setCountry}
              label="Country"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="flex gap-6 mt-2">
          <div className="w-1/3 ">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                IMDb Rating <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="IMDb Rating"
                className="p-3 w-full border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
          <div className="w-1/3 ">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Content Rating <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Everyone. Content is generally suitable for all ages"
                className="p-3 w-full border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
          <div className="w-1/3 ">
            <DurationPicker
              value={duration}
              onChange={setDuration}
              maxHours={12} // Set max hours limit if needed
              maxMinutes={59} // Set max minutes limit if needed
            />
          </div>
        </div>
        <div className="flex gap-6 mt-2">
          <div className="w-1/3 ">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Release Date <span className="text-red-500">*</span>
              </label>
              <DatePicker />
            </div>
          </div>
          <div className="w-1/3 ">
            <div className=" items-center space-x-4">
              <label className="text-gray-700 font-medium">
                Age Restricted
              </label>
              <button
                onClick={() => setAgeRestricted(!ageRestricted)}
                className={`w-12 h-6 flex items-center rounded-full mt-5 p-1 transition duration-300 ${ageRestricted ? "bg-background" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${ageRestricted ? "translate-x-6" : "translate-x-0"}`}
                ></div>
              </button>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className=" items-center space-x-4">
              <label className="text-gray-700 font-medium">
                Download Status
              </label>
              <button
                onClick={() => setDownloadsStatus(!downloadStatus)}
                className={`w-12 h-6 flex items-center rounded-full mt-5 p-1 transition duration-300 ${downloadStatus ? "bg-background" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${downloadStatus ? "translate-x-6" : "translate-x-0"}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
