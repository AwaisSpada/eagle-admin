import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { PiUploadLight } from "react-icons/pi";
import { Editor } from "@tinymce/tinymce-react";
import SearchableSelect from "../common/SearchableSelect";
const About = () => {
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

  return (
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
                <label className="block text-gray-700 mb-2">Trailer URL</label>
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
  );
};

export default About;
