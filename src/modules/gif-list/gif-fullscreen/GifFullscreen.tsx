import { Modal } from "react-bootstrap";
import { GifFullscreenProps } from "./GifFullscreen.type";

export const GifFullscreen = ({
  open,
  setShow,
  imageUrl,
  imageAlt = "gif-alt",
}: GifFullscreenProps): JSX.Element => {
  return (
    <Modal
      dialogClassName="modal-45w"
      aria-labelledby="contained-modal-title-vcenter"
      data-testid="gif-fullscreen"
      centered
      show={open}
      onHide={setShow}
    >
      <img alt={imageAlt} src={imageUrl} />
    </Modal>
  );
};
