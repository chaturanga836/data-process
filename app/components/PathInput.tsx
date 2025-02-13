"use client";

import { Label, TextInput } from "flowbite-react";

function getDataType(value: string): string {
    try {
        const parsedValue = JSON.parse(value);
        if (Array.isArray(parsedValue)) return "array";
        if (typeof parsedValue === "object") return "object";
    } catch {
        if (/^\d+(\.\d+)?$/.test(value)) return "number";
    }
    return "string";
}

export default function PathInput({ path, setPath, setQueryParams }: any) {
    function extractQueryParams(inputPath: string) {
        const urlParts = inputPath.split("?");
        if (urlParts.length === 2) {
            const queryString = urlParts[1];
            const params = new URLSearchParams(queryString);
            const queryObject: Record<string, string> = {};

            params.forEach((value, key) => {
                queryObject[key] = getDataType(value);
            });

            setQueryParams(JSON.stringify(queryObject, null, 2));
        } else {
            setQueryParams("{}");
        }
    }

    function handlePathChange(e: React.ChangeEvent<HTMLInputElement>) {
        const inputPath = e.target.value;
        setPath(inputPath);
        extractQueryParams(inputPath);
    }

    return (
        <div className="mb-2">
            <Label htmlFor="path" value="API Path (Includes Query Params)" />
            <TextInput id="path" value={path} onChange={handlePathChange} required />
        </div>
    );
}
