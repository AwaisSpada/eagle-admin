import { useState } from "react";
import SearchableSelect from "../common/SearchableSelect";
import { IoChevronBackOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { PiUploadLight } from "react-icons/pi";
import { Editor } from "@tinymce/tinymce-react";
const CreateSeasons = () => {
  const [tvShow, setTvShow] = useState(null);
  const [season, setSeason] = useState(null);
  const [trailerType, setTrailerType] = useState("");
  const [content, setContent] = useState("");
  const [access, setAccess] = useState("paid");
  const [status, setStatus] = useState(true);
  const [plan, setPlan] = useState("");

  const trailerTypes = [
    { label: "Local", value: "local" },
    { label: "URL", value: "url" },
    { label: "YouTube", value: "youtube" },
    { label: "HLS", value: "hls" },
    { label: "HLS", value: "hls" },
    { label: "Vimeo", value: "vimeo" },
  ];
  const plans = [
    { label: "Basic", value: "basic" },
    { label: "Premium Plan", value: "premium" },
    { label: "Ultimate Plan", value: "ultimate" },
    { label: "Elite Plan", value: "elite" },
  ];

  const tvShows = [
    { label: "Breaking Bad", value: "breaking-bad" },
    { label: "Game of Thrones", value: "game-of-thrones" },
    { label: "Stranger Things", value: "stranger-things" },
    { label: "The Witcher", value: "the-witcher" },
    { label: "Sherlock", value: "sherlock" },
    { label: "Money Heist", value: "money-heist" },
    { label: "The Office", value: "the-office" },
    { label: "Friends", value: "friends" },
    { label: "Peaky Blinders", value: "peaky-blinders" },
    { label: "The Mandalorian", value: "the-mandalorian" },
    { label: "Loki", value: "loki" },
    { label: "House of the Dragon", value: "house-of-the-dragon" },
    { label: "Better Call Saul", value: "better-call-saul" },
    { label: "Westworld", value: "westworld" },
    { label: "The Boys", value: "the-boys" },
    { label: "Dark", value: "dark" },
    { label: "The Crown", value: "the-crown" },
    { label: "The Last of Us", value: "the-last-of-us" },
    { label: "Rick and Morty", value: "rick-and-morty" },
    { label: "Black Mirror", value: "black-mirror" },
  ];

  const seasonsList = [{ label: "", value: "" }];
  return (
    <div>
      <div
        className="flex items-center gap-1 text-background align-middle mb-4 cursor-pointer font-semibold w-fit"
        onClick={() => window.history.back()}
      >
        <IoChevronBackOutline />
        <span>Back</span>
      </div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Import Season From TMDB
          </h2>
          <div className="flex gap-6">
            <div className="w-1/2 ">
              <SearchableSelect
                options={tvShows}
                value={tvShow}
                onChange={setTvShow}
                label="TV Shows"
                asterisk={true}
              />
            </div>
            <div className="w-1/2 ">
              <SearchableSelect
                options={seasonsList}
                value={season}
                onChange={setSeason}
                label="Season"
                asterisk={true}
              />
            </div>
            <button className="bg-background px-6 py-3 mt-7 rounded-lg text-white font-bold cursor-pointer">
              import
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            About TV Shows Seasons
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="block text-gray-700">Poster</label>
                <div className="w-full h-36 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100">
                  <CiImageOn size={40} className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="col-span-2 gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 w-full">
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
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="mt-4">
                  <SearchableSelect
                    options={tvShows}
                    value={tvShow}
                    onChange={setTvShow}
                    label="TV Shows"
                    asterisk={true}
                  />
                </div>
                {trailerType && trailerType !== "local" && (
                  <div className="mt-4">
                    <label className="block text-gray-700 mb-2 font-medium">
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
                    <label className="block text-gray-700 mb-2 font-medium">
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
          </div>
          <div className="flex gap-6 w-full mx-auto rounded-lg space-y-6 mt-4">
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
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              {" "}
              <div className="my-6">
                <div className=" rounded-lg ">
                  {/* Header Section */}
                  <div className="flex justify-between align-middle items-center mb-2">
                    <label className="text-xl font-semibold  text-gray-700">
                      Short Description <span className="text-gray-700">*</span>
                    </label>
                    <button className="text-gray-700 text-sm cursor-pointer">
                      ⚠ Generate Description with AI
                    </button>
                  </div>
                  <textarea
                    type="text"
                    placeholder="Enter short description"
                    className="p-3 h-[200px] w-full border border-gray-300 rounded-lg outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div className="my-6">
                <div className=" rounded-lg ">
                  {/* Header Section */}
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xl font-semibold text-gray-700">
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
                      height: 200,
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
            </div>
          </div>
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

export default CreateSeasons;
