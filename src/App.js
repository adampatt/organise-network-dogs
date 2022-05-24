import React, { useState } from "react";
import SavedPhotos from "./components/SavedPhotos";
import RandomDog from "./components/RandomDog";

import "./App.css";

export default function App() {
  const [savedPhotos, setSavedPhotos] = useState([]);

  const addDogToSavedPhotos = (data) => {
    setSavedPhotos(savedPhotos.includes(data) ? savedPhotos : [...savedPhotos, data]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs! 🐶</h1>
      </header>
      <RandomDog addToFav={addDogToSavedPhotos} />
      <SavedPhotos savedPhotos={savedPhotos} />
    </div>
  );
}
