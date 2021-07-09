import useSWR from 'swr'
import axios from 'axios';;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
  validateStatus: function (status) {
    return status < 500;
  }
});

api.interceptors.request.use(
  function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  }
)
interface Header {
  authorization?: string
}

export function useFetch<Data = any, Error = any>(url: string, header: Header) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url, { headers: header });

    return response.data;
  })

  return { data, error }
};

export default api;

