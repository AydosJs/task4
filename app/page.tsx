import Header from "@/components/Header";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-16 my-10">
        
        <div className="flex flex-row mb-4 space-x-2 items-center justify-start w-full">
          <button className="px-2 py-1 opacity-60 hover:opacity-100 border-2 bg-red-800 border-red-500 font-normal rounded flex flex-row items-center">
            <FaLock className="w-4 h-4 mr-2" />
            Block
          </button>
          <button className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-green-800 border-green-500 font-normal rounded flex flex-row items-center">
            <FaLockOpen className="w-4 h-4" />
          </button>
          <button className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-red-900 border-red-700 font-normal rounded flex flex-row items-center">
            <RiDeleteBinFill className="w-4 h-4" />
          </button>
        </div>

        <table className="w-full text-sm text-left bg-neutral-800 bg-opacity-50 rounded overflow-hidden">
          <thead className="bg-neutral-800 bg-opacity-50 text-xs uppercase font-medium ">
            <tr className="divide-x divide-neutral-800">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4  bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="p-4 sm:hidden">
                Name & Position & Email
              </th>
              <th scope="col" className="p-4 hidden sm:table-cell">
                Name
              </th>
              <th scope="col" className="p-4 hidden sm:table-cell">
                Position
              </th>
              <th scope="col" className="p-4 hidden sm:table-cell">
                Email
              </th>
              <th scope="col" className="p-4 hidden sm:table-cell">
                Last login
              </th>
              <th scope="col" className="p-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i, index) => (
              <tr
              key={index}
              className={`divide-x group divide-neutral-800 text-neutral-500 cursor-pointer ${++index % 2 == 0  && 'bg-neutral-900'} hover:bg-neutral-950`}
              >
                <td className="p-4 w-4 opacity-50 group-hover:opacity-100">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-neutral-600 bg-neutral-500 rounded"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="p-4 py-2 sm:py-4 sm:hidden">
                  <div className="flex flex-col">
                    <span>Pavel Lebedov</span>
                    <span>Office manager</span>
                    <span className="font-bold">p.lebedov@gmail.com</span>
                  </div>
                </td>
                <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">Pavel Lebedov</td>
                <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">Office manager</td>
                <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">p.lebedov@gmail.com</td>
                <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">12.10.07, 2 Nov, 2022</td>
                <td className="p-4 py-2 sm:py-4">
                  <span className="p-[3px] rounded-full bg-green-800 px-2 bg-opacity-50 text-neutral-200 border-2 border-green-700">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
