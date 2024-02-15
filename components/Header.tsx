import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";

export default async function Header() {
  const session = await getServerSession();
  console.log(session);
  return (
    <header className="sticky z-50 top-0 backdrop-blur-md border-b border-neutral-800 ">
      <div className="container mx-auto p-6 py-4 sm:px-16 flex flex-row justify-between items-center">
        <div>
          <h1 className="hidden sm:block">Aydos Sankibaev</h1>
          <p className="sm:hidden mr-6">Hello, John lennon</p>
        </div>

        <div className="flex flex-row items-center">
          <p className="mr-6 hidden sm:inline-block">Hello, John lennon</p>

          {!!session && <LogoutButton />}
        </div>
      </div>
    </header>
  );
}
