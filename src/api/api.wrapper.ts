import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = axios.create({});

const apiWrapper = (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    if (error.response) {
      console.error("Headers: ", error.response);
    } else {
      console.error("Error message: ", error.message);
    }
    return error.response;
  };
  return apiRequest(options).then(onSuccess).catch(onError);
};
export default apiWrapper;
