// icons
import { FaRegEye, FaRegClock, FaMusic } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

const TableSection = (): JSX.Element => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs uppercase text-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              <FaRegClock size="1rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <FaRegEye size="1rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <FaMusic size="0.9rem" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="border-r border-2">
          <tr className="text-white border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Sliver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                <IoMdOptions />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
