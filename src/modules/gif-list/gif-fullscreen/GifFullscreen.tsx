import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import { GifFullscreenProps } from "./GifFullscreen.type";

export const GifFullscreen = ({
  open,
  setShow,
  imageUrl,
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
      <ModalHeader closeButton></ModalHeader>
      <img alt="img" src={imageUrl} />
    </Modal>
  );
};
