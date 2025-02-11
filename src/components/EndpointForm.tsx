"use client";

import { useState } from "react";
import { addEndpoint } from "@/utils/api";
import { useETLStore } from "@/store/etlStore";

export default function EndpointForm() {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [method, setMethod] = useState("GET");
  const { refreshEndpoints } = useETLStore();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addEndpoint({ name, path, method });
    refreshEndpoints();
  }

  return (
    <form className="bg-white p-5 shadow rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Add API Endpoint</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Path"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Endpoint
      </button>
    </form>
  );
}
