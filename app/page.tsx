import Header from "@/components/Header";
import Table from "@/components/Table";
import { FaLock, FaLockOpen } from "react-icons/fa";
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

        <Table />
      </main>
    </>
  );
}
