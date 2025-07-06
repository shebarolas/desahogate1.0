"use client";
import { useState } from "react";
import axios from "axios";

export function useRefreshToken() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/refresh-token");

      if (response.status !== 200) {
        throw new Error("No se pudo refrescar el token.");
      }

      return true;
    } catch (err: any) {
      console.error("❌ Error al refrescar token:", err);
      setError(err?.message || "Error desconocido");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { refresh, loading, error };
}
