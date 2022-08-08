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
    <>
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
      {/* <div className="container">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("breakfast")}
            >
              Breackfast
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lunch")}
            >
              Lunch
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("evening")}
            >
              Evening
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dinner")}
            >
              Dinner
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
        </ul>
      </div> */}

      {/* <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem: any) => {
            const { id, name, image, description, price } = elem;

            return (
              // @ts-ignore
              <div className="col-sm-4" id={id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img className="img-fluid" src={image} alt={name} />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title mb-0">{name}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between">
                          <div className="p-1">Price: {price}</div>
                          <button type="button" className="btn btn-success p-1">
                            Oreder Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default MainResponsiveGallery;
