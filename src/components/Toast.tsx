"use client";

import { useToastStore } from "@/store/toastStore";
import { useEffect, useState } from "react";

export default function Toast() {
  const { toasts, removeToast } = useToastStore();
  const [visible, setVisible] = useState<number | null>(null);

  useEffect(() => {
    if (toasts.length > 0) {
      setVisible(toasts[toasts.length - 1].id);
    }
  }, [toasts]);

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-3 rounded-lg shadow-md text-white text-sm transition-opacity ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } ${visible === toast.id ? "opacity-100" : "opacity-0"}`}
        >
          {toast.message}
          <button
            className="ml-2 text-white font-bold"
            onClick={() => removeToast(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
