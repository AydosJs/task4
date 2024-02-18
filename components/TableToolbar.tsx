"use client";
import { UserValues } from "@/app/(auth)/signup/Form";
import { useGlobalContext } from "@/context/store";
import { QueryResult, sql } from "@vercel/postgres";
import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
interface Props {
  selectedId: number[];
}
// async function deleteItem({ selectedId }: Props) {
//   try {
//     const result: QueryResult<UserValues> = await sql`
//       DELETE FROM users WHERE id IN (${selectedId
//         .map((id: number) => `$${id}`)
//         .join(",")})`;
//     console.log("result", result);
//   } catch (error) {
//     console.log("Delete error", error);
//   }
// }

export default function TableToolbar() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  // const { selectedId, setSelectedId } = context;

  // const handleDeleteClick = async () => {
  //   if (selectedId.length == 0) return;
  //   // const res = await deleteItem({ selectedId });
  // };
  return (
    <div className="flex flex-row mb-4 space-x-2 items-center justify-start w-full">
      <button className="px-2 py-1 opacity-60 hover:opacity-100 border-2 bg-red-800 border-red-500 font-normal rounded flex flex-row items-center">
        <FaLock className="w-4 h-4 mr-2" />
        Block
      </button>
      <button className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-green-800 border-green-500 font-normal rounded flex flex-row items-center">
        <FaLockOpen className="w-4 h-4" />
      </button>
      <button
        // onClick={handleDeleteClick}
        className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-red-900 border-red-700 font-normal rounded flex flex-row items-center"
      >
        <RiDeleteBinFill className="w-4 h-4" />
      </button>
    </div>
  );
}
