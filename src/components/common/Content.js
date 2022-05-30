import Hero from "./Hero";

function Content() {
  return (
    <div className="content">
      <Hero />

      <div className="container">
        <div className="card-listing">
          <div className="cards grid grid--columns-3">
            <p>Card 1</p>
            <p>Card 2</p>
            <p>Card 3</p>
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
