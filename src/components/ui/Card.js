import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">Title</div>
        <div className="card__description">Description</div>
      </div>
      <div className="imageContainer">
        <img
          src="https://picsum.photos/400?random=1"
          alt="Random Lorem Picsum"
        />
      </div>
      <div className="card__actions">
        <Button />
      </div>
    </div>
  );
}

export default Card;
