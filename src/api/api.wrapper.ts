import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = axios.create({});

//eslint-disable-next-line
const apiWrapper = <T>(options: AxiosRequestConfig): Promise<T> => {
  const onSuccess = (response: AxiosResponse) => response.data;

  const onError = (error: AxiosError) => error.response;

  return apiRequest(options).then(onSuccess).catch(onError);
};

export default apiWrapper;
