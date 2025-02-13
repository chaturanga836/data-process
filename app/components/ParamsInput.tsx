"use client";

import { Label, Tabs, Select, Textarea, Button, Modal, TextInput } from "flowbite-react";
import { HiTable, HiCode, HiCheckCircle, HiExclamationCircle, HiPlus, HiTrash } from "react-icons/hi";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const JSONEditor = dynamic(() => import("react-json-view"), { ssr: false });

export default function ParamsInput({ queryParams, setQueryParams, bodyParams, setBodyParams }: any) {

    const [qParam, setQParam] = useState<{ [key: string]: string }>(() => {
        try {
            return JSON.parse(queryParams);
        } catch {
            return {};
        }
    });
    const [bodyJsonInput, setBodyJsonInput] = useState(bodyParams);
    const [isValidBodyJson, setIsValidBodyJson] = useState(true);
    const [jsonInput, setJsonInput] = useState(queryParams);
    const [isValidJson, setIsValidJson] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newKey, setNewKey] = useState("");
    const [newValue, setNewValue] = useState("string");
    const [deleteKey, setDeleteKey] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    useEffect(() => {
        try {
            setQParam(JSON.parse(queryParams));
            setJsonInput(queryParams);
        } catch {
            setQParam({});
        }
    }, [queryParams]);

    const updateQueryParams = (updatedParams: any) => {
        setQParam(updatedParams);
        setQueryParams(JSON.stringify(updatedParams, null, 2));
    };

    const handleTableChange = (key: string, value: string) => {
        const updatedParams = { ...qParam, [key]: value };
        setQParam(updatedParams);
        setQueryParams(JSON.stringify(updatedParams, null, 2));
    };

    const handleJsonChange = (updatedJson: any) => {
        setQueryParams(JSON.stringify(updatedJson.updated_src, null, 2));
        setQParam(updatedJson.updated_src);
        setJsonInput(JSON.stringify(updatedJson.updated_src, null, 2));
    };

    const handlePasteJson = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJsonInput(e.target.value);
        try {
            const parsed = JSON.parse(e.target.value);
            setQueryParams(JSON.stringify(parsed, null, 2));
            setQParam(parsed);
            setIsValidJson(true);
        } catch {
            setIsValidJson(false);
        }
    };

    const handleAddField = () => {
        if (newKey.trim()) {
            const updatedParams = { ...qParam, [newKey]: newValue };
            setQParam(updatedParams);
            setQueryParams(JSON.stringify(updatedParams, null, 2));
            setNewKey("");
            setNewValue("string");
            setIsModalOpen(false);
        }
    };

    const handlePasteBodyJson = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBodyJsonInput(e.target.value);
        try {
            const parsed = JSON.parse(e.target.value);
            setBodyParams(JSON.stringify(parsed, null, 2));
            setIsValidBodyJson(true);
        } catch {
            setIsValidBodyJson(false);
        }
    };

    const handleDeleteField = () => {
        const updatedParams = { ...qParam };
        delete updatedParams[deleteKey];
        updateQueryParams(updatedParams);
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <div className="mb-2">
                <Label htmlFor="query_params" value="Query Params (Auto Extracted Data Types)" />
                <Tabs aria-label="Default tabs">
                    <Tabs.Item title="Table" icon={HiTable}>
                        <Button className="mb-2" onClick={() => setIsModalOpen(true)}>
                            <HiPlus className="mr-1" /> Add Field
                        </Button>
                        <table className="w-full border-collapse border border-gray-300">
                            <tbody>
                                {Object.entries(qParam).map(([key, value]) => (
                                    <tr key={key} className="border border-gray-300">
                                        <td className="border border-gray-300 px-2 py-1">{key}</td>
                                        <td className="border border-gray-300 px-2 py-1">
                                            <Select
                                                value={value}
                                                onChange={(e) => handleTableChange(key, e.target.value)}
                                            >
                                                <option value="string">string</option>
                                                <option value="number">number</option>
                                                <option value="datetime">datetime</option>
                                                <option value="object">object</option>
                                                <option value="array">array</option>
                                            </Select>
                                        </td>
                                        <td className="border border-gray-300 px-2 py-1 text-center">
                                            <Button color="failure" size="xs" onClick={() => {
                                                setDeleteKey(key);
                                                setIsDeleteModalOpen(true);
                                            }}>
                                                <HiTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Tabs.Item>
                    <Tabs.Item title="Json" icon={HiCode}>
                        <div className="relative flex gap-4 items-start" style={{ overflow: "visible", zIndex: 1000 }}>
                            <JSONEditor
                                src={qParam}
                                onEdit={handleJsonChange}
                                onAdd={handleJsonChange}
                                onDelete={handleJsonChange}
                                theme="monokai"
                                displayDataTypes={false}
                                enableClipboard={false}
                                style={{ overflow: "visible", zIndex: 1000, flex: 1 }}
                            />
                            <div className="flex flex-col w-1/2">
                                <Textarea
                                    id="json_paste"
                                    value={jsonInput}
                                    onChange={handlePasteJson}
                                    placeholder='{"id": "number", "type": "string"}'
                                    className="flex-1"
                                />
                                <div className="mt-1 flex items-center text-sm">
                                    {isValidJson ? (
                                        <HiCheckCircle className="text-green-500 mr-1" />
                                    ) : (
                                        <HiExclamationCircle className="text-red-500 mr-1" />
                                    )}
                                    {isValidJson ? "Valid JSON" : "Invalid JSON"}
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>

            <div className="mt-4">
                <Label value="Body Params (JSON)" />
                <Textarea
                    value={bodyJsonInput}
                    onChange={handlePasteBodyJson}
                    placeholder='{"key": "value"}'
                />
                <div className="mt-1 flex items-center text-sm">
                    {isValidBodyJson ? (
                        <HiCheckCircle className="text-green-500 mr-1" />
                    ) : (
                        <HiExclamationCircle className="text-red-500 mr-1" />
                    )}
                    {isValidBodyJson ? "Valid JSON" : "Invalid JSON"}
                </div>
            </div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Header>Add New Field</Modal.Header>
                <Modal.Body>
                    <Label htmlFor="new_key" value="Field Name" />
                    <TextInput id="new_key" value={newKey} onChange={(e) => setNewKey(e.target.value)} />
                    <Label htmlFor="new_value" value="Field Type" className="mt-2" />
                    <Select id="new_value" value={newValue} onChange={(e) => setNewValue(e.target.value)}>
                        <option value="string">string</option>
                        <option value="number">number</option>
                        <option value="datetime">datetime</option>
                        <option value="object">object</option>
                        <option value="array">array</option>
                    </Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAddField}>Add</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
                <Modal.Header>Confirm Delete</Modal.Header>
                <Modal.Body>Are you sure you want to delete the field "{deleteKey}"?</Modal.Body>
                <Modal.Footer>
                    <Button color="failure" onClick={handleDeleteField}>Yes</Button>
                    <Button onClick={() => setIsDeleteModalOpen(false)}>No</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
