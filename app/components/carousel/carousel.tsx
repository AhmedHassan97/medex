import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagesArray = Array(8).fill({
  src: "https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80",
  id: nanoid(),
});
export default function CustomCarousel() {
  return (
    <div
      className="max-w-7xl mx-auto  relative h-screen"
      style={{
        height: 500,
        marginTop: 20,
      }}
    >
      <Carousel
        showThumbs
        swipeable
        autoPlay
        emulateTouch
        showArrows
        renderArrowNext={(handler, hasNext) =>
          hasNext && (
            <Button
              onClick={handler}
              className="absolute right-0 -bottom-10 z-auto"
            >
              <ArrowRightIcon />
            </Button>
          )
        }
        renderIndicator={() => <></>}
        renderThumbs={(children) => {
          return children.map((child, index) => (
            <div key={child.toString()}>{child}</div>
          ));
        }}
      >
        {imagesArray.map((image) => (
          <img src={image.src} key={image.id} />
        ))}
      </Carousel>
      <div
        style={{
          borderWidth: 3,
          borderTop: 3,
          borderBottom: 0,
          borderStyle: "solid",
          borderImage:
            "linear-gradient( to left, rgb(255, 255, 255), #f9ba32, #f9ba32, rgb(255, 255, 255) ) 100% 1",
        }}
      ></div>
    </div>
  );
}
