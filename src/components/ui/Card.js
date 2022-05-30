import Button from "./Button";

function Card(props) {
  const { buttonText, title, description } = props;
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
      <div className="imageContainer">
        <img
          src="https://picsum.photos/400?random=1"
          alt="Random Lorem Picsum"
        />
      </div>
      <div className="card__actions">
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}

export default Card;
