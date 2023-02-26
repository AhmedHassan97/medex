import { Box, Divider } from "@mui/material";
import { nanoid } from "nanoid";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutUs from "./about-us";
import FooterRow from "./footer-row";
import { faker } from "@faker-js/faker";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const footerColumns = [
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
  {
    title: faker.internet.domainWord(),
    id: nanoid(),
    rows: Array(randomIntFromInterval(5, 8)).fill(faker.name.jobType()),
  },
];

export default function Footer() {
  return (
    <div
      className="max-w-7xl mx-auto"
      style={{
        backgroundColor: "#fcfcfc",
      }}
    >
      <AboutUs />
      <Divider light />

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        mt={4}
        justifyContent={"space-between"}
        width="100%"
      >
        {footerColumns.map((col) => (
          <FooterRow title={col.title} rows={col.rows} key={col.id} />
        ))}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        height={50}
        bgcolor={"white"}
        my={10}
      >
        <img
          width={"7%"}
          src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
        />
        <img
          width={"7%"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/1280px-Former_Visa_%28company%29_logo.svg.png"
        />
        <img
          width={"7%"}
          src="http://xeltis.com/wp-content/uploads/2022/11/Axess-Pivotal-logo-white-background.png"
        />
        <img
          width={"7%"}
          src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
        />
        <img
          width={"7%"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/1280px-Former_Visa_%28company%29_logo.svg.png"
        />
        <img
          width={"7%"}
          src="http://xeltis.com/wp-content/uploads/2022/11/Axess-Pivotal-logo-white-background.png"
        />
        <img
          width={"7%"}
          src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
        />
        <img
          width={"7%"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/1280px-Former_Visa_%28company%29_logo.svg.png"
        />
        <img
          width={"7%"}
          src="http://xeltis.com/wp-content/uploads/2022/11/Axess-Pivotal-logo-white-background.png"
        />
      </Box>
    </div>
  );
}
