import { Divider, Typography } from "@mui/material";
import { nanoid } from "nanoid";

export default function AboutUs() {
  return (
    <div className=" py-8 flex md:flex-row flex-col md:ml-0 ml-2 ">
      <div className="">
        <Typography fontSize={24} color="#484848">
          About
        </Typography>
        <div className="flex items-center flex-row  ">
          <Typography fontSize={24} color="#484848">
            us
          </Typography>
          <div className="bg-custom-sub-main mt-2 h-3 w-16 ml-1" />
        </div>
      </div>
      <div className="md:ml-16">
        <Typography color={"#808080"}>
          MedexSepeti is the largest online medical marketplace in Turkey and
          the Middle East. We connect medical staff with vendors to provide the
          ultimate and the most reliable shopping experience, to diminish any
          effort or hassle the buyer can go through in the shopping process.
          Browse and select your preferred products, add them to your cart,
          checkout and leave the rest for us to deliver your orders easily.
          MedexSepeti is an online medical marketplace with web interface and
          mobile applications, serving medical staff from all over Turkey
        </Typography>
      </div>
    </div>
  );
}
