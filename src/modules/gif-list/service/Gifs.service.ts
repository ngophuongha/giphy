import { GifRequestProps } from "./Gifs.service.type";
import * as apiConstants from "../../../api/api.constants";
import apiWrapper from "../../../api/api.wrapper";

export const getGifItems: GifRequestProps = async (offset: number) => {
  console.log("offset: ", offset);
  try {
    const response = await apiWrapper({
      url: `${apiConstants.GET_20_ITEMS_PER_OFFSET_API_ENDPOINT}&offset=${offset}`,
    });
    return response;
  } catch (error) {
    return [];
  }
};
