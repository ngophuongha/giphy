import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { NavBar } from "../components/navbar/NavBar";
import { TopSearch } from "../components/top-search/TopSearch";
import { getGifItems } from "../modules/gif-list/service/Gifs.service";
import { GifList } from "../modules/gif-list/GifList";
import styles from './GifPage.module.scss';

export const GifPage = (): JSX.Element => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await getGifItems(offset);
      setData((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onLoadMore = () => {
    if (hasMore) {
      const newOffset = offset + 20;
      setOffset(newOffset);
    }
  };
  return (
    <Container className={styles.container}>
      <NavBar />
      <TopSearch />
      <header className="d-flex align-items-center">
        <FontAwesomeIcon icon={faChartLine} /> <h3 className="h4 px-3">Trending Gifs</h3>
      </header>
      <GifList
        gifList={{ data: data }}
        onLoadMore={onLoadMore}
        hasMoreItems={hasMore}
      />
    </Container>
  );
};
