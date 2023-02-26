import { Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import NotableProduct from "./notable-card";
import { ChevronLeft } from "@mui/icons-material";

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    id: nanoid(),
  },
];

var settings = {
  dots: false,
  slidesToShow: 3,
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

export default function NotableProducts() {
  return (
    <div className="max-w-7xl mx-auto  my-20">
      <Typography
        fontSize={28}
        className="text-custom-primary font-bold mr-0 pt-6"
      >
        Notable Products
      </Typography>
      <div className="max-w-7xl mx-auto py-12">
        <Slider {...settings} rows={2} arrows={false}>
          {images.map((slide, index) => {
            return (
              <div key={slide.id} className="w-full mx-auto">
                <NotableProduct imageSrc={slide.image} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
