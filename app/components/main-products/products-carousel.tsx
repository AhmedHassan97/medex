import { Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import ProductCard from "./product-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
const generateItems = (itemsNumber: number) =>
  Array(itemsNumber).fill({
    image:
      "https://plus.unsplash.com/premium_photo-1667870034632-134c46ef9a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    id: nanoid(),
  });

const settings = {
  dots: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

type ProductsCarouselProps = {
  title: string;
  itemsNumber: number;
  itemsToShow: number;
};

export default function ProductsCarousel({
  title,
  itemsNumber,
  itemsToShow,
}: ProductsCarouselProps) {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <Typography fontSize={28} className="text-custom-primary mb-4">
        {title}
      </Typography>
      <Slider {...settings} arrows={false} slidesToShow={itemsToShow}>
        {generateItems(itemsNumber).map((slide, index) => {
          return (
            <div key={slide.id}>
              <ProductCard imageSrc={slide.image} itemsToShow={itemsToShow} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
