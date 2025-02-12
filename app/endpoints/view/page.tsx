"use client";

import { useEffect } from "react";
import { useETLStore } from "@/store/etlStore";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EndpointsTable from "@/components/EndpointsTable";

export default function ViewEndpointsPage() {
    const { endpoints, fetchEndpoints, loading } = useETLStore(); // ✅ No `setEndpoints`

    useEffect(() => {
        fetchEndpoints(); // ✅ Use Zustand's function instead of `setEndpoints`
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-64 p-5 w-full">
                <Navbar title="View Endpoints" />
                {loading ? (
                    <p className="text-center">Loading endpoints...</p>
                ) : (
                    <EndpointsTable endpoints={endpoints} />
                )}
            </main>
        </div>
    );
}
