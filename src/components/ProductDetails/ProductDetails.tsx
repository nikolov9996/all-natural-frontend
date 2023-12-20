import { Grid } from "@mui/material";
import { Controller, EffectCube, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetails: React.FC = () => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        <Swiper
          style={{ maxWidth: 300, maxHeight: 300 }}
          effect={"cube"}
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCube, Pagination, Controller, Zoom]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        info
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        map
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
