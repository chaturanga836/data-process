"use client";

import { useEffect, useState } from "react";
import { fetchETLJobs } from "@/utils/api";

export default function ETLJobTable() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    async function loadJobs() {
      const data = await fetchETLJobs();
      setJobs(data);
    }
    loadJobs();
  }, []);

  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">ETL Jobs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Job Name</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="border p-2">{job.name}</td>
              <td className="border p-2">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
