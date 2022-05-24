import React, { useEffect, useState } from "react";
import { DogApi } from "../services/axios.services";
import "./RandomDog.css";

export default function RandomDog(props) {
  const { addToFav } = props;
  const [randomDogUrl, setRandomDogUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDogImage = () => {
    DogApi.get("/image/random")
      .then((res) => setRandomDogUrl(res.data.message))
      .then(setLoading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="RandomDog">
      <h2 className="RandomDog-title">Random Dogs 🔄</h2>
      {loading ? (
        <p>Your random dog image is loading</p>
      ) : (
        <img className="RandomDog-image" src={randomDogUrl} />
      )}
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
