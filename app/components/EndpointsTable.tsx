"use client";

import { useETLStore } from "@/store/etlStore";
import { deleteEndpoint } from "@/utils/api";
import { useState, useEffect } from "react";
import { Button, Spinner } from "flowbite-react";
import EditEndpointModal from "./EditEndpointModal";

interface Endpoint {
    id: string;
    name: string;
    path: string;
    method: string;
}

interface EndpointsTableProps {
    endpoints: Endpoint[];
}

export default function EndpointsTable({ endpoints }: EndpointsTableProps) {
    const { fetchEndpoints, loading } = useETLStore();
    const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(null);

    useEffect(() => {
        fetchEndpoints(); // Load endpoints on component mount
    }, []);

    async function handleDelete(id: string) {
        if (confirm("Are you sure you want to delete this endpoint?")) {
            await deleteEndpoint(id);
            fetchEndpoints(); // Refresh the list after deletion
        }
    }

    return (
        <div className="mt-5 bg-white p-5 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Existing Endpoints</h2>

            {/* ✅ Show Loader when Fetching Data */}
            {loading ? (
                <div className="flex justify-center items-center py-4">
                    <Spinner size="xl" />
                </div>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Path</th>
                            <th className="border p-2">Method</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {endpoints.length > 0 ? (
                            endpoints.map((endpoint) => (
                                <tr key={endpoint.id}>
                                    <td className="border p-2">{endpoint.name}</td>
                                    <td className="border p-2">{endpoint.path}</td>
                                    <td className="border p-2">{endpoint.method}</td>
                                    <td className="border p-2 flex gap-2">
                                        <Button color="blue" onClick={() => setSelectedEndpoint(endpoint)}>
                                            Edit
                                        </Button>
                                        <Button color="red" onClick={() => handleDelete(endpoint.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-4">
                                    No endpoints available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

            {/* ✅ Edit Modal */}
            {selectedEndpoint && (
                <EditEndpointModal
                    endpoint={selectedEndpoint}
                    onClose={() => setSelectedEndpoint(null)}
                />
            )}
        </div>
    );
}
