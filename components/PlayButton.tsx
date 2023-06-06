import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="flex items-center justify-center p-4 transition bg-green-500 rounded-full opacity-0 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
