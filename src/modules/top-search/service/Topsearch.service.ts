import * as apiConstants from "../../../api/api.constants";
import apiWrapper from "../../../api/api.wrapper";
import { RELATED_TERMS_API_ENDPOINT } from "../../../api/api.constants";

export const getSuggestedItems = async (
  term: string
): Promise<Array<string>> => {
  try {
    const response = await apiWrapper<{ data: Array<{ name: string }> }>({
      url: `${apiConstants.RELATED_TERMS_API_ENDPOINT}`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        term: term,
      },
    });
    return response.data.map((item) => item.name);
  } catch (error) {
    return [];
  }
};
