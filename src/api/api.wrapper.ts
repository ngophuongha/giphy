import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = axios.create({});

const apiWrapper = (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    console.log('Response: ', error.response);
    console.log('Message: ', error.message);
    return error.response;
  };
  return apiRequest(options).then(onSuccess).catch(onError);
};
export default apiWrapper;
