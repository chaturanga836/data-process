import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ETLJobTable from "@/components/ETLJobTable";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-5 w-full">
        <Navbar title="Dashboard" />
        <ETLJobTable />
      </main>
    </div>
  );
}
