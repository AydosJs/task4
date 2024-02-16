import { UserValues } from "@/app/(auth)/signup/Form";

type Props = {
  user: UserValues;
  index: number;
  sessionUser?: UserValues;
};

export default function TableItem({
  user,
  index,
  sessionUser,
}: Readonly<Props>) {
  const dayjs = require("dayjs");
  return (
    <tr
      key={user.id}
      className={`divide-x group divide-neutral-800 text-neutral-500 cursor-pointer ${
        ++index % 2 == 0 && "bg-neutral-800/40"
      } hover:bg-neutral-950/50 ${
        sessionUser?.email === user.email && "border-2 border-neutral-700"
      }`}
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
          <span>
            {user?.name} {user?.position ? `/ ${user?.position}` : ""}
          </span>
          <span></span>
          <span className="font-bold">{user?.email}</span>
        </div>
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">{user?.name}</td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        {user?.position}
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">{user?.email}</td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        {dayjs(user?.registered).format("MMM D, YYYY h:mm A")}
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        {dayjs(user?.lastLoggedIn).format("MMM D, YYYY h:mm A")}
      </td>
      <td className="p-4 py-2 sm:py-4">
        <span
          className={`p-[3px] rounded-full px-2 bg-opacity-50 bg-neutral-800 ${
            user?.status === "active" ? "text-green-700" : "text-red-700"
          }`}
        >
          Active
        </span>
      </td>
    </tr>
  );
}
