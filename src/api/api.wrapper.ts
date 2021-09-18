import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = axios.create({});

export const apiWrapper = (options: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
      console.log("Do roi nek");
      console.debug("Request Successful", response);
      console.log(response.data);
      return response.data;
    };

    const onError = (error: AxiosError) => {    
        if (error.response) {
          console.error("Status: ", error.response.status);
          console.error("Data: ", error.response.data);
          console.error("Headers: ", error.response);
        } else {
          console.error("Error message: ", error.message);
        }
        return error.response;
      };
      return apiRequest(options).then(onSuccess).catch(onError);
}