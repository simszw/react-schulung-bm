import Button from "../ui/Button";
import Card from "../ui/Card";
import Hero from "./Hero";

function Content() {
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
            <Card
              buttonText="Update Image"
              title="Image 1"
              description="Lorem Ipsum Dolor Sit Amet."
            />
            <Card
              buttonText="Update Image"
              title="Image 2"
              description="Lorem Ipsum Dolor Sit Amet."
            />
            <Card
              buttonText="Update Image"
              title="Image 3"
              description="Lorem Ipsum Dolor Sit Amet."
            />
          </div>
          <div className="card-listing__actions">
            <Button size="large">Add Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
