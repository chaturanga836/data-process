"use client";

import { useState } from "react";
import { Modal, Button, Label, TextInput, Select } from "flowbite-react";
import { useETLStore } from "@/store/etlStore";
import { updateEndpoint } from "@/utils/api";

interface Endpoint {
    id: string;
    name: string;
    path: string;
    method: string;
}

interface EditEndpointModalProps {
    endpoint: Endpoint;
    onClose: () => void;
}

export default function EditEndpointModal({ endpoint, onClose }: EditEndpointModalProps) {
    const { fetchEndpoints } = useETLStore();
    const [name, setName] = useState(endpoint.name);
    const [path, setPath] = useState(endpoint.path);
    const [method, setMethod] = useState(endpoint.method);

    async function handleUpdate() {
        await updateEndpoint(endpoint.id, { name, path, method });
        fetchEndpoints();
        onClose();
    }

    return (
        <Modal show={true} onClose={onClose}>
            <Modal.Header>Edit Endpoint</Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <Label>Name</Label>
                    <TextInput value={name} onChange={(e) => setName(e.target.value)} />

                    <Label>Path</Label>
                    <TextInput value={path} onChange={(e) => setPath(e.target.value)} />

                    <Label>Method</Label>
                    <Select value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </Select>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="blue" onClick={handleUpdate}>Save Changes</Button>
                <Button color="gray" onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}
