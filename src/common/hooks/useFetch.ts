import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface Response<T> {
  data?: T | null;
  error?: any;
  loading?: boolean;
}

const useFetch = <T extends Object>(
  req: AxiosRequestConfig
): Response<T> | undefined => {
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    axios
      .request(req)
      .then((axiosResponse: AxiosResponse<T>) => {
        setResponse({ data: axiosResponse.data, loading: false });
      })
      .catch((error: any) => {
        setResponse({ error, loading: false });
      });
  }, [req.url]);

  return response;
};

export default useFetch;
