import { QueryResult, sql } from "@vercel/postgres";
import { UserValues } from "@/app/(auth)/signup/Form";
import TableItem from "./TableItem";
import { getServerSession } from "next-auth";

export default async function Table() {
  const result: QueryResult<UserValues> = await sql`SELECT * FROM users`;
  const session = await getServerSession();
  console.log("session session", session);
  return (
    <table className="w-full text-sm text-left bg-neutral-800 bg-opacity-50 rounded overflow-hidden ring-2 ring-neutral-800">
      <thead className="bg-neutral-800 bg-opacity-50 text-xs uppercase font-medium">
        <tr className="divide-x divide-neutral-800">
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all"
                type="checkbox"
                className="w-4 h-4  bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="p-4 sm:hidden">
            Name & Position & Email
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
          <th scope="col" className="p-4 hidden sm:table-cell">
            Last login
          </th>
          <th scope="col" className="p-4 hidden sm:table-cell">
            Registered
          </th>
          <th scope="col" className="p-4">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="font-medium">
        {result.rows.length !== 0 &&
          result.rows.map((user, index) => (
            <TableItem
              sessionUser={session?.user}
              key={user.id}
              user={user}
              index={index}
            />
          ))}
      </tbody>
    </table>
  );
}
