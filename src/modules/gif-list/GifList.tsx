import InfiniteScroll from "react-infinite-scroll-component";
import Row from "react-bootstrap/Row";

import { GifItem } from "../../modules/gif-list/gif-item";
import { GifListProps } from "./GifList.type";
import { Loader } from "../../components/loader";
import { useWindowDimensions } from "../../utils/getScreenSize";
import {
  LARGE_SCREEN_COL,
  MEDIUM_SCREEN_COL,
  SMALL_SCREEN_COL,
} from "../../constants/variables";

export const GifList = ({
  gifList,
  onLoadMore,
  hasMoreItems = false,
}: GifListProps): JSX.Element => {
  const { colNum } = useWindowDimensions();
  console.log(gifList);
  return (
    <InfiniteScroll
      dataLength={gifList.length}
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
        xs={SMALL_SCREEN_COL}
        className="g-2"
        data-testid="gif-list"
      >
        {Array.from(Array(colNum).keys()).map((col) => (
          <div key={col}>
            {gifList.map((card, index) => {
              console.log("card la ", card);
              return (
                index % colNum === col && (
                  <GifItem
                    id={card.id}
                    key={`col-${col}`}
                    title={card.title}
                    imageSrc={card.images?.fixed_height_downsampled.url}
                    username={card.username}
                  />
                )
              );
            })}
          </div>
        ))}
      </Row>
    </InfiniteScroll>
  );
};
