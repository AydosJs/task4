import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Provider from "@/context/Provider";
import { GlobalContextProvider } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Task-4 Admin-panel",
  description: "Admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className} min-h-screen bg-neutral-900`}>
          <GlobalContextProvider>{children}</GlobalContextProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </Provider>
    </html>
  );
}
