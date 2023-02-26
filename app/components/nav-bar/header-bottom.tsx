import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  InboxIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import CustomPopover from "./popover";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchBar from "./searchBar";
import { ExpandMore } from "@mui/icons-material";

const navItems = [
  {
    name: "Pharmacy & Personal Care",
  },
  {
    name: "Specialties Products",
  },
  {
    name: "Dental",
  },
  {
    name: "Imaging & Lab",
  },
  {
    name: "Medical Facilities",
  },
  {
    name: "  Rehabilitation & Wellness",
  },
  {
    name: "Consumables & Clothing",
  },
  {
    name: "Dental Student",
  },
];

export default function BottomHeader() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(!openDrawer);
    };

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation" onKeyDown={toggleDrawer()}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
  return (
    <Popover className="relative bg-white md:border-t-4 md:border-custom-yellow shadow-md">
      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
      <div className="mx-auto max-w-7xl md:px-6">
        <div className="flex items-center justify-between  md:justify-start md:space-x-10">
          <div className=" md:hidden flex flex-row w-full justify-center bg-custom-primary pb-6">
            <Button
              className="inline-flex bg-custom-sub-main items-center justify-center  text-white hover:text-gray-500"
              onClick={() => setOpenDrawer(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
            <SearchBar />
          </div>
          <Popover.Group as="nav" className="hidden gap-x-5 md:flex">
            {navItems.map((item) => (
              <Fragment key={item.name}>
                <CustomPopover title={item.name} />
                <Divider flexItem orientation="vertical" />
              </Fragment>
            ))}
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
