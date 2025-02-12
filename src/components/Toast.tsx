"use client";

import { Alert } from "flowbite-react";
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
    <div className="fixed top-5 right-5 z-50 space-y-2">
      {toasts.map((toast) => (
        <Alert key={toast.id} color={toast.type === "success" ? "green" : "red"}>
          {toast.message}
          <button onClick={() => removeToast(toast.id)} className="ml-2 font-bold">
            ✕
          </button>
        </Alert>
      ))}
    </div>
  );
}
