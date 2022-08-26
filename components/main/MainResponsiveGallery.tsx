import {
  Box,
  Dialog,
  Modal,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Menu from "../library/menu";
import {
  Apps,
  DesktopWindows,
  MoreHoriz,
  Brush,
  Search,
} from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";
import DialogModal from "../DialogModal";

const ImageContainer = styled(Stack)`
  flex-wrap: wrap;
`;

const ImageList = styled.div`
  margin: 4px;
  width: 180px;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  > svg {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    width: 48px;
    height: 48px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    transition: transform 0.3s ease-in-out;
  }
  :hover {
    > svg {
      opacity: 1;
    }
    img {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`;

const tabArray = [
  { label: "전체", icon: <Apps />, value: "full" },
  { label: "WEB", icon: <DesktopWindows />, value: "web" },
  { label: "Sub Page", icon: <MoreHoriz />, value: "subPage" },
  { label: "Art Work", icon: <Brush />, value: "artWork" },
];

const MainResponsiveGallery = () => {
  const [value, setValue] = React.useState("full");
  const [items, setItems] = React.useState(Menu);
  const [active, setActive] = React.useState(false);
  const [openModal, setOpenmodal] = React.useState(false);
  const [name, setName] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");

  const filterItem = (categItem: string) => {
    const updateItems = Menu.filter((curElem: any) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  const handleClose = () => {
    setOpenmodal(false);
  };

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

  const handleSelectImg = ({ name, image }: any) => {
    setOpenmodal(true);
    setName(name);
    setImageSrc(image);

    console.log(name, image, "openModal:", openModal);
  };

  const handleChangeIndex = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack id="portfolio" sx={{ minHeight: "40rem" }}>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ mt: 4, mb: 8 }}
        >
          With Pluton
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="fullWidth"
            orientation={"vertical"}
            sx={{
              minWidth: { xs: "auto", md: "180px" },
              "& .MuiTabs-indicator": {
                transform: "scaleY(0.2)",
              },
              "& .MuiTabs-flexContainer": {
                flexDirection: { xs: "column", md: "row" },
              },
            }}
          >
            {tabArray.map((tab: any, index) => (
              <Tab
                key={index}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                value={tab.value}
                sx={{
                  backgroundColor: `${
                    tab.value === value ? "#7162D7" : undefined
                  }`,
                  color: `${
                    tab.value === value ? "#fff!important" : undefined
                  }`,
                  minHeight: "62px",
                  borderRadius: "12px",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  justifyContent: "flex-start",
                  padding: "12px 28px",
                  "& > svg": {
                    marginRight: "1rem!important",
                  },
                }}
              />
            ))}
          </Tabs>
          <ImageContainer direction={"row"}>
            {items.map((elem: any) => {
              const { id, name, image } = elem;

              return (
                <ImageList
                  key={`${name}_${id}`}
                  id={id}
                  onClick={() => {
                    handleSelectImg({ name, image });
                  }}
                >
                  <Image
                    src={image}
                    width={180}
                    height={180}
                    alt={name}
                    loading="lazy"
                  />
                  <Search sx={{ color: "#fff" }} />
                </ImageList>
              );
            })}
          </ImageContainer>
        </Stack>
      </Stack>
      <DialogModal
        openModal={openModal}
        imageSrc={imageSrc}
        name={name}
        handleClose={handleClose}
      />
    </>
  );
};

export default MainResponsiveGallery;
