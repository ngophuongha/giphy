import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import Row from "react-bootstrap/Row";

import { GifItem } from "../../modules/gif-list/gif-item";
import { GifListProps } from "./GifList.type";
import { Loader } from "../../components/loader";
import { useWindowDimensions } from "../../utils/getScreenSize";

const LARGE_SCREEN_COL = 4;
const MEDIUM_SCREEN_COL = 3;
const SMALL_SCREEN_COL = 2;

export const GifList = ({
  gifList,
  onLoadMore,
  hasMoreItems = false,
}: GifListProps): JSX.Element => {
  const { colNum } = useWindowDimensions();

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
        xl={LARGE_SCREEN_COL}
        md={MEDIUM_SCREEN_COL}
        sm={SMALL_SCREEN_COL}
        xs={SMALL_SCREEN_COL}
        className="g-2"
        data-testid="gif-list"
      >
        {Array.from(Array(colNum).keys()).map((col) => (
          <div>
            {gifList.data.map(
              (card, index) =>
                index % colNum === col && (
                  <LazyLoad data-testid="lazy-load">
                    <GifItem
                      id={card.id}
                      imageSrc={card.images.fixed_height_downsampled.url}
                      username={card.username}
                    />
                  </LazyLoad>
                )
            )}
          </div>
        ))}
      </Row>
    </InfiniteScroll>
  );
};
