import Button from "../ui/Button";

function Hero(props) {
  const { title, description, buttonText } = props;
  return (
    <div className="hero">
      <div className="hero__title">{title}</div>
      <div className="hero__description">{description}</div>
      <div className="hero__button">
        <Button size="large" variant="dark">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Hero;
