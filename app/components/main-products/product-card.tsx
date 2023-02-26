import { HeartIcon } from "@heroicons/react/24/outline";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import React from "react";

export default function ProductCard({
  imageSrc,
  itemsToShow,
}: {
  imageSrc: string;
  itemsToShow: number;
}) {
  const [value, setValue] = React.useState<number | null>(2);
  const [heartClosed, setHeartClose] = React.useState(false);
  return (
    <div
      className=" bg-white rounded-lg shadow "
      style={{
        border: "2px solid #f2f2f2",
        margin: "0 10px 0 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "white",
            borderRadius: 15,
            padding: 5,
            marginTop: 10,
          }}
          className="shadow-lg shadow-gray-500"
          onMouseEnter={() => setHeartClose(true)}
          onMouseLeave={() => setHeartClose(false)}
        >
          <HeartIcon
            width={20}
            height={20}
            fill={heartClosed ? "black" : "white"}
          />
        </div>
      </div>
      <Box>
        <img height={220} className="rounded-t-lg" src={imageSrc} />
      </Box>
      <div className="p-5">
        <Rating
          value={value}
          size="small"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <h3 className="mb-3 text-gray-900">Lorem Ipsum</h3>
        <h3 className="bg-custom-yellow w-fit rounded-3xl px-3 font-semibold text-sm mt-10 mb-4 ">
          Pro
        </h3>
      </div>
    </div>
  );
}
