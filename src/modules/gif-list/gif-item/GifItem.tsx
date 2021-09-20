import Card from "react-bootstrap/Card";
import { Fragment, useState } from "react";
import { GifProps } from "./GifItem.type";
import { GifFullscreen } from "../gif-fullscreen";

export const GifItem = ({ id, imageSrc, username }: GifProps): JSX.Element => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(true);
  const close = () => setShow(false);
  return (
    <Fragment>
      <Card
        id={id}
        data-testid={1}
        className="border-0 overflow-hidden mt-2"
        onClick={toggle}
      >
        <img alt="" src={imageSrc} className='overflow-hidden' />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <p className="card-text text-white">{username}</p>
        </div>
      </Card>
      <GifFullscreen open={show} setShow={close} imageUrl={imageSrc} />
    </Fragment>
  );
};
