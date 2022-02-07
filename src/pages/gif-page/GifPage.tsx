import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { NavBar } from "../../components/navbar";
import { TopSearch } from "../../components/top-search";
import { getGifItems } from "../../modules/gif-list/service";
import { GifList } from "../../modules/gif-list";
import { GifsResponseProps } from "../../modules/gif-list/service";
import styles from "./GifPage.module.scss";

export const GifPage = (): JSX.Element => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<GifsResponseProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_FETCH = 20;

  const fetchData = useCallback(async () => {
    try {
      const response = await getGifItems(offset);
      setData((prev) => [...prev, ...response]);
    } catch (error) {
      setHasMore(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onLoadMore = () => {
    if (hasMore) {
      const newOffset = offset + ITEMS_PER_FETCH;
      setOffset(newOffset);
    }
  };
  return (
    <Container className={styles.container}>
      <NavBar />
      <TopSearch />
      <header className="d-flex align-items-center">
        <FontAwesomeIcon icon={faChartLine} />{" "}
        <h3 className="h4 px-3">Trending Gifs</h3>
      </header>
      <GifList gifList={data} onLoadMore={onLoadMore} hasMoreItems={hasMore} />
    </Container>
  );
};
