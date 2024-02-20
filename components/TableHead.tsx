"use client";

import { useGlobalContext } from "@/context/store";
import { UserValues } from "@/types";
import { useSession } from "next-auth/react";

interface Props {
  userList: UserValues[];
}

export default function TableHead({ userList }: Readonly<Props>) {
  const context = useGlobalContext();
  const { data: session } = useSession();

  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { selectedId, setSelectedId } = context;

  const handleClickAll = () => {
    if (
      selectedId.length === userList.length ||
      selectedId.length === userList.length - 1
    ) {
      setSelectedId([]);
    } else {
      const confirmMessage =
        "Do you want to include the current user in the selection?";
      const ids = userList.map((user) => Number(user.id));
      const filteredIds = confirm(confirmMessage)
        ? ids
        : ids.filter((id) => id !== Number(session?.user.id));

      setSelectedId(filteredIds);
    }
  };

  return (
    <thead className="bg-neutral-800 bg-opacity-50 text-xs uppercase font-medium">
      <tr className="divide-x divide-neutral-800">
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              checked={
                selectedId.length === userList.length ||
                (selectedId.length === userList.length - 1 &&
                  !selectedId.includes(Number(session?.user?.id)))
              }
              onChange={handleClickAll}
              id="checkbox-all"
              type="checkbox"
              className="w-4 h-4 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" className="p-4 sm:hidden">
          Name & Position & Email
        </th>
        <th scope="col" className="p-4 sm:hidden">
          Status
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
        <th scope="col" className="p-4">
          Last login
        </th>
        <th scope="col" className="p-4">
          Registered
        </th>
        <th scope="col" className="p-4 hidden sm:table-cell">
          Status
        </th>
      </tr>
    </thead>
  );
}
