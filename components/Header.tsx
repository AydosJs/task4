"use client";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky z-50 top-0 backdrop-blur-md border-b border-neutral-800 ">
      <div className="container mx-auto p-6 py-4 sm:px-16 flex flex-row justify-between items-center">
        <div>
          <h1 className="hidden sm:block">Aydos Sankibaev</h1>
          <p className="sm:hidden mr-6">
            Hello, {session?.user?.name ? session?.user?.name : "Guest"}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <p className="mr-6 hidden sm:inline-block">
            Hello, {session?.user?.name ? session?.user?.name : "Guest"}
          </p>

          {!!session && <LogoutButton />}
        </div>
      </div>
    </header>
  );
}
