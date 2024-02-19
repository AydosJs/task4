"use client";
import { useGlobalContext } from "@/context/store";
import { UserValues } from "@/types";
import { CgSpinner } from "react-icons/cg";

type Props = {
  userList: UserValues[];
  sessionUser?: UserValues;
};

export default function TableBody({ userList, sessionUser }: Readonly<Props>) {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { selectedId, setSelectedId, loading } = context;

  const dayjs = require("dayjs");

  const handleItemClick = (id: number) => {
    setSelectedId((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <tbody className="relative font-medium">
      {userList.map((user, index) => (
        <tr
          onClick={() => handleItemClick(Number(user.id))}
          key={user.id}
          className={`divide-x group divide-neutral-800 text-neutral-500 cursor-pointer ${
            ++index % 2 == 0 && "bg-neutral-800/40"
          } hover:bg-neutral-950/50 ${
            sessionUser?.email === user.email &&
            " outline outline-offset-0 outline-neutral-700/50"
          }
          ${selectedId.includes(Number(user.id)) && "bg-neutral-950/50 "}`}
        >
          <td
            className={`${
              selectedId.includes(Number(user.id))
                ? "opacity-100"
                : "opacity-50"
            } p-4 w-4 group-hover:opacity-100`}
          >
            <div className="flex items-center">
              <input
                id="checkbox-table-1"
                type="checkbox"
                className="w-4 h-4 text-neutral-600 bg-neutral-500 rounded"
                checked={selectedId.includes(Number(user.id))}
                readOnly
              />
              <label htmlFor="checkbox-table-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td className="p-4 py-2 sm:py-4 sm:hidden">
            <div className="flex flex-col">
              <span>
                {user?.name} {user?.position ? `/ ${user?.position}` : ""}
              </span>
              <span></span>
              <span className="font-bold">{user?.email}</span>
            </div>
          </td>
          <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
            {user?.name}
          </td>
          <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
            {user?.position}
          </td>
          <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
            {user?.email}
          </td>
          <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
            {dayjs(user?.lastLogin).format("MMM D, YYYY h:mm A")}
          </td>
          <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
            {dayjs(user?.registered).format("MMM D, YYYY h:mm A")}
          </td>
          <td className="p-4 py-2 sm:py-4">
            <span
              className={`p-[3px] rounded-full px-2 bg-opacity-50 bg-neutral-800 ${
                user?.status === "active" ? "text-green-700" : "text-red-700"
              }`}
            >
              {user?.status === "active" ? "Active" : "Blocked"}
            </span>
          </td>
        </tr>
      ))}

      {!!loading && (
        <tr>
          <td>
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/60 flex items-center justify-center">
              <CgSpinner className="w-10 h-10 ml-2 animate-spin z-20" />
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
}
