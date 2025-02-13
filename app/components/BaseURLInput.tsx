"use client";

import { Label, TextInput } from "flowbite-react";

export default function BaseURLInput({ baseUrl, setBaseUrl }: any) {
    return (
        <div className="mb-2">
            <Label htmlFor="base_url" value="Base URL" />
            <TextInput id="base_url" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} required />
        </div>
    );
}
