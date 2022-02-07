import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = axios.create({});

//eslint-disable-next-line
const apiWrapper = (options: AxiosRequestConfig): Promise<any> => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    return error.response;
  };
  return apiRequest(options).then(onSuccess).catch(onError);
};
export default apiWrapper;
