import { useState } from "react";
import Button from "../ui/Button";

function Hero(props) {
  const { title, description, buttonText } = props;
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="hero">
      <div className="hero__title">{title}</div>
      <div className="hero__description">
        {counter === 0
          ? description
          : `You clicked the button ${counter} ${
              counter === 1 ? "time" : "times"
            }.`}
      </div>
      <div className="hero__button">
        <Button size="large" variant="dark" onClick={updateCounter}>
          {buttonText}
        </Button>
        {counter > 0 && (
          <Button
            className="ml-10"
            variant="dark"
            size="large"
            onClick={resetCounter}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}

export default Hero;
