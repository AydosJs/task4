"use client";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Table() {
  const { isLoading, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/api/user");
      return res.data;
    },
  });
  const { data: session } = useSession();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {users?.data && (
        <table className="w-full text-sm text-left bg-neutral-800 bg-opacity-50 rounded overflow-hidden ring-2 ring-neutral-800">
          <TableHead userList={users.data} />
          <TableBody userList={users.data} sessionUser={session?.user} />
        </table>
      )}
    </>
  );
}
