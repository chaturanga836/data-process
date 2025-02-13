"use client";

import { useETLStore } from "@/store/etlStore";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EndpointForm from "@/components/EndpointForm";

export default function AddEndpointPage() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-64 p-5 w-full">
                <Navbar title="Add New Endpoint Connection" />
                <EndpointForm />
            </main>
        </div>
    );
}
