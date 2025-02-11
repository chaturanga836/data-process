"use client";

import { Table } from "flowbite-react";
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
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Job Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <Table.Row key={job.id}>
                <Table.Cell>{job.name}</Table.Cell>
                <Table.Cell>
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      job.status === "success" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={2} className="text-center py-4">
                No jobs available.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
