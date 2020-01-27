import React from "react";
import "./App.css";

const data = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3",
  cardTitle: "Dave Grohl",
  cardDescription:
    "David Eric Grohl (born January 14, 1969) is an American singer, songwriter, musician and ... guest for a concert at the Anfield football stadium in Liverpool, in one of the central events of the English city's year as European Capital of Culture.",
  button: {
    url: "https://en.wikipedia.org/wiki/Dave_Grohl",
    label: "Go to wikipedia"
  }
};

const App = () => {
  return (
    <div class="card m-5">
      <img class="card-img-top" src={data.image} />
      <div class="card-body">
        <h5 class="card-title">{data.cardTitle}</h5>
        <p class="card-text">{data.cardDescription}</p>
        <a href="#" class="btn btn-primary">
          {data.button.label}
        </a>
      </div>
    </div>
  );
};

export default App;
