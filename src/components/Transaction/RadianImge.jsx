import React from "react";
import Image from "./Image";

const images = [
  "https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg",
  "https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg",
  "https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg",
  "https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg",
  "https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg",
];

function RadiusImage() {
  return (
    <div className="relative">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          style={{
            position: "absolute",
            top: 0,
            right: `${index * 2}rem`, // каждый следующий элемент будет на 1rem правее предыдущего
            zIndex: images.length - index,
          }}
        />
      ))}
    </div>
  );
}

export default RadiusImage;
