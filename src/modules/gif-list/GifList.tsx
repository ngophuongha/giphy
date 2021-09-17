import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GifItem } from "../../modules/gif-list/gif-item/GifItem";
import { GifListProps } from "./GifList.type";
import { Loader } from "../../components/loader";

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
      <Row lg={4} md={3} sm={2} className="g-2" data-testid="gif-list">
        {gifList.data.map((card, index) => (
          <LazyLoad key={index} offset={[-50, 100]} placeholder={<Loader />}>
            <Col key={index} className="d-flex img-fluid">
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
