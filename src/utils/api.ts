const BASE_URL = "http://localhost:8000"; // Update with your FastAPI URL

export async function fetchETLJobs() {
  const res = await fetch(`${BASE_URL}/etl/jobs`);
  return res.json();
}

export async function fetchEndpoints() {
  const res = await fetch(`${BASE_URL}/etl/endpoints`);
  return res.json();
}

export async function fetchETLLogs() {
  const res = await fetch(`${BASE_URL}/etl/logs`);
  return res.json();
}

export async function addEndpoint(endpoint: { name: string; path: string; method: string }) {
  const res = await fetch(`${BASE_URL}/etl/endpoints`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(endpoint),
  });
  return res.json();
}
