import { useEffect, useState } from "react";
import Button from "./Button";
import { getRandomImageUrl } from "../../utils/ImageHelper";

function Card(props) {
  const { title, description, buttonText, url, onDelete } = props;
  const [imageUrl, setImageUrl] = useState(url || null);

  useEffect(() => {
    if (!url) {
      updateImage();
    }
  }, []);

  const updateImage = () => {
    setImageUrl(getRandomImageUrl());
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
      <div className="imageContainer">
        <img src={imageUrl} alt="Random Lorem Picsum" />
      </div>
      <div className="card__actions">
        <Button onClick={updateImage}>{buttonText}</Button>
      </div>
    </div>
  );
}

export default Card;
