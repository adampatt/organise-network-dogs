import React from "react";
import "./SavedPhotos.css";

export default function SavedPhotos(props) {
  const { savedPhotos } = props;

  return (
    <div className="SavedPhotos">
      <div className="SavedPhotos-saved">
        <h2>Saved Photos ⭐</h2>
        <div className="SavedPhotos-photos">
          {savedPhotos.map((s) => (
            <img src={s} key={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
