import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GifItem } from "../../modules/gif-list/gif-item/GifItem";
import { GifListProps } from "./GifList.type";
import { Loader } from "../../components/loader";
import styles from "./GifList.module.scss";

const LARGE_SCREEN_COL = 4;
const MEDIUM_SCREEN_COL = 3;
const SMALL_SCREEN_COL = 2;

export const GifList = ({
  gifList,
  onLoadMore,
  hasMoreItems = false,
}: GifListProps): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={gifList.data.length}
      next={onLoadMore}
      hasMore={hasMoreItems}
      loader={<Loader />}
      className="overflow-hidden"
      scrollThreshold={1}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Row
        lg={LARGE_SCREEN_COL}
        md={MEDIUM_SCREEN_COL}
        sm={SMALL_SCREEN_COL}
        className={`g-2 ${styles["custom-row"]}`}
        data-testid="gif-list"
      >
        {gifList.data.map((card, index) => (
          <LazyLoad key={index} offset={[-50, 100]} placeholder={<Loader />}>
            <Col
              key={index}
              className={`d-flex img-fluid ${styles["custom-column"]}`}
            >
              <GifItem
                id={card.id}
                imageSrc={card.images.fixed_width_downsampled.url}
                title={card.title}
                username={card.username}
                rating={card.rating}
              />
            </Col>
          </LazyLoad>
        ))}
      </Row>
    </InfiniteScroll>
  );
};
