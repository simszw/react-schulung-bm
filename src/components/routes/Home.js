import { useState } from "react";
import { getRandomImageUrl } from "../../utils/ImageHelper";
import Hero from "../common/Hero";
import Card from "../ui/Card";
import Button from "../ui/Button";

const MAX_CARDS = 6;

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

function Home() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const addCard = () => {
    if (cards.length === MAX_CARDS) {
      alert(`You can only add ${MAX_CARDS} cards.`);
      return;
    }

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

  const deleteCard = (cardId) => {
    const filteredCards = cards.filter((card) => card.id !== cardId);
    setCards(filteredCards);
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
          <div className="card-listing__info">
            {cards.length} {cards.length === 1 ? "image" : "images"} found
          </div>
          {cards.length > 0 ? (
            <div className="cards grid grid--columns-3">
              {cards.map((card, idx) => (
                <Card
                  key={card.id}
                  buttonText={card.buttonText}
                  title={`${card.title} ${idx + 1}`}
                  description={card.description}
                  onDelete={() => deleteCard(card.id)}
                />
              ))}
            </div>
          ) : (
            <div>
              <h1>No Cards</h1>
              <p>Lorem Ipsum Dolor Sit Amet.</p>
            </div>
          )}
          <div className="card-listing__actions">
            <Button onClick={addCard}>Add Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
