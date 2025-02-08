import { useState } from 'react';

function AddEndpoint() {
  const [endpoint, setEndpoint] = useState({
    url: '',
    method: 'GET',
    headers: [{ key: '', value: '' }],
    params: [{ key: '', value: '' }],
    authType: 'None',
    authDetails: {},
  });

  const handleInputChange = (e:any) => {
    setEndpoint({ ...endpoint, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await fetch('/api/endpoints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(endpoint),
    });
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="url"
        placeholder="API URL"
        value={endpoint.url}
        onChange={handleInputChange}
        required
      />
      {/* Additional inputs for method, headers, params, authDetails */}
      <button type="submit">Add Endpoint</button>
    </form>
  );
}

export default AddEndpoint;
