import React from "react";
import "./App.css";

const data = {
  image: "https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3",
  cardTitle: "Dave Grohl",
  cardDescription: "David Eric Grohl (born January 14, 1969) is an American singer, songwriter, musician and ... guest for a concert at the Anfield football stadium in Liverpool, in one of the central events of the English city's year as European Capital of Culture.",
  button: {
    url: "https://en.wikipedia.org/wiki/Dave_Grohl",
    label: "Go to wikipedia"
  }
};

const App = () => {
  return (
    <div class="card m-5">
      <img class="card-img-top" src="http://d1lofqbqbj927c.cloudfront.net/PY-rqp/2019/12/27163934/Nirvana-on-SNL-1993-billboard-1548-300x200.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default App;
