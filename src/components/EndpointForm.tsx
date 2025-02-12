"use client";

import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { addEndpoint } from "@/utils/api";
import { useETLStore } from "@/store/etlStore";
import { useToastStore } from "@/store/toastStore";

export default function EndpointForm() {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [method, setMethod] = useState("GET");
  const { refreshEndpoints } = useETLStore();
  const { addToast } = useToastStore();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addEndpoint({ name, path, method });
      addToast("Endpoint added successfully!", "success");
      refreshEndpoints();
    } catch (error) {
      addToast("Failed to add endpoint", "error");
    }
  }

  return (
    <form className="bg-white p-5 shadow rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Add API Endpoint</h2>

      <div className="mb-2">
        <Label htmlFor="name" value="Endpoint Name" />
        <TextInput id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="mb-2">
        <Label htmlFor="path" value="API Path" />
        <TextInput id="path" value={path} onChange={(e) => setPath(e.target.value)} required />
      </div>

      <div className="mb-2">
        <Label htmlFor="method" value="Method" />
        <Select id="method" value={method} onChange={(e) => setMethod(e.target.value)} required>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </Select>
      </div>

      <Button type="submit" className="mt-3 w-full">
        Add Endpoint
      </Button>
    </form>
  );
}
