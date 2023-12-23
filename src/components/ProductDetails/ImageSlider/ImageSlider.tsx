import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

import {
  ArrowLeft,
  ArrowRight,
  BigImage,
  SliderBox,
  SmallImage,
} from "./ImageSlider.styles";
import { Fade } from "@mui/material";

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
];

const ImageSlider: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string>(images[0]);

  const isSelectedImage = (selected: boolean) => {
    return selected ? {} : { opacity: 0.6 };
  };

  return (
    <div>
      <div style={{ height: 500, display: "flex", alignItems: "center" }}>
        <FadingImage newSrc={selectedImg} />
      </div>
      <SliderBox>
        <Slider
          slidesToShow={3}
          swipeToSlide={false}
          // focusOnSelect={true}
          {...settings}
        >
          {images.map((img, i) => {
            const selected: boolean = selectedImg === img;
            return (
              <SmallImage
                sx={isSelectedImage(selected)}
                onClick={() => setSelectedImg(img)}
                key={i}
                src={img}
              />
            );
          })}
        </Slider>
      </SliderBox>
    </div>
  );

  function FadingImage({ newSrc }: { newSrc: string }) {
    const [visible, setVisible] = useState(true);
    const [src, setSrc] = useState("");

    useEffect(() => {
      setVisible(false);

      setTimeout(() => {
        setSrc(newSrc);
        setVisible(true);
      }, 40);
    }, [newSrc]);

    return (
      <Fade in={visible}>
        <BigImage src={src} alt="missing" />
      </Fade>
    );
  }
};

export default ImageSlider;
