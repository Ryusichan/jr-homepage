import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Menu from "../library/menu";
import { Apps, DesktopWindows, MoreHoriz, Brush } from "@mui/icons-material";
import styled from "styled-components";

const ImageContainer = styled(Stack)`
  flex-wrap: wrap;
`;

const ImageList = styled.div`
  margin: 4px;
  width: 180px;
  height: 180px;
  img {
    width: 100%;
    height: auto;
  }
`;

const tabArray = [
  { label: "전체", icon: <Apps />, value: "full" },
  { label: "WEB", icon: <DesktopWindows />, value: "web" },
  { label: "Sub Page", icon: <MoreHoriz />, value: "subPage" },
  { label: "Art Work", icon: <Brush />, value: "artWork" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MainResponsiveGallery = () => {
  const [value, setValue] = React.useState("full");
  const [items, setItems] = React.useState(Menu);
  const [active, setActive] = React.useState(false);
  const filterItem = (categItem: string) => {
    const updateItems = Menu.filter((curElem: any) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  console.log(items);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    setActive(true);

    if (newValue === "full") {
      setItems(Menu);
      setActive(false);
    } else {
      filterItem(newValue);
    }
  };

  const handleChangeIndex = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack id="portfolio">
      <Typography variant="h3" component="h3">
        Work
      </Typography>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {tabArray.map((tab: any, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            value={tab.value}
            sx={{
              backgroundColor: `${tab.value === value ? "#7162D7" : undefined}`,
              color: `${tab.value === value ? "#fff!important" : undefined}`,
              borderRadius: "18px",
              padding: "36px 24px",
              maxWidth: "180px",
              "& > span": {
                marginBottom: "1rem!important",
              },
            }}
          />
        ))}
      </Tabs>
      <ImageContainer direction={"row"}>
        {items.map((elem: any) => {
          const { id, name, image } = elem;

          return (
            <ImageList key={`${name}_${id}`} id={id}>
              <img
                src={image}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={name}
                loading="lazy"
              />
            </ImageList>
          );
        })}
      </ImageContainer>
    </Stack>
  );
};

export default MainResponsiveGallery;
