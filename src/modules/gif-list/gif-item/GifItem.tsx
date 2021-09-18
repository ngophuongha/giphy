import Card from "react-bootstrap/Card";
import { Fragment, useState } from "react";
import { GifProps } from "./GifItem.type";
import { GifFullscreen } from "../gif-fullscreen/GifFullscreen";

export const GifItem = ({
  id,
  imageSrc,
  //   title,
  username,
}: //   rating,
GifProps): JSX.Element => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(true);
  const close = () => setShow(false);
  return (
    <Fragment>
      <Card
        style={{ width: "18rem", cursor: "pointer" }}
        id={id}
        data-testid={1}
        className="border-0 overflow-hidden"
        onClick={toggle}
      >
        <img alt="" src={imageSrc} />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <p className="card-text text-white">{username}</p>
        </div>
      </Card>
      <GifFullscreen open={show} setShow={close} imageUrl={imageSrc} />
    </Fragment>
  );
};
