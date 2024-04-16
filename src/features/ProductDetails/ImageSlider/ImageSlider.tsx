import React, { useEffect, useState } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";

import {
  ArrowLeft,
  ArrowRight,
  BigImage,
  FadingImageBox,
  MainContainer,
  SliderBox,
  SmallImage,
} from "./ImageSlider.styles";
import { Fade } from "@mui/material";
import { ProductType } from "~/static/types";

const settings: Settings = {
  arrows: true,
  prevArrow: <LeftArrowCustom />,
  nextArrow: <RightArrowCustom />,
  infinite: false,
};

const ImageSlider: React.FC<ProductType> = (product) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.photos[0]);

  const isSelectedImage = (selected: boolean) => {
    return selected ? {} : { opacity: 0.6 };
  };

  return (
    <MainContainer>
      <FadingImageBox>
        <FadingImage newSrc={selectedImg} />
      </FadingImageBox>
      <SliderBox>
        <Slider slidesToShow={3} swipeToSlide={false} {...settings}>
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
// this clears console error that appear when using custom arrows
function LeftArrowCustom({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) {
  return (
    <ArrowLeft
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 || !slideCount ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      {...props}
    />
  );
}

function RightArrowCustom({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) {
  if (!slideCount) {
    slideCount = 0;
  }

  return (
    <ArrowRight
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      {...props}
    />
  );
}
export default ImageSlider;
