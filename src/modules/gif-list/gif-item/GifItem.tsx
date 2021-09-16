import Card from "react-bootstrap/Card";
import React, { Fragment, useCallback, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { GifProps } from "./GifItem.type";
import { GifFullscreen } from "../gif-fullscreen/GifFullscreen";

export const GifItem = ({
  id,
  imageSrc,
  title,
  username,
  rating,
}: GifProps): JSX.Element => {
  const handle = useFullScreenHandle();
  const [show, setShow] = useState(false);
  const toggle = () => {setShow(!show); console.log('show: ', show)};
  const close = () => setShow(false);
  return (
    <Fragment>
      <Card
        style={{ width: "18rem", cursor: "pointer" }}
        id={id}
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
