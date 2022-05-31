import { useState } from "react";
import Image from "next/image";

// icons
import {
  FaRegEye,
  FaRegClock,
  FaMusic,
  FaPlayCircle,
  FaPauseCircle,
} from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

const TableSection = (): JSX.Element => {
  // useState
  const [play, setPlay] = useState(false);

  // handle play
  const handlePlay = (): void => {
    setPlay(!play);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs uppercase text-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              <FaMusic size="0.9rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <FaRegEye size="1rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <FaRegClock size="1rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-white border-b">
            <th scope="row" className="px-6 py-0 font-medium whitespace-nowrap">
              <div className="flex place-items-center justify-start space-x-4">
                <span onClick={handlePlay} className="cursor-pointer">
                  <div
                    className={`control ${
                      play ? "pause" : "play"
                    } trigger-audio`}
                  >
                    <span className="left" />
                    <span className="right" />
                  </div>
                </span>
                <img
                  src="https://picsum.photos/60/60"
                  className="h-16 w-16"
                  alt="Music Art"
                />
                <span className="flex flex-col place-items-start pl-10">
                  <span
                    aria-label="Song Name"
                    className="text-sm font-bold uppercase"
                  >
                    Internet
                  </span>
                  <span
                    aria-label="Artist Name"
                    className="text-sm font-light text-white capitalize"
                  >
                    JT
                  </span>
                </span>
              </div>
            </th>
            <td className="px-6 py-4">Internet</td>
            <td className="px-6 py-4">22.2k</td>
            <td className="px-6 py-4">02:23</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium hover:underline">
                <IoMdOptions size="1rem" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
