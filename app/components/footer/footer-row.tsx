import { Box, Divider, Typography } from "@mui/material";

import AboutUs from "./about-us";

type FooterRowProps = {
  title: string;
  rows: Array<string>;
};
export default function FooterRow({ title, rows }: FooterRowProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography fontSize={14} fontWeight={"600"} mb={1}>
        {title.slice(0, 1).toUpperCase() + title.slice(1, -1)}
      </Typography>
      {rows.map((row) => (
        <Typography color={"#929292"} fontSize={12} my={1} key={row}>
          {row}
        </Typography>
      ))}
    </Box>
  );
}
