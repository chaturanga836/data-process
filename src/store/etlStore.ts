import { create } from "zustand";
import { fetchEndpoints } from "@/utils/api";

interface ETLStore {
  endpoints: any[];
  refreshEndpoints: () => void;
}

export const useETLStore = create<ETLStore>((set) => ({
  endpoints: [],
  refreshEndpoints: async () => {
    const data = await fetchEndpoints();
    set({ endpoints: data });
  },
}));
