import React from "react";
// import SwipeableViews from "react-swipeable-views";
import { Box, Stack, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import TabContentUI from "../UI/TabContent.UI";
import styled from "styled-components";

const ImageContainer = styled.div<{ bgColor: string }>`
  padding: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  overflow: hidden;
  & > span {
    position: unset !important;
    img {
      height: auto !important;
      position: relative !important;
      transition: all 0.3s ease-in-out;
    }
  }
  :hover {
    img {
      scale: 1.1;
    }
  }
`;

const componentArray = [
  {
    title: "다른업체 제작 사이트",
    text: "다른업체의 제작 사이트는 하나의 요소를 클릭할때마다 사이트 전체를 새로고침 합니다.",
    imgRes: "component-js.gif",
    bgColor: "#d9d9d9",
    anchor: "right",
  },
  {
    title: "플루톤 제작 사이트",
    text: "플루톤은 변경될 요소만 변경되어 가장빠르게 반응할수 있습니다.",
    imgRes: "component-react.gif",
    bgColor: "#7162d7",
    anchor: "left",
  },
];

const OptimizePluton = () => {
  return (
    <Stack id="optimize">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        플루톤의 웹사이트 최적화
      </Typography>

      <Stack direction={"row"} spacing={8} justifyContent={"space-around"}>
        {componentArray.map((item, index) => (
          <Stack sx={{ flex: 1, maxWidth: 450 }} id={`index_${item.title}`}>
            <Typography
              variant="h4"
              component="h4"
              align="center"
              sx={{ mb: 2 }}
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="200"
            >
              {item.title}
            </Typography>
            <ImageContainer
              bgColor={item.bgColor}
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="300"
            >
              <Image
                layout="fill"
                src={`/images/image-res/component_react/${item.imgRes}`}
              />
            </ImageContainer>
            <Typography
              variant="body1"
              component="p"
              sx={{ mt: 2 }}
              align="center"
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="400"
            >
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OptimizePluton;
