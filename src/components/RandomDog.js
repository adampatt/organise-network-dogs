import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomDog.css";

export default function RandomDog(props) {
  const { addToFav } = props;
  const [randomDogUrl, setRandomDogUrl] = useState("");

  const fetchDogImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setRandomDogUrl(res.data.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="RandomDog">
      <h2 className="RandomDog-title">Random Dogs 🔄</h2>
      <img className="RandomDog-image" src={randomDogUrl} />
      <p>
        <button
          className="RandomDog-button"
          onClick={() => {
            addToFav(randomDogUrl);
          }}>
          Save Image
        </button>
        <button
          className="RandomDog-button"
          onClick={() => {
            fetchDogImage();
          }}>
          Next Dog
        </button>
      </p>
    </div>
  );
}
