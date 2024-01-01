import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

import {
  ArrowLeft,
  ArrowRight,
  BigImage,
  MainContainer,
  SliderBox,
  SmallImage,
} from "./ImageSlider.styles";
import { Fade } from "@mui/material";
import { ProductType } from "~/static/types";

const settings: Settings = {
  arrows: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
};

const ImageSlider: React.FC<ProductType> = (product) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.photos[0]);

  const isSelectedImage = (selected: boolean) => {
    return selected ? {} : { opacity: 0.6 };
  };

  return (
    <MainContainer>
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
          {product.photos.length > 1 &&
            product.photos.map((img, i) => {
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
    </MainContainer>
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
