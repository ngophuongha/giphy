import { useEffect, useState, useCallback } from "react";

import { getGifItems } from "../../modules/gif-list/service";
import { GifList } from "../../modules/gif-list";
import { GifsResponseProps } from "../../modules/gif-list/service";

export const GifListView = (): JSX.Element => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<GifsResponseProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_FETCH = 20;
  const fetchData = useCallback(async () => {
    try {
      const response = await getGifItems(offset);
      // console.log("offset, response: ", offset, response);
      setData((prev) => [...prev, ...response]);
    } catch (error) {
      setHasMore(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const onLoadMore = () => {
    if (hasMore) {
      const newOffset = offset + ITEMS_PER_FETCH;
      setOffset(newOffset);
    }
  };
  return (
    <GifList gifList={data} onLoadMore={onLoadMore} hasMoreItems={hasMore} />
  );
};
