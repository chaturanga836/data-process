"use client"; // ✅ This makes it a Client Component

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EndpointForm from "@/components/EndpointForm";
import { useETLStore } from "@/store/etlStore";
import { useEffect } from "react";

export default function EndpointsPage() {
  const { endpoints, refreshEndpoints } = useETLStore();

  useEffect(() => {
    refreshEndpoints();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-5 w-full">
        <Navbar title="Manage Endpoints" />
        <EndpointForm />

        <div className="mt-5 bg-white p-5 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Existing Endpoints</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Path</th>
                <th className="border p-2">Method</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((endpoint) => (
                <tr key={endpoint.id}>
                  <td className="border p-2">{endpoint.name}</td>
                  <td className="border p-2">{endpoint.path}</td>
                  <td className="border p-2">{endpoint.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
