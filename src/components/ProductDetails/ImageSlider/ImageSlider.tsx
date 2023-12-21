import React, { useState } from "react";
import Slider, { Settings } from "react-slick";

import {
  ArrowLeft,
  ArrowRight,
  BigImage,
  SlideBox,
  SmallImage,
} from "./ImageSlider.styles";

const settings: Settings = {
  arrows: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
};

const images: string[] = [
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/vqcolsypaovjkbtj7hpx.jpg",
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/n13paavpltdc1wsxxflp.jpg",
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/gmkysq7wji1uivilanmn.jpg",
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/riywvyq4i8bfqrcqqi8i.jpg",
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/riywvyq4i8bfqrcqqi8i.jpg",
  "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/riywvyq4i8bfqrcqqi8i.jpg",
];

const ImageSlider: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string>(images[0]);

  return (
    <div>
      <BigImage src={selectedImg} alt="missing" />

      <Slider
        slidesToShow={4}
        // swipeToSlide={true}
        // focusOnSelect={true}
        {...settings}
      >
        {images.map((img, i) => {
          return (
              <SmallImage
                onClick={() => setSelectedImg(img)}
                key={i}
                src={img}
              />
            );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
