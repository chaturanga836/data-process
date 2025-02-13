"use client";

import { useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useETLStore } from "@/store/etlStore";
import PathInput from "@/components/PathInput";
import ParamsInput from "@/components/ParamsInput";
import BaseURLInput from "@/components/BaseURLInput";

export default function EndpointForm() {
    const { addNewEndpoint } = useETLStore();

    const [name, setName] = useState("");
    const [path, setPath] = useState("");
    const [method, setMethod] = useState("GET");
    const [queryParams, setQueryParams] = useState("{}");
    const [bodyParams, setBodyParams] = useState("{}");
    const [baseUrl, setBaseUrl] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const parsedQueryParams = JSON.parse(queryParams);
            const parsedBodyParams = JSON.parse(bodyParams);

            await addNewEndpoint({
                name,
                path,
                method,
                query_params: parsedQueryParams,
                body_params: parsedBodyParams,
                base_url: baseUrl,
            });

            // Reset form fields after submission
            setName("");
            setPath("");
            setMethod("GET");
            setQueryParams("{}");
            setBodyParams("{}");
            setBaseUrl("");
        } catch (error) {
            console.error("Invalid JSON input for query_params or body_params:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Add API </h2>

            <div className="mb-2">
                <Label htmlFor="name" value="Connection Name" />
                <TextInput id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <PathInput path={path} setPath={setPath} setQueryParams={setQueryParams} />

            <div className="mb-2">
                <Label htmlFor="method" value="Method" />
                <Select id="method" value={method} onChange={(e) => setMethod(e.target.value)} required>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </Select>
            </div>

            <ParamsInput
                queryParams={queryParams}
                setQueryParams={setQueryParams}
                bodyParams={bodyParams}
                setBodyParams={setBodyParams}
            />

            <BaseURLInput baseUrl={baseUrl} setBaseUrl={setBaseUrl} />

            <Button type="submit" className="mt-3 w-full">
                Add Endpoint
            </Button>
        </form>
    );
}
