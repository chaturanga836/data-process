const BASE_URL = "http://localhost:8000"; // Update this if your backend URL is different

// ✅ Existing Function: Fetch ETL Jobs
export async function fetchETLJobs() {
  try {
    const res = await fetch(`${BASE_URL}/etl/jobs`);
    if (!res.ok) throw new Error(`Error fetching ETL Jobs: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// ✅ New Function: Fetch API Endpoints
export async function fetchEndpoints() {
  try {
    const res = await fetch(`${BASE_URL}/etl/endpoints`);
    if (!res.ok) throw new Error(`Error fetching endpoints: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// ✅ New Function: Add an API Endpoint
export async function addEndpoint(endpoint: { name: string; path: string; method: string }) {
  try {
    const res = await fetch(`${BASE_URL}/etl/endpoints`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(endpoint),
    });
    if (!res.ok) throw new Error(`Error adding endpoint: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// ✅ New Function: Delete an API Endpoint
export async function deleteEndpoint(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/etl/endpoints/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Error deleting endpoint: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateEndpoint(id: string, endpointData: { name: string; path: string; method: string }) {
  try {
    const res = await fetch(`${BASE_URL}/etl/endpoints/${id}`, {
      method: "PUT", // ✅ Use PUT for updating
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(endpointData),
    });

    if (!res.ok) throw new Error(`Error updating endpoint: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update endpoint:", error);
    return null;
  }
}
