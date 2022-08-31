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
  background-color: #f5f5f5;
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
    transition: all 0.3s ease-in-out;
  }
  :hover {
    > svg {
      opacity: 1;
    }
    img {
      filter: brightness(0.85);
      transform: scale(1.1);
    }
    > div {
      background-color: #7162d7;
      color: #fff;
    }
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
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
          data-aos="zoom-out"
          data-aos-delay="200"
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
                display: { xs: "none", md: "block" },
              },
              "& .MuiTabs-flexContainer": {
                flexDirection: { xs: "row", md: "column" },
                justifyContent: { xs: "space-around", md: "center" },
              },
            }}
            data-aos="fade-right"
            data-aos-delay="200"
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
                  marginRight: { xs: "0", md: "1rem" },
                  marginBottom: { xs: "0", md: "1rem" },
                  justifyContent: "flex-start",
                  padding: { xs: "18px", md: "12px 28px" },
                  "& > svg": {
                    margin: "4px!important",
                  },
                  flexDirection: { xs: "column", md: "row" },
                }}
              />
            ))}
          </Tabs>
          <ImageContainer
            direction={"row"}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {items.map((elem: any, index: number) => {
              const { id, name, image, url, description } = elem;

              return (
                <ImageList
                  key={`${name}_${id}`}
                  id={id}
                  onClick={() => {
                    // handleSelectImg({ name, image });
                    window.open(url, "_blank");
                  }}
                  // data-aos="zoom-up"
                  // data-aos-delay={`${index}200`}
                >
                  <Image src={image} layout="fill" alt={name} loading="lazy" />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      bottom: 0,
                      left: 0,
                      padding: "12px",
                      boxShadow: "0px 0px 24px rgb(150 150 150 / 50%)",
                      backgroundColor: "#f3f5fb",
                      borderTopLeftRadius: "36px",
                      fontSize: "12px",
                      color: "#505050",
                      fontWeight: 500,
                      wordBreak: "keep-all",
                      transition: "all 0.3s ease-in-out",
                      boxSizing: "border-box",
                      minHeight: "78px",
                    }}
                  >
                    <span>{description}</span>
                  </Box>
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
