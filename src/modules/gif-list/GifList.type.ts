import { GifsResponseProps } from "./service/Gifs.service.type";
export interface GifListProps {
  gifList: GifsResponseProps[];
  onLoadMore: () => void;
  hasMoreItems?: boolean;
}
