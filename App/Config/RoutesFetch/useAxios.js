import {useState, useCallback} from 'react';
import axios from 'axios';
import {EnvConfig} from '../../Constants/EnvConfig';

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const api = axios.create({baseURL: EnvConfig?.baseUrl});

  const request = useCallback(
    async ({
      method,
      url,
      headers,
      makeLoading,
      requestData = null,
      config = {},
    }) => {
      makeLoading && setLoading(true);
      setError(null);
      try {
        const response = await api({
          method,
          url,
          headers,
          data: requestData,
          ...config,
        });
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {loading, error, data, request};
};
