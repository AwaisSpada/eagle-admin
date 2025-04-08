import { CiCircleInfo } from "react-icons/ci";
const MovieId = () => {
  return (
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
  );
};

export default MovieId;
