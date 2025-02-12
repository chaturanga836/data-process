"use client";

import CustomSidebar from "../components/Sidebar";
import CustomNavbar from "../components/Navbar";
import { Card } from "flowbite-react";

export default function DashboardPage() {
    return (
        <div className="flex">
            <CustomSidebar />
            <main className="ml-64 p-5 w-full">
                <CustomNavbar title="Dashboard" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {/* Example Cards */}
                    <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            ETL Job 1
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Status: Running
                        </p>
                    </Card>
                    <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            ETL Job 2
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Status: Completed
                        </p>
                    </Card>
                    {/* Add more cards as needed */}
                </div>
            </main>
        </div>
    );
}
