"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
type ProviderProps = {
  children: React.ReactNode; // Generic React.ReactNode for flexibility
  session?: any; // Optional session data, matching NextAuth's `Session`
};
export default function Provider({
  children,
  session,
}: Readonly<ProviderProps>) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
