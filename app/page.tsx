import Header from "@/components/Header";
import Table from "@/components/Table";
import TableToolbar from "@/components/TableToolbar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-16 my-10">
        <TableToolbar />
        <Table />
      </main>
    </>
  );
}
