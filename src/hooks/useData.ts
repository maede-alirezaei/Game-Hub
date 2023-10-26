import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CaneledError from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CaneledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
