import EmptyProfile from "@/svgs/emptyProfile";
import Profile from "@/svgs/profile";
import SearchIcon from "@/svgs/search";
import { Button, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { type } from "os";
import { title } from "process";
import React, { useState } from "react";

const useStyles = makeStyles(
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 50,
    },

    searchInput: {
      outlineColor: "#f9ba32",
      width: 382,
      padding: 9,
    },
  })
);

type IconsButtonProps = {
  unHoveredIcon: React.ReactElement;
  hoveredIcon: React.ReactNode;
  title: string;
};
export default function IconsButton({
  hoveredIcon,
  unHoveredIcon,
  title,
}: IconsButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? hoveredIcon : unHoveredIcon}
      <Typography fontSize={10} color="white" textAlign="center">
        {title}
      </Typography>
    </div>
  );
}
