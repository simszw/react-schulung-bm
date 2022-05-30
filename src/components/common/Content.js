import Card from "../ui/Card";
import Hero from "./Hero";

function Content() {
  return (
    <div className="content">
      <Hero />

      <div className="container">
        <div className="card-listing">
          <div className="cards grid grid--columns-3">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="card-listing__actions">
            <p>Button "Add Card"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
