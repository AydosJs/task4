"use client";
import { signOut } from "next-auth/react";
import { BiSolidExit } from "react-icons/bi";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="p-1 border border-neutral-700 opacity-60 hover:opacity-100 hover:bg-neutral-800 font-normal rounded flex flex-row items-center px-3 hover:text-neutral-100"
    >
      Logout
      <BiSolidExit className="w-4 h-4 ml-3" />
    </button>
  );
}
