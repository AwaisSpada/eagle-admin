import { CiCircleInfo, CiImageOn } from "react-icons/ci";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from "react";
import SearchableSelect from "../common/SearchableSelect";
import { PiUploadLight } from "react-icons/pi";
import { Editor } from "@tinymce/tinymce-react";
import DurationPicker from "../common/DurationPicker";
import DatePicker from "../common/DatePicker";
import { RiDeleteBin5Line } from "react-icons/ri";
const Create = () => {
  const [trailerType, setTrailerType] = useState("");
  const [content, setContent] = useState("");
  const [access, setAccess] = useState("paid");
  const [status, setStatus] = useState(true);
  const [plan, setPlan] = useState("");
  const [duration, setDuration] = useState("00:00");
  const [downloadStatus, setDownloadsStatus] = useState(false);
  const [ageRestricted, setAgeRestricted] = useState(false);
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState("");
  const [actor, setActor] = useState(null);
  const [director, setDirector] = useState(null);
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

  const actors = [
    { label: "Leonardo DiCaprio", value: "leonardo_dicaprio" },
    { label: "Robert Downey Jr.", value: "robert_downey_jr" },
    { label: "Scarlett Johansson", value: "scarlett_johansson" },
    { label: "Tom Cruise", value: "tom_cruise" },
    { label: "Johnny Depp", value: "johnny_depp" },
    { label: "Brad Pitt", value: "brad_pitt" },
    { label: "Angelina Jolie", value: "angelina_jolie" },
    { label: "Chris Hemsworth", value: "chris_hemsworth" },
    { label: "Emma Watson", value: "emma_watson" },
    { label: "Dwayne Johnson", value: "dwayne_johnson" },
  ];

  const directors = [
    { label: "Christopher Nolan", value: "christopher_nolan" },
    { label: "Steven Spielberg", value: "steven_spielberg" },
    { label: "Martin Scorsese", value: "martin_scorsese" },
    { label: "Quentin Tarantino", value: "quentin_tarantino" },
    { label: "James Cameron", value: "james_cameron" },
    { label: "Ridley Scott", value: "ridley_scott" },
    { label: "Denis Villeneuve", value: "denis_villeneuve" },
    { label: "Francis Ford Coppola", value: "francis_ford_coppola" },
    { label: "Peter Jackson", value: "peter_jackson" },
    { label: "Guillermo del Toro", value: "guillermo_del_toro" },
  ];
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

  const plans = [
    { label: "Basic", value: "basic" },
    { label: "Premium Plan", value: "premium" },
    { label: "Ultimate Plan", value: "ultimate" },
    { label: "Elite Plan", value: "elite" },
  ];
  return (
    <div>
      <div
        className="flex items-center gap-1 text-background align-middle mb-4 cursor-pointer font-semibold w-fit"
        onClick={() => window.history.back()}
      >
        <IoChevronBackOutline />
        <span>Back</span>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row justify-center align-middle items-center gap-2">
            <CiCircleInfo size={15} color="red" />
            <div className="text">
              Import movie from TMDB ( Add the movie id )
              <span className="text-red-500">*</span>
            </div>
          </div>
          <input
            placeholder="e.g. #mv123456"
            className="p-3 outline-none  bg-gray-200 rounded-lg"
          ></input>
          <button className="bg-background px-6 py-3 rounded-lg text-white font-bold cursor-pointer">
            import
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            About Movies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="block text-gray-700 ">Thumbnail</label>
                <div className="w-full h-64 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100">
                  <CiImageOn size={40} className="text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block text-gray-700">Poster</label>
                <div className="w-full h-64 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100">
                  <CiImageOn size={40} className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="p-3 w-full border border-gray-300 rounded-lg outline-none"
                />
              </div>
              <SearchableSelect
                options={trailerTypes}
                value={trailerType}
                onChange={setTrailerType}
                label="Trailer URL Type"
                asterisk={true}
              />
              {trailerType && trailerType !== "local" && (
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">
                    Trailer URL
                  </label>
                  <input
                    type="text"
                    className="p-3 w-full border border-gray-300 rounded-lg outline-none"
                    placeholder="Enter trailer URL"
                  />
                </div>
              )}
              {trailerType && trailerType === "local" && (
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">
                    Trailer Video File
                  </label>
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
          <div className="my-6">
            <div className=" rounded-lg ">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-2">
                <label className="text-xl font-semibold mb-4 text-gray-700">
                  Description <span className="text-gray-700">*</span>
                </label>
                <button className="text-gray-700 text-sm cursor-pointer">
                  ⚠ Generate Description with AI
                </button>
              </div>

              {/* TinyMCE Editor */}
              <Editor
                apiKey="z7c9nud6buo4sg5oynvjifrkm2bvlfe5i4sv6l2sjt94cbw7" // Replace with your TinyMCE API key
                value={content}
                init={{
                  height: 250,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
                  content_style: `
            body, p, span, div, h1, h2, h3, h4, h5, h6 {
              color: black !important;
              background-color: white !important;
            }
          `,
                }}
                onEditorChange={(newContent) => setContent(newContent)}
              />
            </div>
          </div>
          <div className="flex gap-6 w-full mx-auto rounded-lg space-y-6">
            <div className=" items-center space-x-6">
              <label className="text-gray-700 font-medium">Access</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="access"
                    value="paid"
                    checked={access === "paid"}
                    onChange={() => setAccess("paid")}
                    className="hidden"
                  />
                  <span
                    className={`px-10 py-3 rounded-lg ${access === "paid" ? "bg-background text-white" : "bg-gray-200"}`}
                  >
                    Paid
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="access"
                    value="free"
                    checked={access === "free"}
                    onChange={() => setAccess("free")}
                    className="hidden"
                  />
                  <span
                    className={`px-10 py-3 rounded-lg ${access === "free" ? "bg-background text-white" : "bg-gray-200"}`}
                  >
                    Free
                  </span>
                </label>
              </div>
            </div>

            {access === "paid" && (
              <div className="w-2/3">
                <SearchableSelect
                  options={plans}
                  value={plan}
                  onChange={setPlan}
                  label="Plan"
                  asterisk={true}
                />
              </div>
            )}

            <div className=" items-center space-x-4">
              <label className="text-gray-700 font-medium">Status</label>
              <button
                onClick={() => setStatus(!status)}
                className={`w-12 h-6 flex items-center rounded-full mt-5 p-1 transition duration-300 ${status ? "bg-background" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${status ? "translate-x-6" : "translate-x-0"}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Basic Info
          </h2>
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
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Actors & Directors
          </h2>
          <div className="flex gap-6">
            <div className="w-1/2 ">
              <SearchableSelect
                options={actors}
                value={actor}
                onChange={setActor}
                label="Actors"
                asterisk={true}
              />
            </div>
            <div className="w-1/2 ">
              <SearchableSelect
                options={directors}
                value={director}
                onChange={setDirector}
                label="Directors"
                asterisk={true}
              />
            </div>
          </div>
        </div>
      </div>
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
      <div className="flex justify-end">
        <button className="bg-background text-white px-6 py-3 rounded-lg shadow-md ">
          Save
        </button>
      </div>
    </div>
  );
};

export default Create;
