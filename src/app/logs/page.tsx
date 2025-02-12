import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { fetchETLLogs } from "@/utils/api";

export default function LogsPage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    async function loadLogs() {
      const data = await fetchETLLogs();
      setLogs(data);
    }
    loadLogs();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-5 w-full">
        <Navbar title="ETL Logs" />
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent ETL Logs</h2>
          <ul className="space-y-2">
            {logs.map((log, index) => (
              <li key={index} className="border p-2 rounded">
                {log.message}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
