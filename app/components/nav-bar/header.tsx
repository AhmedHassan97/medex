import Logo from "@/svgs/logo";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  HeartIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Badge, Divider, Tooltip } from "@mui/material";
import { Fragment } from "react";
import IconsButton from "./icons-button";
import SearchBar from "./searchBar";

import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import BottomHeader from "./header-bottom";
import CustomCarousel from "../carousel/carousel";

const useStyles = makeStyles(
  createStyles({
    iconsRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "20%",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#28527a",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-row items-center justify-between py-6  w-full">
          <div className="flex justify-start ">
            <a href="#">
              <Logo />
            </a>
          </div>

          <div className="hidden md:flex">
            <SearchBar />
          </div>

          <div className={classes.iconsRow}>
            <IconsButton
              hoveredIcon={
                <Tooltip title="Add" placement="bottom">
                  <UserIcon
                    width={28}
                    height={28}
                    color="#22b0f0"
                    fill="#22b0f0"
                  />
                </Tooltip>
              }
              unHoveredIcon={
                <UserIcon width={28} height={28} color="#22b0f0" />
              }
              title="profile"
            />
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#5b7084",
              }}
            />
            <IconsButton
              hoveredIcon={
                <HeartIcon
                  color="#22b0f0"
                  fill="#22b0f0"
                  width={28}
                  height={28}
                />
              }
              unHoveredIcon={
                <HeartIcon color="#22b0f0" width={28} height={28} />
              }
              title="Favorite"
            />
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#5b7084",
              }}
            />

            <IconsButton
              hoveredIcon={
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon
                    color="#f9ba32"
                    fill="#f9ba32"
                    width={28}
                    height={28}
                  />
                </Badge>
              }
              unHoveredIcon={
                <ShoppingCartIcon color="#f9ba32" width={28} height={28} />
              }
              title="Cart"
            />
          </div>
        </div>
      </div>

      <BottomHeader />
    </div>
  );
}
