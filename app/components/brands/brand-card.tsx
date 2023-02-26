import { HeartIcon } from "@heroicons/react/24/outline";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import React from "react";

export default function BrandCard({ imageSrc }: { imageSrc: string }) {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className="flex flex-col justify-center">
      <div
        style={{
          alignSelf: "center",
        }}
      >
        <img src={imageSrc} className="rounded-full w-32 h-32" />
      </div>
      <h3 className="text-center text-white mt-2">Mocom</h3>
    </div>
  );
}
