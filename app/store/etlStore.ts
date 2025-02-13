import { create } from "zustand";
import { fetchEndpoints, addEndpoint, updateEndpoint, deleteEndpoint } from "@/utils/api";

interface Endpoint {
  id: string;
  name: string;
  path: string;
  method: string;
}

interface ETLStore {
  endpoints: Endpoint[];
  loading: boolean;
  error: string | null;
  
  fetchEndpoints: () => Promise<void>;
  addNewEndpoint: (endpoint: { name: string; path: string; method: string, query_params:any, body_params:any, base_url:string }) => Promise<void>;
  updateExistingEndpoint: (id: string, endpointData: { name: string; path: string; method: string }) => Promise<void>;
  deleteEndpointById: (id: string) => Promise<void>;
}

export const useETLStore = create<ETLStore>((set) => ({
  endpoints: [],
  loading: false,
  error: null,

  // ✅ Fetch Endpoints
  fetchEndpoints: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchEndpoints();
      set({ endpoints: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch endpoints:", error);
      set({ error: "Failed to fetch endpoints", loading: false });
    }
  },

  // ✅ Add New Endpoint
  addNewEndpoint: async (endpoint) => {
    set({ loading: true, error: null });
    try {
      const newEndpoint = await addEndpoint(endpoint);
      if (!newEndpoint || !newEndpoint.id) throw new Error("Invalid API response");
      
      set((state) => ({ 
        endpoints: [...state.endpoints, newEndpoint], 
        loading: false 
      }));
    } catch (error) {
      console.error("Failed to add endpoint:", error);
      set({ error: "Failed to add endpoint", loading: false });
    }
  },

  // ✅ Update Existing Endpoint
  updateExistingEndpoint: async (id, endpointData) => {
    set({ loading: true, error: null });
    try {
      const updatedEndpoint = await updateEndpoint(id, endpointData);
      if (!updatedEndpoint || !updatedEndpoint.id) throw new Error("Invalid API response");

      set((state) => ({
        endpoints: state.endpoints.map((ep) => (ep.id === id ? updatedEndpoint : ep)),
        loading: false,
      }));
    } catch (error) {
      console.error("Failed to update endpoint:", error);
      set({ error: "Failed to update endpoint", loading: false });
    }
  },

  // ✅ Delete Endpoint
  deleteEndpointById: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteEndpoint(id);
      set((state) => ({
        endpoints: state.endpoints.filter((ep) => ep.id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error("Failed to delete endpoint:", error);
      set({ error: "Failed to delete endpoint", loading: false });
    }
  },
}));
