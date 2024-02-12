import { BiSolidExit } from "react-icons/bi";

export default function Header() {
  return (
    <header className="sticky z-50 top-0 backdrop-blur-md border-b border-neutral-800 ">
      <div className="container mx-auto p-6 py-4 sm:px-16 flex flex-row justify-between items-center">
        <div>
          <h1 className="hidden sm:block">Aydos Sankibaev</h1>
          <p className="sm:hidden mr-6">Hello, John lennon</p>
        </div>

        <div className="flex flex-row items-center">
          <p className="mr-6 hidden sm:inline-block">Hello, John lennon</p>

          <button className="p-1 border border-neutral-700 opacity-60 hover:opacity-100 hover:bg-neutral-800 font-normal rounded flex flex-row items-center px-3 hover:text-neutral-100">
            Logout
            <BiSolidExit className="w-4 h-4 ml-3" />
          </button>
        </div>
      </div>
    </header>
  );
}
