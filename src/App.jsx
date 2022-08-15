import React, { useState } from "react";
import "./App.css";
import CardFront from "./components/card-front/CardFront";
import CardBack from "./components/card-back/CardBack";
import CardForm from "./components/card-details-form/CardForm";
import Complete from "./components/complete/Complete";

const App = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="wrapper">
      <div className="card-details-form">
        <div className="card-pictures">
          <CardFront />
          <CardBack />
        </div>
        {!completed ? (
          <CardForm onComplete={() => setCompleted(true)} />
        ) : (
          <Complete />
        )}
      </div>
    </div>
  );
};

export default App;
