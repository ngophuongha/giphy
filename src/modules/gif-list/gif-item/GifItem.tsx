import { useState } from "react";

import LazyLoad from "react-lazyload";
import { LazyLoader } from "../../../components/loader";
import { GifProps } from "./GifItem.type";
import { GifFullscreen } from "../gif-fullscreen";
import { StyledCard } from "./GifItem.styled";

export const GifItem = ({
  id,
  imageSrc,
  username,
  title,
}: GifProps): JSX.Element => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <LazyLoad data-testid="lazy-load" placeholder={<LazyLoader />}>
      <StyledCard
        id={id}
        data-testid={1}
        className="border-0 overflow-hidden mt-2"
        onClick={toggle}
        style={{ cursor: "pointer" }}
      >
        <img alt={title} src={imageSrc} className="overflow-hidden" />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <p className="card-text text-white">{username}</p>
        </div>
      </StyledCard>
      <GifFullscreen
        open={show}
        setShow={toggle}
        imageUrl={imageSrc}
        imageAlt={title}
      />
    </LazyLoad>
  );
};
