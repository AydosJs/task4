"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiSolidExit } from "react-icons/bi";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to logout?")) {
          signOut({ redirect: false }).then(() => {
            router.push("/login"); // Redirect to the home page after signing out
          });
          toast.success("You have been logged out");
        }
      }}
      className="p-1 border border-neutral-700 opacity-60 hover:opacity-100 hover:bg-neutral-800 font-normal rounded flex flex-row items-center px-3 hover:text-neutral-100"
    >
      Logout
      <BiSolidExit className="w-4 h-4 ml-3" />
    </button>
  );
}
