import Button from "../ui/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__title">Click Counter</div>
      <div className="hero__description">
        Click the button to count the clicks.
      </div>
      <div className="hero__button">
        <Button />
      </div>
    </div>
  );
}

export default Hero;
