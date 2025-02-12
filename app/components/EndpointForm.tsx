"use client";

import { useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { addEndpoint } from "@/utils/api";
import { useETLStore } from "@/store/etlStore";

export default function EndpointForm() {
    const [name, setName] = useState("");
    const [path, setPath] = useState("");
    const [method, setMethod] = useState("GET");
    const { fetchEndpoints } = useETLStore();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await addEndpoint({ name, path, method });
            fetchEndpoints(); // Refresh endpoint list
            setName("");
            setPath("");
            setMethod("GET");
        } catch (error) {
            console.error("Failed to add endpoint:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 shadow rounded-lg">
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
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </Select>
            </div>

            <Button type="submit" className="mt-3 w-full">
                Add Endpoint
            </Button>
        </form>
    );
}
