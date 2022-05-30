import { useState } from "react";
import { getRandomImageUrl } from "../../utils/ImageHelper";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Hero from "./Hero";

const INITIAL_CARDS = [
  {
    id: 0,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
  {
    id: 1,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
  {
    id: 2,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
];

function Content() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const addCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length,
        title: "Image Card",
        description: "Lorem Ipsum Dolor Sit Amet.",
        buttonText: "Refresh",
        imageUrl: getRandomImageUrl(),
      },
    ]);
  };

  return (
    <div className="content">
      <Hero
        title="Click Counter"
        description="Click the button to count the clicks"
        buttonText="Click me!"
      />

      <div className="container">
        <div className="card-listing">
          <div className="cards grid grid--columns-3">
            {cards.map((card, idx) => (
              <Card
                key={card.id}
                buttonText={card.buttonText}
                title={`${card.title} ${idx + 1}`}
                description={card.description}
              />
            ))}
          </div>
          <div className="card-listing__actions">
            <Button onClick={addCard}>Add Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
