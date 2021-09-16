import Card from "react-bootstrap/Card";
import { GifProps } from "./GifItem.type";

export const GifItem = ({
  id,
  imageSrc,
  title,
  username,
  rating,
}: GifProps): JSX.Element => {
  return (
    <Card style={{ width: "18rem" }} id={id} className="border-0 overflow-hidden">
      <img alt="" src={imageSrc} />
      <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
        <p className="card-text text-white">{username}</p>
      </div>
    </Card>
  );
};
